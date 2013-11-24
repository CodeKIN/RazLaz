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
<link rel="stylesheet" type="text/css" href="<c:url value="/css/kube.css"></c:url>" />
<link rel="stylesheet" type="text/css" href="<c:url value="/css/master.css"></c:url>" />

<script src="<c:url value="/js/jquery-1.10.2.js"></c:url>"></script>
<script src="<c:url value="/js/common.js"></c:url>"></script>
<script src="<c:url value="/js/init.js"></c:url>"></script>

</head>
<body>
	<div class="units-container">
		<div class="message">
			<span class="close"></span>
			<header>Header</header>
			${randommachine }
		</div>
		<div class="message message-error">
			<span class="close"></span> ${randommachine}
		</div>
		<div class="message message-success">
			<span class="close"></span> ${randommachine}
		</div>
		<div class="message message-info">
			<span class="close"></span> ${randommachine}
		</div>
	</div>
</body>
</html>