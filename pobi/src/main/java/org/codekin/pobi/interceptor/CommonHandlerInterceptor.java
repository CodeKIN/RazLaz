package org.codekin.pobi.interceptor;

import java.util.Enumeration;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

public class CommonHandlerInterceptor extends HandlerInterceptorAdapter{
	private Logger logger = Logger.getLogger(CommonHandlerInterceptor.class);
	@Override
	public boolean preHandle(HttpServletRequest request,
			HttpServletResponse response, Object handler) throws Exception {
		
		

		/* *********************************
		 * print request user infos...
		 * *********************************/
		logger.info("=========request user infos=========");
		logger.info("host and port : " + request.getRemoteHost() + ":" + request.getRemotePort());
		logger.info("remote Addr   : " + request.getRemoteAddr());
		logger.info("request URI   : " + request.getRequestURI());
		logger.info("=========request user infos=========");
		/* *********************************
		 * print request user infos...
		 * *********************************/
		

		
		
		
		
		
		
		
		/* *********************************
		 * print request paramters...
		 * *********************************/
		
		logger.info("=========request parameters=========");
		
		Enumeration names = request.getParameterNames();
		
		int paramCnt = 0;
		while(names.hasMoreElements()){
			paramCnt++;
			String key = names.nextElement().toString();
			Object param = request.getParameter(key);

			logger.info(key + " : " + param.toString());
		}
		if(paramCnt == 0){
			logger.info("param is empty...");
		}
		
		logger.info("====================================");
		
		/* *********************************
		 * print request paramters...
		 * *********************************/
		
		return super.preHandle(request, response, handler);
	}
}