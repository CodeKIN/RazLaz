package org.codekin.common;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;

public class AbstractCommon {
	protected Logger logger = Logger.getLogger(this.getClass());
	
	protected AbstractCommon(){
		PropertyConfigurator.configure(this.getClass().getResource(".").getPath()+"../../properties/log4j.properties");
	}
}
