jQuery(function() {
	(function($) {
		$("a[href='#freeboard']").bind("click", function(){
			var voSubmitsion = Submission.createSubmission();
			
			Common.attr(voSubmitsion, "method", "get");
			Common.attr(voSubmitsion, "action", "/community/freeboard/list.do");
		
			voSubmitsion.submit();
		});
	})(jQuery);
});
