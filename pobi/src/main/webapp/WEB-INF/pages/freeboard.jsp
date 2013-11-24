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
<script src="<c:url value="/js/freeboard.js"></c:url>"></script>
</head>
<body>
	<div class="wrapper">
		<div id="units-container">
			<div id="units-container" align="right">
				<a href="#write" class="label label-blue" style="font-size: 15px;">글쓰기</a>
			</div>
			<table class="width-100 table-striped">
				<thead>
					<tr>
						<th width="10%" style="text-align: center;">번호</th>
						<th width="70%" style="text-align: center;">제목</th>
						<th width="10%" style="text-align: center;">글쓴이</th>
						<th width="5%" style="text-align: center;">추천</th>
						<th width="5%" style="text-align: center;">조회</th>
					</tr>
				</thead>
				<c:forEach var="freeboard" items="${freeboardTable}" varStatus="c">
					<c:choose>
						<c:when test="${c.index % 2 == 0}">
							<thead>
								<tr>
									<th>${freeboard.POST_SEQ}</th>
									<th>${freeboard.SUBJECT}</th>
									<th>${freeboard.CONTENT}</th>
									<th>${freeboard.REPLY_SEQ}</th>
									<th>${freeboard.LIKE}</th>
									<th>${freeboard.VIEW_COUNT}</th>
								</tr>
							</thead>
						</c:when>
						<c:otherwise>
							<tbody>
								<tr>
									<td>${freeboard.POST_SEQ}</td>
									<td>${freeboard.SUBJECT}</td>
									<td>${freeboard.CONTENT}</td>
									<td>${freeboard.REPLY_SEQ}</td>
									<td>${freeboard.LIKE}</td>
									<td>${freeboard.VIEW_COUNT}</td>
								</tr>
							</tbody>
						</c:otherwise>
					</c:choose>
				</c:forEach>
			</table>
			<div id="units-container" align="right">
				
					<a href="#community" class="label-badge label-green label-small">◀</a>
					<a href="#community" class="label-badge label-green label-small">1</a>
					<a href="#community" class="label-badge label-green label-small">2</a>
					<a href="#community" class="label-badge label-green label-small">3</a>
					<a href="#community" class="label-badge label-green label-small">4</a>
					<a href="#community" class="label-badge label-green label-small">5</a>
					<a href="#community" class="label-badge label-green label-small">▶</a>
				
				<a href="#write" class="label label-blue" style="font-size: 15px;">글쓰기</a>
			</div>
		</div>
	</div>
</body>
</html>