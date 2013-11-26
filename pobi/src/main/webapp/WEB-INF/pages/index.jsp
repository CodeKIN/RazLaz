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
<link rel="stylesheet" type="text/css" href="css/kube.min.css" />
<link rel="stylesheet" type="text/css" href="css/master.css" />

<script src="http://code.jquery.com/jquery.min.js"></script>

</head>
<body>
	${randommachine }
	<div class="units-container">
		<div class="message">
			<span class="close"></span>
			<header>Header</header>
			Attention, this is message!
		</div>
		<div class="message message-error">
			<span class="close"></span> Warning, this is message!
		</div>
		<div class="message message-success">
			<span class="close"></span> So good, this is message!
		</div>
		<div class="message message-info">
			<span class="close"></span> Yhaam, this is info!
		</div>



		<figure class="image-left">
			<img src="/img/image.jpg" alt="" width="200" />
			<figcaption>Figcaption here...</figcaption>
		</figure>

	</div>
</body>
</html>