Common = {
		attr : function(vsSelector, psAttrName, psAttrValue){
			var selector = $("." + vsSelector);
			var vsNowAttr = selector.attr(psAttrName);
			
			if(vsNowAttr !== psAttrValue){
				selector.attr(psAttrName, psAttrValue);
			}
		},

		css : function(vsSelector, psAttrName, psAttrValue){
			var selector = $("." + vsSelector);
			var vsNowAttr = selector.css(psAttrName);
			
			if(vsNowAttr !== psAttrValue){
				selector.css(psAttrName, psAttrValue);
			}
		}
};