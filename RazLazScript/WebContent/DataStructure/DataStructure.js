var dataStructure = null;

function DataStructure(){}

/* **********************************************
 * 실행
 * **********************************************/

DataStructure.prototype.execute = function(poForm){
	var voCheckedButton = this._getCheckedButton(poForm);
	
	if(voCheckedButton === null){
		console.log("not exist checked button...");
		return null;
	}
	
	var voCheckValue = voCheckedButton.value;
	var vsInnerText = voCheckedButton.parentElement.parentElement.innerText;
	//필드셋 안에 들어있는 것으로 선형/비선형을 구분함.
	//최초 엔터까지 0부터 잘라내어 구분자로 취급함.
	var vsDivName = vsInnerText.substring(0, vsInnerText.indexOf("\n"));
	
	//requireJS라이브러리를 통하여 원하는 JS가 로딩이 완료된 이후에 template()를 호출토록함.
	require(["./" + vsDivName + "/" + voCheckValue + ".js"], function() {
		var structrue = eval("new " + voCheckValue + "()");
		
		//모든 자료구조객체들이 가지고있는 공통 template() 메서드를 호출시킴.
		structrue.template();
	});
}

/* **********************************************
 * 내장 메서드
 * **********************************************/

DataStructure.prototype._getCheckedButton = function(poForm){
	var radioButtons = poForm.type;
	
	//라디오 버튼중 선택된 라디오버튼을 반환함.
	for(var i = 0, len = radioButtons.length; i < len; i++){
		if(radioButtons[i].checked === true){
			return radioButtons[i];
		}
	}
	
	return null;
}