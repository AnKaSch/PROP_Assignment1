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
					 var value = superClassList[index];
					 listOfSuperClasses.push(value);
					}
			}
	};

	var createdClass = {
	  cName,
		listOfSuperClasses,
		o1: console.log("KLASS "+cName+ " List "+listOfSuperClasses), //ENDAST TESTNING
		
		new: function() {
			instanceOfClass = this;                 //console.log("Testar call();" + funcName + " "+parameters);
			instanceOfClass.call = function(funcName, parameters) {console.log("Är här");if(this.hasOwnProperty(funcName)) { 
				console.log("Ja");
				return this[funcName].apply(this, parameters);
			} else {
				console.log("Nej");
				for(var index = 0; index < this.listOfSuperClasses.length; index++) {
					var current = this.listOfSuperClasses[index];
					console.log("Current " + current.cName);
					if(current.hasOwnProperty(funcName)) {
						console.log("Ja " + current.cName);
						return instanceOfClass.call(current, parameters);
					}
				}
			}
   }; 
			console.log("TESTAR: " + instanceOfClass.cName + ","+ instanceOfClass.listOfSuperClasses);
			      return instanceOfClass;
	  },
		
		getList: function() {
			return listOfSuperClasses;
		}

  };

		  //console.log("Ny lista " + listOfSuperClasses);  /*Endast för att testa att skriva ut den nya listan*/
		    return createdClass;
};

var classZero = createClass("Class0 ", null);
console.log("Nytt objekt 0 " + classZero.getList()); //ENDAST TESTNING

classZero.func = function(arg) {return "func0: "+ arg;};
var classOne = createClass("Class1", [classZero]);

var classTwo = createClass("Class2",[]);
console.log("Nytt objekt 2 " + classTwo.cName); //ENDAST TESTNING

classTwo.func = function(arg) {return "func2: " + arg;};
var classThree = createClass("Class3", [classOne, classTwo]);
console.log("Nytt objekt 3 " + classThree.listOfSuperClasses); //ENDAST TESTNING

var objThree = classThree.new();
var result = objThree.call("func", ["Hello"]);

console.log("Om objThree; " +objThree.cName + " "+objThree.getList());//ENDAST TESTNING
