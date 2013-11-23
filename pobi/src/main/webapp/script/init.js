jQuery(function() {
	(function($) {
		$("a[href='#home']").bind("click", function(){
			//go home
			window.location.href = "/"; 
		});
		$("a[href='#randomMachine']").bind("click", function(){
			//load random machine
			Common.attr("loadplace", "src", "/randommachine.jsp");
			Common.css("loadplace", "display", "block");
		});
		$("a[href='#community']").bind("click", function(){
			//load community
			Common.attr("loadplace", "src", "/community.jsp");
			Common.css("loadplace", "display", "block");
		});
		$("a[href='#usedMarketplaces']").bind("click", function(){
			//load usedMarketplaces
			Common.attr("loadplace", "src", "/usedmarketplaces.jsp");
			Common.css("loadplace", "display", "block");
		});
	})(jQuery);
});