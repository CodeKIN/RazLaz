jQuery(function() {
	(function($) {
		$("a.randommachine").click(function(){
			window.location.href = "/randommachine.do";
		});

		$("a[href='#freeboard']").click(function(){
			var voSubmitsion = Submission.createSubmission();
			voSubmitsion.attr("method", "get");
			voSubmitsion.attr("action", "/community/freeboard/list.do");
		
			voSubmitsion.submit();
		});
	})(jQuery);
});
