/*Grupp 9: Cecilia Bergman, Anna Schuback*/


function createClass(className, superClassList) {
	this.cName=className;
	//cName = className.toString();
	console.log(cName + " "+superClassList);
	
	supClassList = [];
	console.log("Parametrar " + className + " "+ superClassList); //Endast för att skriva ut parametrar, ska tas bort vid inlämning
		supClassList = [];
		if(superClassList == null || superClassList instanceof Array || superClassList[0] == null || superClassList[0] == undefined) {
			if(superClassList == null) {
				this.supClassList = null;
			} else if(superClassList[0] == undefined) {
				this.supClassList = undefined;
			} else if (superClassList != null || superClassList != undefined) {
				for(var index = 0; index < superClassList.length; index++) {
					var value = superClassList[index];
					this.supClassList.push(value);
					}
			}
	};
	
	console.log(supClassList);
	
	//Object.defineProperty(this, 'new()', {newObject: function() {return (...skapa objekt...)}});, funderar om detta är ett sätt skugga över new-operatorn och skapa en new()-metod
	var createdClass = {
	  cName,
		o: console.log("ClassName " + cName),
		superClassList: this,
		o1: console.log("List "+superClassList)

	};

		  console.log("Ny lista " + supClassList);  /*Endast för att testa att skriva ut den nya listan*/
		    return createdClass;//className + " " + supClassList;
};


//new = function() { ev ta bort då new är en operator, bör skugga över funktionen på något sätt
	//ska returnera ett nytt objekt av en viss klass
//};


call = function (funcName, parameters) {
	if(this.hasOwnProperty(funcName)) {
		return funcName + " " + parameters;
	}
	
};

var classZero = createClass("Class0 ", null);
console.log("Nytt objekt 0 " + classZero.cName); //ENDAST TESTNING

//classZero.func = function(arg) {return "func0: "+ arg;};
var classOne = createClass("Class1", [classZero]);
console.log("Nytt objekt 1 " + classOne.cName); //ENDAST TESTNING

//var classTwo = createClass("Class2",[]);
//console.log("Nytt objekt 2 " + classTwo); //ENDAST TESTNING

//classTwo.func = function(arg) {return "func2 " + arg;};
//var classThree = createClass("Class3", [classOne, classTwo]);
//console.log("Nytt objekt 3 " + classThree); //ENDAST TESTNING

//var objThree = classThree.className; //Ska egentligen vara classThree.new();
//var result = obj3.call("func", ["Hello"]);
