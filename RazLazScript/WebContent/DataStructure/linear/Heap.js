//remove를 고려하지 않음

function Heap(paArray){
	this.repository = paArray || [""];
	this.FRONT_TRAVEL = 1;
	this.MIDDLE_TRAVEL = 2;
	this.BACK_TRAVEL = 3;
	this.MIN_HEAP = 1;
	this.MAX_HEAP = 2;
	this.travelStr = "";
}

Heap.prototype.put = function(poData){
	this.repository.push(poData);
}

Heap.prototype.get = function(){
	if(this.repository.length === 0){
		console.log("repository is empty...");
		return null;
	}
	var result = this.repository[0];
	this.repository = this.repository.slice(1);
	return result;
}

Heap.prototype.travel = function(pnType){
	console.log("========start travle========");
	this._printTravel(pnType);
	console.log("========end travle========");
}

Heap.prototype._printTravel = function(pnType){
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

Heap.prototype._PRE_TRAVEL = function(pnIdx){
	if(!!this.repository[pnIdx]){
		this.travelStr += this.repository[pnIdx] + ", ";
		this._PRE_TRAVEL(pnIdx * 2);
		this._PRE_TRAVEL((pnIdx * 2) + 1);
	}
}

Heap.prototype._MID_TRAVEL = function(pnIdx){
	if(!!this.repository[pnIdx]){
		this._PRE_TRAVEL(pnIdx * 2);
		this.travelStr += this.repository[pnIdx] + ", ";
		this._PRE_TRAVEL((pnIdx * 2) + 1);
	}
}

Heap.prototype._BAK_TRAVEL = function(pnIdx){
	if(!!this.repository[pnIdx]){
		this._PRE_TRAVEL(pnIdx * 2);
		this._PRE_TRAVEL((pnIdx * 2) + 1);
		this.travelStr += this.repository[pnIdx] + ", ";
	}
}

Heap.prototype._minHeapSort = function(pnIdx){
	if(pnIdx <= 0){
 
	}else{
		if(parseInt(pnIdx/2) !== 0){
			//현재 최대힙 상태임
			//최소힙으로 구성하길 원한다면
			//다음 if문의 비교 연산자를 > 에서 < 으로 변경하면됨.
			//>의 의미 : 부모노드보다 자식노드의 키(값)가   클때 swap한다.
			//<의 의미 : 부모노드보다 자식노드의 키(값)가 작을때 swap한다.
			//다음 문장에서 swap 조건이 맞지 않을때까지 자기자신을 계속 재귀호출하며
			//swap조건에 맞을경우 값을 swap한다.
			//따라서 입력된 값이 제자리를 찾고나면 재귀호출을 종료하고 힙구성을 마친다.
			if(this.repository[pnIdx] < this.repository[parseInt(pnIdx/2)]){
				var vnTmp = this.repository[pnIdx];
				this.repository[pnIdx] = this.repository[parseInt(pnIdx/2)];
				this.repository[parseInt(pnIdx/2)] = vnTmp;
				this._minHeapSort(parseInt(pnIdx/2));
			}
		}
	}
}


Heap.prototype._maxHeapSort = function(pnIdx){
	if(pnIdx <= 0){
 
	}else{
		if(parseInt(pnIdx/2) !== 0){
			//현재 최대힙 상태임
			//최소힙으로 구성하길 원한다면
			//다음 if문의 비교 연산자를 > 에서 < 으로 변경하면됨.
			//>의 의미 : 부모노드보다 자식노드의 키(값)가   클때 swap한다.
			//<의 의미 : 부모노드보다 자식노드의 키(값)가 작을때 swap한다.
			//다음 문장에서 swap 조건이 맞지 않을때까지 자기자신을 계속 재귀호출하며
			//swap조건에 맞을경우 값을 swap한다.
			//따라서 입력된 값이 제자리를 찾고나면 재귀호출을 종료하고 힙구성을 마친다.
			if(this.repository[pnIdx] > this.repository[parseInt(pnIdx/2)]){
				var vnTmp = this.repository[pnIdx];
				this.repository[pnIdx] = this.repository[parseInt(pnIdx/2)];
				this.repository[parseInt(pnIdx/2)] = vnTmp;
				this._minHeapSort(parseInt(pnIdx/2));
			}
		}
	}
}

Heap.prototype.heapSort = function(pnType){
	if(pnType === this.MIN_HEAP){
		for(var i = this.repository.length  - 1, len = 0; i > len; i--){
			this._minHeapSort(i);
		}
	}else{
		for(var i = this.repository.length  - 1, len = 0; i > len; i--){
			this._maxHeapSort(i);
		}
	}
}

Heap.prototype.template= function(){
	this.put(9, 51);
	this.put(91, 47);
	this.put(30, 35);
	this.put(3, 3);
	this.put(4, 9);
	this.put(67, 33);
	this.put(1, 1);
	this.put(6, 6);
	this.put(7, 4);
	this.put(2, 2);
	this.put(5, 5);
	this.put(8, 41);
	
	console.log(this.repository);
	
	console.log(this.travel(this.FRONT_TRAVEL));
	console.log(this.travel(this.MIDDLE_TRAVEL));
	console.log(this.travel(this.BACK_TRAVEL));
	
	console.log(this.repository);
	
	this.heapSort(this.MAX_HEAP);
	
	console.log(this.travel(this.FRONT_TRAVEL));
	console.log(this.travel(this.MIDDLE_TRAVEL));
	console.log(this.travel(this.BACK_TRAVEL));
	
	console.log(this.repository);
	this.heapSort(this.MIN_HEAP);
	this.get();
	this.heapSort(this.MIN_HEAP);
	console.log(this.repository);
	this.get();
	this.heapSort(this.MIN_HEAP);
	console.log(this.repository);
	this.get();
	this.heapSort(this.MIN_HEAP);
	console.log(this.repository);
	this.get();
	this.heapSort(this.MIN_HEAP);
	console.log(this.repository);
	this.get();
	this.heapSort(this.MIN_HEAP);
	console.log(this.repository);
	this.get();
	this.heapSort(this.MIN_HEAP);
	console.log(this.repository);
	this.get();
	this.heapSort(this.MIN_HEAP);
	console.log(this.repository);
	this.get();
	this.heapSort(this.MIN_HEAP);
	console.log(this.repository);
	this.get();
	this.heapSort(this.MIN_HEAP);
	console.log(this.repository);
	this.get();
	this.heapSort(this.MIN_HEAP);
	console.log(this.repository);
	this.get();
	this.heapSort(this.MIN_HEAP);
	console.log(this.repository);
	this.get();
	this.heapSort(this.MIN_HEAP);
	console.log(this.repository);
	this.get();
	this.heapSort(this.MIN_HEAP);
	console.log(this.repository);
	this.get();
	this.heapSort(this.MIN_HEAP);
	console.log(this.repository);
	this.get();
	this.heapSort(this.MIN_HEAP);
	console.log(this.repository);
	this.get();
	this.heapSort(this.MIN_HEAP);
	console.log(this.repository);
	this.get();
	this.heapSort(this.MIN_HEAP);
	console.log(this.repository);
	this.get();
	this.heapSort(this.MIN_HEAP);
	console.log(this.repository);
	this.get();
	this.heapSort(this.MIN_HEAP);
	console.log(this.repository);
	this.get();
	this.heapSort(this.MIN_HEAP);
	console.log(this.repository);
	
	
	this.put(9, 51);
	this.put(91, 47);
	this.put(30, 35);
	this.put(3, 3);
	this.put(4, 9);
	this.put(67, 33);
	this.put(1, 1);
	this.put(6, 6);
	this.put(7, 4);
	this.put(2, 2);
	this.put(5, 5);
	this.put(8, 41);
	
	console.log(this.repository);
	this.heapSort(this.MAX_HEAP);
	this.get();
	console.log(this.repository);
	this.heapSort(this.MAX_HEAP);
	this.get();
	console.log(this.repository);
	this.heapSort(this.MAX_HEAP);
	this.get();
	console.log(this.repository);
	this.heapSort(this.MAX_HEAP);
	this.get();
	console.log(this.repository);
	this.heapSort(this.MAX_HEAP);
	this.get();
	console.log(this.repository);
	this.heapSort(this.MAX_HEAP);
	this.get();
	console.log(this.repository);
	this.heapSort(this.MAX_HEAP);
	this.get();
	console.log(this.repository);
	this.heapSort(this.MAX_HEAP);
	this.get();
	console.log(this.repository);
	this.heapSort(this.MAX_HEAP);
	this.get();
	console.log(this.repository);
	this.heapSort(this.MAX_HEAP);
	this.get();
	console.log(this.repository);
	this.heapSort(this.MAX_HEAP);
	this.get();
	console.log(this.repository);
	this.heapSort(this.MAX_HEAP);
	this.get();
	console.log(this.repository);
	this.heapSort(this.MAX_HEAP);
	this.get();
	console.log(this.repository);
	this.heapSort(this.MAX_HEAP);
	this.get();
	console.log(this.repository);
	this.heapSort(this.MAX_HEAP);
	this.get();
	console.log(this.repository);
	this.heapSort(this.MAX_HEAP);
	this.get();
	console.log(this.repository);
	this.heapSort(this.MAX_HEAP);
	this.get();
	console.log(this.repository);
	this.heapSort(this.MAX_HEAP);
	this.get();
	console.log(this.repository);
	this.heapSort(this.MAX_HEAP);
	this.get();
	console.log(this.repository);
	this.heapSort(this.MAX_HEAP);
	this.get();
	console.log(this.repository);
	this.heapSort(this.MAX_HEAP);
	this.get();
	console.log(this.repository);
	this.heapSort(this.MAX_HEAP);
	this.get();
	console.log(this.repository);
	this.heapSort(this.MAX_HEAP);
	this.get();
	console.log(this.repository);
	this.heapSort(this.MAX_HEAP);
	this.get();
	console.log(this.repository);
	this.heapSort(this.MAX_HEAP);
	this.get();
	console.log(this.repository);
	this.heapSort(this.MAX_HEAP);
	this.get();
	console.log(this.repository);
	this.heapSort(this.MAX_HEAP);
	this.get();
}