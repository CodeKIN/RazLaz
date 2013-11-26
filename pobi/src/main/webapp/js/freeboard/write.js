jQuery(function() {
	(function($) {
		var intervalId;
		
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
					
					$("#subject").css("width", (iframedoc.getElementById("smart_editor2_content").clientWidth - 3) + "px");
					
					/* **************************************************
					 * responsive iframe, input                         *
					 * **************************************************/
					$(window).resize(function(){
						var iframeobj = document.getElementsByTagName("iframe")[0];
						var heightPx  = iframedoc.body.offsetHeight + "px";
						
						iframeobj.style.height = heightPx;
						$("#subject").css("width", (iframedoc.getElementById("smart_editor2_content").clientWidth - 3) + "px");
					});
					/* **************************************************
					 * responsive iframe, input                         *
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
		
		$("#subject").keydown(this, function(event){
			if(event.keyCode === 13){
				return false;
			}
			return true;
		});
		
		$("a[href='#cancle']").click(function(){
			var voSubmitsion = Submission.createSubmission();

			Common.attr(voSubmitsion, "method", "get");
			Common.attr(voSubmitsion, "action", "/community/freeboard/list.do");
		
			voSubmitsion.submit();
		});
		
		$("a[href='#save']").click(function(elClickedObj){
			if(!confirm("정말로 저장하시겠습니까?")){
				return false;
			}
			
			var targetform = document.getElementsByTagName("form")[0];
			
		    // editor's text value copy at textarea
		    oEditors.getById["content"].exec("UPDATE_CONTENTS_FIELD", []);
		 
		    // value validation is 
		    // document.getElementById("content").value
		    try {
		    	if(targetform.prefix.value === "update"){
		    		targetform.action = "/community/freeboard/update.do";
		    	}else{
		    		targetform.action = "/community/freeboard/save.do";
		    	}
		    	targetform.submit();
		    } catch(e) {}
		});
		
		/* **************************************************
		 * bind Elements                                    *
		 * **************************************************/
	})(jQuery);
});