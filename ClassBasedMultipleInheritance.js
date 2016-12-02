/*Grupp 9: Cecilia Bergman, Anna Schuback*/


function createClass(className, superClassList) {
	this.cName=className;
	listOfSuperClasses = [];
	
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
			//tempValue = "";
			instanceOfClass = this;
			console.log("Nuvarande klass: "+instanceOfClass.cName);
			instanceOfClass.call = function(funcName, parameters) {console.log("Är här " + funcName);
			//tempValue = funcName;
			if(this.hasOwnProperty(funcName)) { 
				console.log("Ja");
				return this[funcName].apply(this, parameters);
			} else {
				for(var index = 0; index < this.listOfSuperClasses.length; index++) {
					var current = this.listOfSuperClasses[index];
					console.log("Current " + current.cName);
					if(current.hasOwnProperty(funcName)) {
						console.log("Ja " + current.cName + " "+ current[funcName]);
						return current.new().call(funcName, parameters);
					}
				}
			}
		}; 
			      return instanceOfClass;
	  },
		
  };

		    return createdClass;
};

var classZero = createClass("Class0 ", null);
console.log("Nytt objekt 0 " + classZero.listOfSuperClasses); //ENDAST TESTNING

classZero.func = function(arg) {return "func0: "+ arg;};
var classOne = createClass("Class1", [classZero]);
//classOne.func = function(arg) {return "func1: " + arg;};

var classTwo = createClass("Class2",[]);
console.log("Nytt objekt 2 " + classTwo.cName); //ENDAST TESTNING

classTwo.func = function(arg) {return "func2: " + arg;};
var classThree = createClass("Class3", [classOne, classTwo]);
console.log("Nytt objekt 3 " + classThree.listOfSuperClasses); //ENDAST TESTNING

var objThree = classThree.new();
//classThree.func = function(arg) {return "func3: " + arg;}; //test
var result = objThree.call("func", ["Hello"]);
console.log(result);