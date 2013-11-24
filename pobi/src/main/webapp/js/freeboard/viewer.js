jQuery(function() {
	(function($) {
		$("a[href='#list']").click(function(){
			var voSubmitsion = Submission.createSubmission();
			voSubmitsion.attr("method", "get");
			voSubmitsion.attr("action", "/community/freeboard/list.do");
		
			voSubmitsion.submit();
		});
		
		$("a[href='#write']").click(function(){
			var voSubmitsion = Submission.createSubmission();
			voSubmitsion.attr("method", "get");
			voSubmitsion.attr("action", "/community/freeboard/write.do");
		
			voSubmitsion.submit();
		});
	})(jQuery);
});
