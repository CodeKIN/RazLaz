package org.codekin.util.http;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.UUID;

import org.codekin.common.AbstractCommon;

public class ImageDownloadable extends AbstractCommon implements Runnable {
	private String savepath;
	private String protocol;
	private String host;
	private String port;
	private String contextPath;
	private String extendsion;
	private String imgSrc;

	public ImageDownloadable(String savepath, String protocol, String host,
			String extension, String contextPath, String imgSrc) {
		this.savepath = savepath;
		this.protocol = protocol;
		this.host = host;
		this.extendsion = extension;
		this.contextPath = contextPath;
		this.imgSrc = imgSrc;
	}

	@Override
	public void run() {
		InputStream is = null;
		FileOutputStream fos = null;
		BufferedInputStream bis = null;
		BufferedOutputStream bos = null;
		
		try {
			
			this._urlValidCheck();
			
			URL voImageURL = new URL(this.imgSrc);
			// 이미지에 해당하는 url을 통하여 커넥션을 진행
			logger.debug(voImageURL);
			HttpURLConnection voImageReponse = (HttpURLConnection) voImageURL
					.openConnection();
			
			// 200_OK 응답에 대해서만 처리
			logger.info(imgSrc + " :::::::::::::::::::::::::::::::::::: " + voImageReponse.getResponseCode());
			if (voImageReponse.getResponseCode() == HttpURLConnection.HTTP_OK) {
				is = voImageReponse.getInputStream();

				File file = new File((this.savepath + this.extendsion).replace("/", File.separator));
				
				if(file.exists()){
					this.savepath = this.savepath + UUID.randomUUID().toString();
				}
				
				// 응답 코드를 C:\1.jpg에 저장
				logger.debug(this.savepath + this.extendsion + "##########################");
				fos = new FileOutputStream(this.savepath + this.extendsion);
				bis = new BufferedInputStream(is);
				bos = new BufferedOutputStream(fos);

				// 응답 코드를 1024바이트 단위로 저장
				int len = 0;
				byte[] buf = new byte[1024];
				while ((len = bis.read(buf, 0, 1024)) != -1) {
					bos.write(buf, 0, len);
					bos.flush();
				}
				
				synchronized (logger) {
					logger.info(this.imgSrc + " ::::::> is successfully download done...");
				}
			} else {
				synchronized (logger) {
					logger.error("connection faild... ::::::> " + this.imgSrc);
				}
			}
		} catch (MalformedURLException e) {
			this._printException(e);
		} catch (IOException e) {
			this._printException(e);
		}finally{
			try {
				if(is != null){is.close();}
				if(fos != null){fos.close();}
				if(bis != null){bis.close();}
				if(bos != null){bos.close();}
			} catch (IOException e1) {
				this._printException(e1);
			}
		}
	}

	private void _printException(Exception e){
		logger.error(e.getMessage());
		logger.error(e.getStackTrace());
		e.printStackTrace();
	}

	private void _urlValidCheck() {
		if(this.imgSrc.startsWith("//")){
			this.imgSrc = this.protocol + this.host + this.port + "/" + this.imgSrc.substring("//".length());
		}else if(this.imgSrc.startsWith("/")){
			this.imgSrc = this.protocol + this.host + this.port + "/" + this.imgSrc.substring("/".length());
		}
		
	}
}