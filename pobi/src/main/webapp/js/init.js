jQuery(function() {
	(function($) {
		$("a.randommachine").click(function(){
			window.location.href = "/randommachine.do";
		});

		$("a[href='#freeboard']").click(function(){
			window.location.href = "/freeboard.do";
		});
	})(jQuery);
});
