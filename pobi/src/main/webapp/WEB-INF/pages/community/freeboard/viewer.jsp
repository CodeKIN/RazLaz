<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>

<!DOCTYPE html>
<html>
<head>
<title>${postdetail.SUBJECT}</title>

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" type="text/css"
	href="<c:url value="/css/kube.css"></c:url>" />
<link rel="stylesheet" type="text/css"
	href="<c:url value="/css/master.css"></c:url>" />

<script src="<c:url value="/js/jquery-1.10.2.js"></c:url>"></script>
<script src="<c:url value="/js/kube.buttons.js"></c:url>"></script>
<script src="<c:url value="/js/common.js"></c:url>"></script>
<script src="<c:url value="/js/freeboard/viewer.js"></c:url>"></script>

<style type="text/css">
table.width-100.table-simple.table-stroked thead tr th{
	text-align: center;
}

</style>
</head>
<body>
	<div class="wrapper">
		<div id="units-container">
			<!-- Header -->
			<%@include file="/WEB-INF/pages/include/header.html" %>
			<!-- Header -->
	
			<div id="units-container" align="right">
				<a href="#list" class="label label-blue" style="font-size: 15px;">목록</a>
				<a href="/community/freeboard/updatePost.do?post_id=${postdetail.POST_ID}" class="label label-blue" style="font-size: 15px;">수정</a>
				<a href="#write" class="label label-blue" style="font-size: 15px;">글쓰기</a>
			</div>
			<table class="width-100 table-simple table-stroked">
				<thead>
					<tr>
						<th>번호</th>
						<th>글쓴이</th>
						<th>조회</th>
						<th>날짜</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td style="text-align: center;">
							${postdetail.POST_ID}
						</td>
						<td style="text-align: center;">
							${postdetail.WRITER_ID}
						</td>
						<td style="text-align: center;">
							${postdetail.VIEW_COUNT}
						</td>
						<td style="text-align: center;">
							<fmt:formatDate value="${postdetail.WRITE_DT}" type="DATE" dateStyle="SHORT" /> <br />
							<fmt:formatDate value="${postdetail.WRITE_DT}" type="TIME" timeStyle="SHORT" />
						</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<td colspan="4">
							<div id="toc-base" class="nav-v">
								<div class="unit-100">
									<h1>
										${postdetail.SUBJECT}
									</h1>
									<p>
										${postdetail.CONTENT}
									</p>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td colspan="4">
							<div id="toc-base" class="nav-v">
								<div class="unit-100" style="text-align: center;">
									<h2>
										추천
									</h2>
								</div>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
			<div id="units-container" align="right">
				<a href="#list" class="label label-blue" style="font-size: 15px;">목록</a>
				<a href="/community/freeboard/updatePost.do?post_id=${postdetail.POST_ID}" class="label label-blue" style="font-size: 15px;">수정</a>
				<a href="#write" class="label label-blue" style="font-size: 15px;">글쓰기</a>
			</div>
		</div>
	</div>
</body>
</html>