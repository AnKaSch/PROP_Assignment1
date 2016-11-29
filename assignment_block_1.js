var project = "Assignment block 1";
print(project);

var myObject = {
	
	listOfProtos: [],
	
	create: function(prototypeList) {
		var newObj = Object.create(myObject);
		return newObj;
	},
	call: function(funcName, parameters) {
		return funcName + " " + parameters;
	}
}

var obj0 = myObject.create(null);
obj0.func = function(arg) { return "func0: " + arg; };
var obj1 = myObject.create([obj0]);
var obj2 = myObject.create([]);
obj2.func = function(arg) { return "func2: " + arg; };
var obj3 = myObject.create([obj1, obj2]);
var result = obj3.call("func", ["hello"]);
console.log(result);
	
}

