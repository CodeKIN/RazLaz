package org.codekin.pobi.dao;

import java.util.List;
import java.util.Map;

import org.codekin.pobi.model.FreeBoard;
import org.springframework.orm.ibatis.support.SqlMapClientDaoSupport;
import org.springframework.stereotype.Repository;

@Repository
public class CommunityDao extends SqlMapClientDaoSupport {

	private static final String NAMESPACE = "FreeBoard.";

	public List<FreeBoard> selectFreeBoardList(Map<String, Object> param) {
		// TODO Auto-generated method stub
		return (List<FreeBoard>)getSqlMapClientTemplate().queryForList(NAMESPACE + "selectFreeBoardList", param);
	}

	public int selectFreeBoardTotalCount() {
		// TODO Auto-generated method stub
		return Integer.parseInt(getSqlMapClientTemplate().queryForObject(NAMESPACE + "selectTotalPostCount").toString());
	}

	public void saveFreeBoard(Map<String, Object> param) {
		// TODO Auto-generated method stub
		getSqlMapClientTemplate().insert(NAMESPACE + "saveFreeBoard", param);
	}

	public FreeBoard selectPostDetail(Map<String, Object> param) {
		// TODO Auto-generated method stub
		return (FreeBoard)getSqlMapClientTemplate().queryForObject(NAMESPACE + "selectPostDetail", param);
	}

	public String selectWriterId(Map<String, Object> param) {
		// TODO Auto-generated method stub
		return getSqlMapClientTemplate().queryForObject(NAMESPACE + "selectWriterId", param).toString();
	}

	public void updatePost(Map<String, Object> param) {
		// TODO Auto-generated method stub
		getSqlMapClientTemplate().update(NAMESPACE + "updatePost", param);
	}
}