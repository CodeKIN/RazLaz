package org.codekin.pobi.model;

import java.util.Date;

public class FreeBoard {
	private int POST_ID;
	private String SUBJECT;
	private String CONTENT;
	private int LIKE_COUNT;
	private int VIEW_COUNT;
	private String WRITER_ID;
	private Date WRITE_DT;
	
	public int getPOST_ID() {
		return POST_ID;
	}
	public void setPOST_ID(int pOST_ID) {
		POST_ID = pOST_ID;
	}
	public String getSUBJECT() {
		return SUBJECT;
	}
	public void setSUBJECT(String sUBJECT) {
		SUBJECT = sUBJECT;
	}
	public String getCONTENT() {
		return CONTENT;
	}
	public void setCONTENT(String cONTENT) {
		CONTENT = cONTENT;
	}
	public int getVIEW_COUNT() {
		return VIEW_COUNT;
	}
	public void setVIEW_COUNT(int vIEW_COUNT) {
		VIEW_COUNT = vIEW_COUNT;
	}
	public String getWRITER_ID() {
		return WRITER_ID;
	}
	public void setWRITER_ID(String wRITER_ID) {
		WRITER_ID = wRITER_ID;
	}
	public Date getWRITE_DT() {
		return WRITE_DT;
	}
	public void setWRITE_DT(Date wRITE_DT) {
		WRITE_DT = wRITE_DT;
	}
	public int getLIKE_COUNT() {
		return LIKE_COUNT;
	}
	public void setLIKE_COUNT(int lIKE_COUNT) {
		LIKE_COUNT = lIKE_COUNT;
	}
}