package org.codekin.util.http;

import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

import org.codekin.common.AbstractCommon;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

public class ImageDownloader extends AbstractCommon {
	private String baseSavePath = "C:/ImageDownloader";
	private String protocol;
	private String host;
	private String port;
	private String contextPath;

	public void getImage(String psUrl) {
		String[] urls = { psUrl };

		this.getImage(urls);
	}

	public void getImage(String[] urls) {

		File file = new File(baseSavePath.replace("/", File.separator));
		if (!file.exists()) {
			file.mkdir();
		} else {
			if (file.isFile()) {
				logger.info(baseSavePath + " : is not a directory...");
				return;
			}
		}

		for (String url : urls) {
			if(!url.startsWith("http")){
				url = "http://" + url;
			}
			
			this._setProtocol(url);
			this._setHost(url);

			file = new File((this.baseSavePath + "/" + this.host).replace("/", File.separator));

			if (!file.exists()) {
				file.mkdir();
			} else {
				if (file.isFile()) {
					logger.info(baseSavePath + " : is not a directory...");
					return;
				}
			}

			this._setPort(url);
//			this._setContextPath(url);

			List<String> imgSrcList = this._getImgTagList(url);

			int saveFileName = 1;
			for (String imgSrc : imgSrcList) {
				String extendsion = this._getExtendsion(imgSrc);

				Runnable runnable = new ImageDownloadable((baseSavePath + "/"
						+ this.host + "/")
						+ saveFileName++, this.protocol, this.host, extendsion,
						this.contextPath, imgSrc);
				new Thread(runnable).start();
			}
		}
	}

	private String _getExtendsion(String psImgSrc) {
		String result = "";
		if (psImgSrc.indexOf("?") != -1) {
			result = psImgSrc.substring(psImgSrc.lastIndexOf("."),
					psImgSrc.length());
		} else {
			result = psImgSrc.substring(psImgSrc.lastIndexOf("."),
					psImgSrc.length());
		}

		if (result.length() > 4) {
			result = ".jpg";
			logger.info("###################################################");
			logger.info("extension is undefined... set default jpg extension");
			logger.info(psImgSrc);
			logger.info("###################################################");
		}

		return result;
	}

	private void _setProtocol(String url) {
		try {
			URL baseUrl = new URL(url);

			this.protocol = baseUrl.getProtocol() + "://";
		} catch (MalformedURLException e) {
			this._printException(e);
		} finally {

		}
	}

	private void _setHost(String url) {
		try {
			URL baseUrl = new URL(url);

			this.host = baseUrl.getHost();
		} catch (MalformedURLException e) {
			this._printException(e);
		} finally {

		}
	}

	private void _setPort(String url) {
		try {
			URL baseUrl = new URL(url);

			int urlPort = baseUrl.getPort();
			if(urlPort == -1){
				this.port = "";
			}else{
				this.port = ":" + urlPort;
			}
		} catch (MalformedURLException e) {
			this._printException(e);
		} finally {

		}
	}

	private void _setContextPath(String url) {
		// http://codekin.com/xe/
		int urlLen = (this.protocol + this.host + this.port + "/").length();
		this.contextPath = url.substring(urlLen, url.indexOf("/", urlLen));
	}

	private List<String> _getImgTagList(String url) {
		List<String> result = new ArrayList<String>();

		try {
			Document doc = Jsoup.connect(url).get();
			Elements elements = doc.select("img");

			for (Element element : elements) {
				String imgSrc = element.attr("src");
				if (imgSrc.length() == 0) {
					imgSrc = element.attr("data-src");
				}
				result.add(imgSrc);
			}

		} catch (IOException e) {
			this._printException(e);
		}
		return result;
	}

	private void _printException(Exception e) {
		logger.error(e.getMessage());
		logger.error(e.getStackTrace());
		e.printStackTrace();
	}

}