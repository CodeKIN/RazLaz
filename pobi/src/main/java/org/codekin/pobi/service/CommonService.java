package org.codekin.pobi.service;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.io.IOUtils;
import org.apache.log4j.Logger;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;

public class CommonService {

	// 로거
	protected Logger logger = Logger.getLogger(this.getClass());

	// CommonAbstractService의 절대 경로
	private String msThisClassPath = this.getClass()
			.getResource("").getPath();

	// 파일이 저장될 절대 경로
	private String msFileSaveBasePath = (msThisClassPath.substring(0,
			msThisClassPath.lastIndexOf("/WEB-INF")) + "/uploadfiles/");

	// 저장된 파일명
	protected String ORIGINAL_FILE_NAME = "ORIGINAL_FILE_NAME";

	// 원본 파일명
	protected String SAVED_FILE_NAME = "SAVED_FILE_NAME";

	protected String FILE_SEPARETOR = "/";

	public String getMsThisClassPath() {
		return msThisClassPath;
	}

	public String getMsFileSaveBasePath() {
		return msFileSaveBasePath;
	}

	protected String getUniqueFileName() {
		return UUID.randomUUID().toString().replace("-", "");
	}

	/**
	 * MultipartHttpServletRequest에 존재하는 파일들을 List<MultipartFile> 형태로 반환한다.
	 * 
	 * @param multipartHttpServletRequest
	 *            MultipartHttpServletRequest
	 * @return List<MultipartFile>
	 */
	private List<MultipartFile> getMultipartFile(
			MultipartHttpServletRequest multipartHttpServletRequest) {
		Iterator fileNames = multipartHttpServletRequest.getFileNames(); // 파일명정보를
																			// 배열로
																			// 만들다

		List<MultipartFile> fileList = new ArrayList<MultipartFile>();

		while (fileNames.hasNext()) {
			String fileName = (String) fileNames.next();

			MultipartFile multipartFile = (MultipartFile) multipartHttpServletRequest
					.getFile(fileName);

			fileList.add(multipartFile);
		}

		return fileList;
	}

	/**
	 * 파일을 디스크에 쓴다.
	 * 
	 * @param multipartFile
	 *            MultipartHttpServletRequest
	 * @param psReqLocation
	 *            저장될 서비스 폴더명
	 * @return List<map<String, Object>>
	 */
	protected List<Map<String, Object>> writeFile(
			MultipartHttpServletRequest multipartHttpServletRequest,
			String psReqLocation) {

		List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();

		OutputStream out = null;
		BufferedInputStream bis = null;

		// net.anchorfactory.Service.ServiceBO >> service
		psReqLocation = psReqLocation.substring(
				psReqLocation.lastIndexOf(".") + 1, psReqLocation.length() - 2)
				.toLowerCase();

		try {
			List<MultipartFile> multipartFiles = this
					.getMultipartFile(multipartHttpServletRequest);

			for (MultipartFile multipartFile : multipartFiles) {
				Map<String, Object> map = new HashMap<String, Object>();

				String uuid = this.getUniqueFileName();
				String originalFileName = multipartFile.getOriginalFilename();
				
				if(originalFileName.length() < 1){
					map.put("ORIGINAL_FILE_NAME", "");
					map.put("SAVED_FILE_NAME", "");
					list.add(map);
					continue;
				}
				
				String fileExpression = multipartFile.getOriginalFilename().substring(multipartFile.getOriginalFilename().lastIndexOf("."), multipartFile.getOriginalFilename().length());
				
				uuid += fileExpression;
				
				String vsTargetDir = this.getMsFileSaveBasePath()
						+ psReqLocation + FILE_SEPARETOR + uuid;

				this.mkDir(vsTargetDir);

				out = new FileOutputStream(vsTargetDir);
				bis = new BufferedInputStream(multipartFile.getInputStream());
				logger.debug(vsTargetDir);
				byte[] buffer = new byte[1024];
				int read;

				while ((read = bis.read(buffer)) > 0) {
					out.write(buffer, 0, read);
					out.flush();
				}

				map.put("ORIGINAL_FILE_NAME", originalFileName);
				map.put("SAVED_FILE_NAME", uuid);
				list.add(map);
			}
		} catch (IOException ioe) {
			ioe.printStackTrace();
		} finally {
			IOUtils.closeQuietly(out);
		}

		return list;
	}
	
	protected void removeFile(String psFileName, String psReqLocation) {
		
		// net.anchorfactory.Service.ServiceBO >> service
		psReqLocation = psReqLocation.substring(
				psReqLocation.lastIndexOf(".") + 1, psReqLocation.length() - 2)
				.toLowerCase();
		
		File f = new File(this.getMsFileSaveBasePath() + psReqLocation
				+ FILE_SEPARETOR + psFileName);

		if (f.exists()) {
			f.delete();
		}
	}

	private void mkDir(String psFilePath) {
		String[] vsDirectorys = psFilePath.split(FILE_SEPARETOR);
		String vsTarget = "";

		for (int i = 0, len = vsDirectorys.length - 1; i < len; i++) {
			vsTarget += vsDirectorys[i] + FILE_SEPARETOR;

			File f = new File(vsTarget.substring(0,
					vsTarget.lastIndexOf(FILE_SEPARETOR)));
			if (!(f.exists())) {
				f.mkdir();
			}
		}
	}

	protected Map<String, Object> getParamMap(Object[] poValues) {
		String[] vsKeys = new String[poValues.length];

		for (int i = 0, len = poValues.length; i < len; i++) {
			vsKeys[i] = poValues[i].toString();
		}
		return this.getParamMap(vsKeys, poValues);
	}

	protected Map<String, Object> getParamMap(String[] psKeys, Object[] poValues) {
		Map<String, Object> result = new HashMap<String, Object>();

		if (psKeys.length != poValues.length) {
			logger.debug("key와 value의 쌍의 맞지 않습니다.");
		}

		for (int i = 0, len = psKeys.length; i < len; i++) {
			result.put(psKeys[i], poValues[i]);
		}

		return result;
	}

	protected Map<String, Object> getParamMap(String psKey,
			HttpServletRequest poRequest) {
		String[] vsKey = { psKey };
		return this.getParamMap(vsKey, poRequest);
	}

	protected Map<String, Object> getParamMap(String[] psKeys,
			HttpServletRequest poRequest) {
		Map<String, Object> result = new HashMap<String, Object>();

		for (int i = 0, len = psKeys.length; i < len; i++) {
    			result.put(psKeys[i], poRequest.getParameter(psKeys[i]));
		}

		return result;
	}
	
	protected HttpServletRequest getRequest(){
		return ((ServletRequestAttributes) RequestContextHolder
				.getRequestAttributes())
				.getRequest();
	}
	
	protected Locale getLocale(){
		return (Locale) this.getRequest()
				.getSession()
				.getAttribute(
						SessionLocaleResolver.LOCALE_SESSION_ATTRIBUTE_NAME);
	}

	protected MultipartHttpServletRequest getMultipartHttpServletRequest(HttpServletRequest request){
		return (MultipartHttpServletRequest) request;
	}
}