jQuery(function() {
	(function($) {
		$("a[href='#write']").click(function(){
			var voSubmitsion = Submission.createSubmission();
			voSubmitsion.attr("method", "get");
			voSubmitsion.attr("action", "/community/freeboard/write.do");
		
			voSubmitsion.submit();
		});
	})(jQuery);
});
