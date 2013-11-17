//메모리 낭비를 막기 위해 clear를 포함

function Tree(paArray){
	this.repository = paArray || [];
	this.FRONT_TRAVEL = 1;
	this.MIDDLE_TRAVEL = 2;
	this.BACK_TRAVEL = 3;
	this.travelStr = "";
}

Tree.prototype.put = function(pnIndex, poData){
	while(this.repository.length - 1 < pnIndex){
		this.repository.push("");
	}
	
	if(this.repository[pnIndex] !== ""){
		console.log("index is not empty...");
		return null;
	}
	
	this.repository[pnIndex] = poData;
}

Tree.prototype.travel = function(pnType){
	console.log("========start travle========");
	this._printTravel(pnType);
	console.log("========end travle========");
}

Tree.prototype._printTravel = function(pnType){
	var clearTarget = -1;
	for(var i = this.repository.length - 1, len = -1; i > len; i--){
		if(this.repository[i] === ""){
			continue;
		}else{
			clearTarget = i;
			break;
		}
	}

	if(clearTarget !== -1){
		this._clearTree(clearTarget);
	}
	
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

Tree.prototype._PRE_TRAVEL = function(pnIdx){
	if(!!this.repository[pnIdx]){
		this.travelStr += this.repository[pnIdx] + ", ";
		this._PRE_TRAVEL(pnIdx * 2);
		this._PRE_TRAVEL((pnIdx * 2) + 1);
	}
}

Tree.prototype._MID_TRAVEL = function(pnIdx){
	if(!!this.repository[pnIdx]){
		this._PRE_TRAVEL(pnIdx * 2);
		this.travelStr += this.repository[pnIdx] + ", ";
		this._PRE_TRAVEL((pnIdx * 2) + 1);
	}
}

Tree.prototype._BAK_TRAVEL = function(pnIdx){
	if(!!this.repository[pnIdx]){
		this._PRE_TRAVEL(pnIdx * 2);
		this._PRE_TRAVEL((pnIdx * 2) + 1);
		this.travelStr += this.repository[pnIdx] + ", ";
	}
}

Tree.prototype.remove = function(pnIndex){
	if(this.repository.length - 1 < pnIndex){
		console.log("index is out of boundary...");
		return null;
	}
	
	if(this.repository[pnIndex] !== ""){
		this.repository[pnIndex] = "";
	}
	this._clearTree(pnIndex);
}

Tree.prototype._clearTree = function(pnIndex){
	var tmp = this.repository.slice(pnIndex + 1);
	var isEmpty = true;
	for(var prop in tmp){
		if(tmp[prop] !== ""){
			isEmpty = false;
		}
	}
	
	if(isEmpty){
		this.repository = this.repository.slice(0, pnIndex + 1);
	}
}

Tree.prototype.template= function(){
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
	this.remove(30);
	console.log(this.repository);
	this.remove(67);
	this.remove(91);
	console.log(this.repository);
	this.remove(100);
	console.log(this.repository);
	this.remove(30);
	console.log(this.repository);
	
	console.log(this.travel(this.FRONT_TRAVEL));
	console.log(this.travel(this.MIDDLE_TRAVEL));
	console.log(this.travel(this.BACK_TRAVEL));
	
	console.log(this.repository);
}