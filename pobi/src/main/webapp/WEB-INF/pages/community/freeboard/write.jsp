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
<script src="<c:url value="/exmodules/smarteditor/js/HuskyEZCreator.js"></c:url>"></script>
<script src="<c:url value="/js/freeboard/write.js"></c:url>"></script>

</head>
<body>
	<div class="wrapper">
		<!-- Header -->
		<%@include file="/WEB-INF/pages/include/header.html" %>
		<!-- Header -->
		
		<div id="units-container" align="right">
			<div id="units-container" align="right">
				<a href="#cancle" class="label label-blue" style="font-size: 15px;"">취소</a>
				<a href="#save" class="label label-blue" style="font-size: 15px;"">저장</a>
			</div>
			<form method="post" class="forms" style="text-align: left;">
				<c:choose>
					<c:when test="${postdetail ne null}">
						<input type="hidden" id="prefix" value="update" />
						<input type="hidden" name="post_id" value="${postdetail.POST_ID}"
						<div>
							제목
							<input type="text" name="subject" id="subject" value="${postdetail.SUBJECT}" />
						</div>
						
						<div>
							<textarea name="content" id="content" rows="10" cols="100">${postdetail.CONTENT}</textarea>
						</div>	
					</c:when>
					<c:otherwise>
						<input type="hidden" id="prefix" value="write" />
						<div style="width: 100%;">
							제목
							<input type="text" name="subject" id="subject" style="width: 100%;"/>
						</div>
						
						<div>
							<textarea name="content" id="content" rows="10" cols="100"></textarea>
						</div>
					</c:otherwise>
				</c:choose>
			</form>
			</div>
	</div>
</body>
</html>