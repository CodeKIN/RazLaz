//remove를 고려하지 않음

function BinarySearchTree(paArray){
	this.repository = paArray || [""];
	this.FRONT_TRAVEL = 1;
	this.MIDDLE_TRAVEL = 2;
	this.BACK_TRAVEL = 3;
	this.travelStr = "";
}

BinarySearchTree.prototype.put = function(poData){
	if(this.repository.length === 1){
		this.repository.push(poData);
		this.repository.length = this.repository.length + 1;
		return true;
	}
 
	var vnIdx = 1;
 
	while(true){
		//rootNode
		if(this.repository[vnIdx] > poData){
			vnIdx = vnIdx * 2;
			if(this.repository[vnIdx] !== undefined){
				continue;
			}else{
				this.repository[vnIdx] = poData;
				break;
			}
		}else if(this.repository[vnIdx] < poData){
			vnIdx = (vnIdx * 2) + 1;
			if(this.repository[vnIdx] !== undefined){
				continue;
			}else{
				this.repository[vnIdx] = poData;
				break;
			}
		}
	}
}

BinarySearchTree.prototype.travel = function(pnType){
	console.log("========start travle========");
	this._printTravel(pnType);
	console.log("========end travle========");
}

BinarySearchTree.prototype._printTravel = function(pnType){
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

BinarySearchTree.prototype._PRE_TRAVEL = function(pnIdx){
	if(!!this.repository[pnIdx]){
		this.travelStr += this.repository[pnIdx] + ", ";
		this._PRE_TRAVEL(pnIdx * 2);
		this._PRE_TRAVEL((pnIdx * 2) + 1);
	}
}

BinarySearchTree.prototype._MID_TRAVEL = function(pnIdx){
	if(!!this.repository[pnIdx]){
		this._PRE_TRAVEL(pnIdx * 2);
		this.travelStr += this.repository[pnIdx] + ", ";
		this._PRE_TRAVEL((pnIdx * 2) + 1);
	}
}

BinarySearchTree.prototype._BAK_TRAVEL = function(pnIdx){
	if(!!this.repository[pnIdx]){
		this._PRE_TRAVEL(pnIdx * 2);
		this._PRE_TRAVEL((pnIdx * 2) + 1);
		this.travelStr += this.repository[pnIdx] + ", ";
	}
}

BinarySearchTree.prototype.template= function(){
	this.put(51);
	this.put(1);
	this.put(3);
	this.put(2);
	this.put(9);
	this.put(5);
	this.put(6);
	this.put(4);
	this.put(41);
	this.put(35);
	this.put(33);
	this.put(47);
	this.put(30);
	console.log(this.repository);
	
	console.log(this.travel(this.FRONT_TRAVEL));
	console.log(this.travel(this.MIDDLE_TRAVEL));
	console.log(this.travel(this.BACK_TRAVEL));
	
	console.log(this.repository);
}