function DoubleLinkedList(paArray){
	this.repository = paArray || [];
	this.curIdx = 0;
}

DoubleLinkedList.prototype.add = function(poData){
	if(this.repository.indexOf(poData) !== - 1){
		console.log("value is already exist...");
		return null;
	}
	this.repository.push(poData);
}

DoubleLinkedList.prototype.remove = function(poData){
	if(this.repository.indexOf(poData) === - 1){
		console.log("value is not exist...");
		return null;
	}
	
	for(var prop = 0, len = this.repository.length; prop < len; prop++){
		if(this.repository[prop] === poData){
			if(prop === 0){
				this.repository = this.repository.slice(1);
			}else if(prop === this.repository.length - 1){
				this.repository = this.repository.slice(0, this.repository.length - 1);
			}else{
				var temp = this.repository.slice(0, prop);
				this.repository = temp.concat(this.repository.slice(prop + 1));
			}
			break;
		}
	}
}

DoubleLinkedList.prototype.pre = function(poData){
	if(this.curIdx < 0){
		console.log("index is out of boundary...");
		return null;
	}
	
	var result = this.repository[this.curIdx];
	
	this.curIdx = this.curIdx - 1;
	
	return result;
}

DoubleLinkedList.prototype.next = function(poData){
	if(this.curIdx > this.repository.length - 1){
		console.log("index is out of boundary...");
		return null;
	}
	
	var result = this.repository[this.curIdx];
	
	this.curIdx = this.curIdx + 1;
	
	return result;
}

DoubleLinkedList.prototype.toString = function(){
	return "DoubleLinkedList";
}

DoubleLinkedList.prototype.template= function(){
	console.log("put 5");
	this.add(5);
	this.add(7);
	this.add(9);
	this.add(4);
	console.log("repository : " + this.repository.toString());
	console.log("put 5");
	this.add(5);
	this.add(1);
	this.remove(2);
	this.add(2);
	this.remove(2);
	this.add(3);
	console.log("repository : " + this.repository.toString());
	
	console.log(this.next());
	console.log(this.next());
	console.log(this.next());
	console.log(this.next());
	console.log(this.next());
	console.log(this.next());
	console.log(this.next());
	console.log(this.next());
	console.log(this.next());
	console.log(this.next());
	console.log(this.next());
	console.log(this.next());
	console.log(this.next());
	console.log(this.next());
	console.log(this.next());
	console.log(this.next());
	console.log(this.next());
	console.log(this.next());
	console.log(this.next());
	
	this.remove(5);
	this.remove(1);
	this.remove(1);
	console.log("repository : " + this.repository.toString());
	console.log("turn");
	console.log(this.pre());
	console.log(this.pre());
	console.log(this.pre());
	console.log(this.pre());
	console.log(this.pre());
	console.log(this.pre());
	console.log(this.pre());
	console.log(this.pre());
	console.log(this.pre());
	console.log(this.pre());
	console.log(this.pre());
	console.log(this.pre());
	console.log(this.pre());
	console.log(this.pre());
	console.log(this.pre());
	console.log(this.pre());
	console.log(this.pre());
	console.log(this.pre());
}