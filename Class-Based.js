

function createClass(className, superClassList) {
	this.cName=className;
	var listOfSuperClasses = [];
	
	if(superClassList == null || superClassList instanceof Array || superClassList[0] == null || superClassList[0] == undefined) {
		 if(superClassList == null) {
			   listOfSuperClasses = null;
			} else if(superClassList[0] == undefined) {
				 listOfSuperClasses = undefined;
			} else if (superClassList != null || superClassList != undefined) {
				 for(var index = 0; index < superClassList.length; index++) {
					 var value = superClassList[index];
					 listOfSuperClasses.push(value);
					}
			}
	};

	var createdClass = {
	o1: console.log("KLASS "+cName+ " List "+listOfSuperClasses), //ENDAST TESTNING
		new: function() {
			var instanceOfClass = this;   //console.log("Testar call();" + funcName + " "+parameters);
			//var listS = this.listOfSuperClasses;
			var instanceObj = {
			call: function(funcName, parameters) {
				if(instanceOfClass.hasOwnProperty(funcName)) { 
					return instanceOfClass[funcName].apply(instanceOfClass, parameters);
				}else{
				for(var index = 0; index < listOfSuperClasses.length; index++) {
					var current = listOfSuperClasses[index];
					console.log("Current " + current.cName);
					if(current.hasOwnProperty(funcName)) {
						return current[funcName].apply(current, parameters);
					}
				}
			}
   		} 
	}
	console.log("TESTAR: " + instanceOfClass.cName + ","+ instanceOfClass.listOfSuperClasses);
	return instanceObj;
	}
  	}
	return createdClass;
};



var class0 = createClass("Class0", null);
class0.func0 = function(arg) { return "func0: " + arg; };
var class1 = createClass("Class1", [class0]);
var class2 = createClass("Class2", []);
class2.func2 = function(arg) { return "func2: " + arg; };
var class3 = createClass("Class3", [class1, class2]);
var obj3 = class3.new();
var result = obj3.call("func2", ["hello"]);


console.log(result);

