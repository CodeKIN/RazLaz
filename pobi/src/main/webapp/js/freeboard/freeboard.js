jQuery(function() {
	(function($) {
		$("a[href='#write']").click(function(){
			var voSubmitsion = Submission.createSubmission();
			Common.attr(voSubmitsion, "method", "get");
			Common.attr(voSubmitsion, "action", "/community/freeboard/write.do");
		
			voSubmitsion.submit();
		});
	})(jQuery);
});
