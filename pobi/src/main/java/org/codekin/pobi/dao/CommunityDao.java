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
}