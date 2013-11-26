package org.codekin.pobi.service;

import java.util.HashMap;
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
	
	//viewPostCnt
	private final static int pageCnt      = 15;
	//viewPageCnt
	private final static int pageGrp      = 10;

	public Map<String, Object> selectFreeBoardList() {
		HttpServletRequest request = this.getRequest();

		int totCnt       = 0;
		int totPage      = 0;
		int currentPage  = request.getParameter("client_page") != null ? Integer.parseInt(request.getParameter("client_page").toString()) : 1;
		int startPageNum = currentPage % pageGrp == 0 ? (currentPage / pageGrp - 1) * pageGrp + 1 : (currentPage / pageGrp) * pageGrp + 1;
		int endPageNum   = startPageNum + pageGrp - 1;
		int startRow     = currentPage * pageCnt - pageCnt;
		int endRow       = pageCnt;
		

		Map<String, Object> result = new HashMap<String, Object>();

		/* ****************************
		 * select boardList
		 * ****************************/
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("startrow", startRow);
		param.put("endrow", endRow);
		result.put("boardList", communityDao.selectFreeBoardList(param));

		/* ****************************
		 * select boardList
		 * ****************************/
		

		/* ****************************
		 * create pagingInfo
		 * ****************************/
		
		totCnt = communityDao.selectFreeBoardTotalCount();
		
		totPage = totCnt / pageCnt + (totCnt % pageCnt == 0 ? 0 : 1);
		
		
		Map<String, Object> pagingInfo = new HashMap<String, Object>();
		
		pagingInfo.put("totcnt", totCnt);
		pagingInfo.put("totpage", totPage);
		pagingInfo.put("startpagenum", startPageNum);
		pagingInfo.put("endpagenum", endPageNum);
		pagingInfo.put("pagegrp", pageGrp);
		pagingInfo.put("client_page", currentPage);
		
		result.put("pagingInfo", pagingInfo);
		
		/* ****************************
		 * create pagingInfo
		 * ****************************/
		
		return result;
	}

	public void saveFreeBoardList() {
		HttpServletRequest request = this.getRequest();
		String[] keys = {"subject", "content"};
		
		Map<String, Object> param = this.getParamMap(keys, request);
		
		param.put("writer_id", request.getSession(false).getAttribute("USER_ID"));
		
		communityDao.saveFreeBoard(param);
	}

	public FreeBoard selectPostDetail() {
		HttpServletRequest request = this.getRequest();
		String[] keys = {"post_id"};
		
		Map<String, Object> param = this.getParamMap(keys, request);
		
		return communityDao.selectPostDetail(param);
	}

	public String updatePost() {
		HttpServletRequest request = this.getRequest();
		String[] keys = {"post_id", "subject", "content"};
		Map<String, Object> param = this.getParamMap(keys, request);
		
		/* ***************************************
		 * checking writer and requester         *
		 * ***************************************/
		
		if(communityDao.selectWriterId(param).equals(request.getSession(false).getAttribute("USER_ID"))){
			communityDao.updatePost(param);
		}
		
		/* ***************************************
		 * checking writer and requester         *
		 * ***************************************/

		return request.getParameter("post_id");
	}
}