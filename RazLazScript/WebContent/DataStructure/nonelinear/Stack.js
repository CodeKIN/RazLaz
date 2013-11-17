function Stack(paArray){
	this.repository = paArray || [];
}

Stack.prototype.push = function(poData){
	this.repository.push(poData);
}

Stack.prototype.pop = function(){
	if(this.repository.length === 0){
		console.log("repository is empty...");
		return null;
	}
	
  var result = this.repository[this.repository.length-1];
  this.repository = this.repository.slice(0, this.repository.length-1);
  return result;
}

Stack.prototype.toString = function(){
	return "Stack";
}

Stack.prototype.template= function(){
	console.log("push 7");
	this.push(7);
	console.log("push 5");
	this.push(5);
	
	
	console.log("repository : " + this.repository.toString());
	
	console.log("pop");
	console.log(this.pop());
	console.log("repository : " + this.repository.toString());
	console.log("push 3");
	this.push(3);
	console.log("push 5");
	this.push(5);
	console.log("repository : " + this.repository.toString());
	console.log("pop");
	console.log(this.pop());
	console.log("repository : " + this.repository.toString());
	console.log("push 1");
	this.push(1);
	
	
	
	console.log("push 3");
	this.push(3);
	console.log("push 4");
	this.push(4);
	console.log("repository : " + this.repository.toString());
	console.log("pop");
	console.log(this.pop());
	console.log("repository : " + this.repository.toString());
	console.log("pop");
	console.log(this.pop());
	console.log("repository : " + this.repository.toString());
	console.log("pop");
	console.log(this.pop());
	console.log("repository : " + this.repository.toString());
	console.log("pop");
	console.log(this.pop());
	console.log("repository : " + this.repository.toString());
	console.log("pop");
	console.log(this.pop());
	console.log("repository : " + this.repository.toString());
	console.log("pop");
	console.log(this.pop());
	console.log("repository : " + this.repository.toString());
}