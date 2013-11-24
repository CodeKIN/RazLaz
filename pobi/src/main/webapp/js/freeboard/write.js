jQuery(function() {
	(function($) {
		var intervalId;
		var isSetComplate = false;
		
		/* **************************************************
		 * on load complete > web editor load               *
		 * **************************************************/
		var oEditors = [];
		nhn.husky.EZCreator.createInIFrame({
			oAppRef : oEditors,
			elPlaceHolder : "content",
			sSkinURI : "/exmodules/smarteditor/SmartEditor2Skin.html",
			fCreator : "createSEditor2"
		});
		/* **************************************************
		 * on load complete > web editor load               *
		 * **************************************************/

		
		/* **************************************************
		 * on editor loaded > web editor setting width 100% *
		 * **************************************************/
		intervalId = window.setInterval(function(){
			if(!!document.getElementsByTagName("iframe")){
				if(!!document.getElementsByTagName("iframe")[0]){
					var iframedoc = document.getElementsByTagName("iframe")[0].contentDocument;

					iframedoc.getElementById("smart_editor2").style.width = "99%";
					iframedoc.getElementById("smart_editor2_content").style.width = "99%";
					
					/* **************************************************
					 * responsive iframe                                *
					 * **************************************************/
					$(window).resize(function(){
						var iframeobj = document.getElementsByTagName("iframe")[0];
						iframeobj.style.height = iframedoc.body.offsetHeight + "px";
					});
					/* **************************************************
					 * responsive iframe                                *
					 * **************************************************/
					
					window.clearInterval(intervalId);
				}
			}
		}, 1000);

		/* **************************************************
		 * on editor loaded > web editor setting width 100% *
		 * **************************************************/
		
		
		/* **************************************************
		 * bind Elements                                    *
		 * **************************************************/
		
		$("a[href='#cancle']").click(function(){
			var voSubmitsion = Submission.createSubmission();

			voSubmitsion.attr("method", "get");
			voSubmitsion.attr("action", "/community/freeboard/list.do");
		
			voSubmitsion.submit();
		});
		
		$("a[href='#save']").click(this, function(elClickedObj){
			var targetform = this.parentElement.parentElement;
			
		    // editor's text value copy at textarea
		    oEditors.getById["content"].exec("UPDATE_CONTENTS_FIELD", []);
		 
		    // value validation is 
		    // document.getElementById("content").value
		    try {
		    	targetform.action = "/community/freeboard/save.do";
		    	targetform.submit();
		    } catch(e) {}
		});
		
		/* **************************************************
		 * bind Elements                                    *
		 * **************************************************/
	})(jQuery);
});