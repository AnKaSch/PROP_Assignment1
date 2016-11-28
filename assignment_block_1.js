var project = "Assignment block 1";
print(project);

var myObject = {
	
	prototypeList: [],
	
	create: function(prototypeList) {
		var newObj = Object.create(this);
		return newObj;
	},
	call: function(funcName, parameters) {
		return funcName + " " + parameters;
	}
}

var newOb = Object.create();	//Ska lägga till objekt som parameter

create(Object obj) {
	
}

