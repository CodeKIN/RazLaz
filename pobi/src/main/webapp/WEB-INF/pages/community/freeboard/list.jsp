<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<!DOCTYPE html>
<html>
<head>
<title>Title</title>

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" type="text/css"
	href="<c:url value="/css/kube.css"></c:url>" />
<link rel="stylesheet" type="text/css"
	href="<c:url value="/css/master.css"></c:url>" />

<script src="<c:url value="/js/jquery-1.10.2.js"></c:url>"></script>
<script src="<c:url value="/js/kube.buttons.js"></c:url>"></script>
<script src="<c:url value="/js/common.js"></c:url>"></script>
<script src="<c:url value="/js/freeboard/freeboard.js"></c:url>"></script>
<style>
table thead.title tr th{
	color: black;
	font-weight: bold;
	vertical-align: middle;
	text-align: center;
}

table thead tr th,
table tbody tr td{
	color: black;
	font-weight: normal;
	vertical-align: middle;
}
table thead tr:HOVER,
table tbody tr:HOVER{
	background-color: #ffdab9;
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
				<a href="#write" class="label label-blue" style="font-size: 15px;">글쓰기</a>
			</div>
			<table class="width-100 table-striped">
				<thead class="title">
					<tr>
						<th width="10%">번호</th>
						<th width="70%">제목</th>
						<th width="10%">글쓴이</th>
						<th width="5%">추천</th>
						<th width="5%">조회</th>
					</tr>
				</thead>
				<c:forEach var="row" items="${freeboard}" varStatus="c">
					<c:choose>
						<c:when test="${c.count % 2 eq 0}">
							<thead>
								<tr>
									<td>${row.POST_ID}</td>
									<td>
										<a href="/community/freeboard/postview.do?post_id=${row.POST_ID}">${row.SUBJECT}</a>
									</td>
									<td>${row.WRITER_ID}</td>
									<td>${row.LIKE_COUNT}</td>
									<td>${row.VIEW_COUNT}</td>
								</tr>
							</thead>
						</c:when>
						<c:otherwise>
							<thead>
								<tr>
									<th>${row.POST_ID}</th>
									<th>
										<a href="/community/freeboard/postview.do?post_id=${row.POST_ID}">${row.SUBJECT}</a>
									</th>
									<th>${row.WRITER_ID}</th>
									<th>${row.LIKE_COUNT}</th>
									<th>${row.VIEW_COUNT}</th>
								</tr>
							</thead>
						</c:otherwise>
					</c:choose>
				</c:forEach>
			</table>

			<div id="units-container" align="right">
				<c:if test="${paginginfo.startpagenum - paginginfo.pagegrp gt 0}">
					<a href="/community/freeboard/list.do?client_page=${(paginginfo.startpagenum - 1)}" class="label">[prev]</a>
				</c:if>

				<c:forEach varStatus="c" begin="${paginginfo.startpagenum}" end="${paginginfo.endpagenum}" step="1">
					<c:if test="${c.index le paginginfo.totpage}">
						<c:choose>
							<c:when test="${c.index ne paginginfo.client_page}">
								<a href="/community/freeboard/list.do?client_page=${c.index}" class="label">${c.index}</a>
							</c:when>
							<c:otherwise>
								<a href="/community/freeboard/list.do?client_page=${c.index}" class="label"><b>${c.index}</b></a>
							</c:otherwise>
						</c:choose>
					</c:if>
				</c:forEach>
				
				<c:if test="${paginginfo.endpagenum lt paginginfo.totpage}">
					<a href="/community/freeboard/list.do?client_page=${(paginginfo.endpagenum) + 1}" class="label">[next]</a>
				</c:if>
				<a href="#write" class="label label-blue" style="font-size: 15px;">글쓰기</a>
			</div>
		</div>
	</div>
</body>
</html>