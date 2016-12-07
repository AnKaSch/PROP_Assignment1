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
				var indexValue = superClassList[index];
				listOfSuperClasses.push(indexValue);
			}
		}
	};
	var createdClass = {
		cName,
		listOfSuperClasses,
		new: function() {
			var instanceOfClass = this;
			instanceOfClass.call = function(funcName, parameters) {
			if(this.hasOwnProperty(funcName)) { 		
				return this[funcName].apply(this, parameters);
			} else if (this.listOfSuperClasses != null || this.listOfSuperClasses == 'undefined'){
				for(var index = 0; index < this.listOfSuperClasses.length; index++) {
					var current = this.listOfSuperClasses[index];
					return current.new().call(funcName, parameters);
				}
			}
			}; 
			return instanceOfClass;
		},
	};
	return createdClass;
};


var class0 = createClass("Class0", null);
class0.func = function(arg) { return "func0: " + arg; };
var class1 = createClass("Class1", [class0]);
var class2 = createClass("Class2", []);
class2.func = function(arg) { return "func2: " + arg; };
var class3 = createClass("Class3", [class1, class2]);
var obj3 = class3.new();
var result = obj3.call("func", ["hello"]);

console.log(result);
