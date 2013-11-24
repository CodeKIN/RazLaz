package org.codekin.pobi.service;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.codekin.pobi.dao.CommunityDao;
import org.codekin.pobi.model.FreeBoard;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommunityService extends CommonService{
	@Autowired
	private CommunityDao communityDao;

	public List<FreeBoard> selectFreeBoardList() {
		HttpServletRequest request = this.getRequest();
		
		Map<String, Object> param = this.getParamMap("pageseq", request);
		
		return communityDao.selectFreeBoardList(param);
	}

	public void saveFreeBoardList() {
		HttpServletRequest request = this.getRequest();
		String[] keys = {"subject", "content"};
		
		Map<String, Object> param = this.getParamMap(keys, request);
		
		param.put("writer_id", request.getSession(false).getAttribute("USER_ID"));
		
		/*
		 * prototype
		 */
		param.put("writer_id", "CodeKIN");
		communityDao.saveFreeBoard(param);
	}
}