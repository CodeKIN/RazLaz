package org.codekin.util.mainclasses;

import org.codekin.common.AbstractCommon;
import org.codekin.util.http.ImageDownloader;

public class ImageDownloaderMain extends AbstractCommon {
	public static void main(String[] args) {
		
		String[] urls = {"naver.com", "daum.net"};
		
		ImageDownloader id = new ImageDownloader();
		
		id.getImage(urls);
	}
}