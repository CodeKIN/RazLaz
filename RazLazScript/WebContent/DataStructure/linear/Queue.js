function Queue(paArray){
	this.repository = paArray || [];
}

Queue.prototype.put = function(poData){
	this.repository.push(poData);
}

Queue.prototype.get = function(){
	if(this.repository.length === 0){
		console.log("repository is empty...");
		return null;
	}
	
  var result = this.repository[0];
  
  this.repository = this.repository.slice(1);
  return result;
}

Queue.prototype.toString = function(){
	return "Queue";
}

Queue.prototype.template= function(){
	console.log("put 7");
	this.put(7);
	console.log("put 5");
	this.put(5);
	console.log("put 3");
	this.put(3);
	console.log("repository : " + this.repository.toString());
	console.log("get");
	console.log(this.get());
	console.log("repository : " + this.repository.toString());
	console.log("put 5");
	this.put(5);
	console.log("put 1");
	this.put(1);
	console.log("repository : " + this.repository.toString());
	console.log("get");
	console.log(this.get());
	console.log("repository : " + this.repository.toString());
	console.log("put 3");
	this.put(3);
	console.log("put 4");
	this.put(4);
	console.log("repository : " + this.repository.toString());
	console.log("get");
	console.log(this.get())
	console.log("repository : " + this.repository.toString());
	console.log("get");
	console.log(this.get());
	console.log("repository : " + this.repository.toString());
	console.log("get");
	console.log(this.get());
	console.log("repository : " + this.repository.toString());
	console.log("get");
	console.log(this.get());
	console.log("repository : " + this.repository.toString());
	console.log("get");
	console.log(this.get());
	console.log("repository : " + this.repository.toString());
	console.log("get");
	console.log(this.get());
}
