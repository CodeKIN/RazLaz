//remove를 고려하지 않음

function BinaryTree(paArray){
	this.repository = paArray || [""];
	this.FRONT_TRAVEL = 1;
	this.MIDDLE_TRAVEL = 2;
	this.BACK_TRAVEL = 3;
	this.travelStr = "";
}

BinaryTree.prototype.put = function(poData){
	this.repository.push(poData);
}

BinaryTree.prototype.travel = function(pnType){
	console.log("========start travle========");
	this._printTravel(pnType);
	console.log("========end travle========");
}

BinaryTree.prototype._printTravel = function(pnType){
	if(pnType === this.FRONT_TRAVEL){
		this._PRE_TRAVEL(1);
		console.log(this.travelStr.substring(0, this.travelStr.length - 2));
		this.travelStr = "";
	}else if(pnType === this.MIDDLE_TRAVEL){
		this._MID_TRAVEL(1);
		console.log(this.travelStr.substring(0, this.travelStr.length - 2));
		this.travelStr = "";
	}else if(pnType === this.BACK_TRAVEL){
		this._BAK_TRAVEL(1);
		console.log(this.travelStr.substring(0, this.travelStr.length - 2));
		this.travelStr = "";
	}
}

BinaryTree.prototype._PRE_TRAVEL = function(pnIdx){
	if(!!this.repository[pnIdx]){
		this.travelStr += this.repository[pnIdx] + ", ";
		this._PRE_TRAVEL(pnIdx * 2);
		this._PRE_TRAVEL((pnIdx * 2) + 1);
	}
}

BinaryTree.prototype._MID_TRAVEL = function(pnIdx){
	if(!!this.repository[pnIdx]){
		this._PRE_TRAVEL(pnIdx * 2);
		this.travelStr += this.repository[pnIdx] + ", ";
		this._PRE_TRAVEL((pnIdx * 2) + 1);
	}
}

BinaryTree.prototype._BAK_TRAVEL = function(pnIdx){
	if(!!this.repository[pnIdx]){
		this._PRE_TRAVEL(pnIdx * 2);
		this._PRE_TRAVEL((pnIdx * 2) + 1);
		this.travelStr += this.repository[pnIdx] + ", ";
	}
}

BinaryTree.prototype.template= function(){
	this.put(1, 1);
	this.put(2, 2);
	this.put(3, 3);
	this.put(4, 9);
	this.put(5, 5);
	this.put(6, 6);
	this.put(7, 4);
	this.put(8, 41);
	this.put(9, 51);
	this.put(30, 35);
	this.put(67, 33);
	this.put(91, 47);
	this.put(100, 30);
	console.log(this.repository);
	
	console.log(this.travel(this.FRONT_TRAVEL));
	console.log(this.travel(this.MIDDLE_TRAVEL));
	console.log(this.travel(this.BACK_TRAVEL));
	
	console.log(this.repository);
}