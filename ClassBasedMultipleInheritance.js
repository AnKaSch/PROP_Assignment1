/*Grupp 9: Cecilia Bergman, Anna Schuback*/

function createClass(className, superClassList) {
	//Object.defineProperty(this, 'new()', {newObject: function() {return (...skapa objekt...)}});, funderar om detta är ett sätt skugga över new-operatorn och skapa en new()-metod
	
	var supClassList = [];
	console.log("Parametrar " + className + " "+ superClassList); //Endast för att skriva ut parametrar, ska tas bort vid inlämning
	this.className=className;
	if(superClassList == null || superClassList instanceof Array || superClassList[0] == null || superClassList[0] == undefined) {
		if(superClassList == null || superClassList[0] ==null) {
		  supClassList = null;
	} else if(superClassList[0] == undefined) {
		  this.supClassList = undefined;
	} else if (superClassList != null || superClassList != undefined) {
		  for(var index = 0; index < superClassList.length; index++) {
			  var value = superClassList[index];
			  console.log("Index " +value + " Längd på listan "+superClassList.length);
			  this.supClassList.push(value);
		  }
	}
		 console.log("Ny lista " + supClassList);  /*Endast för att testa att skriva ut den nya listan*/
		 return className; //+ this.supClassList;???
	}	
};

//new = function() { ev ta bort då new är en operator, bör skugga över funktionen på något sätt
	//ska returnera ett nytt objekt av en viss klass
//};

call = function (funcName, parameters) {
	
};


var classZero = createClass("Class0 ", null);
classZero.func = function(arg) {return "func0: "+ arg;};
var classOne = createClass("Class1", [classZero]);
var classTwo = createClass("Class2",[]);
classTwo.func = function(arg) {return "func2 " + arg;};
var classThree = createClass("Class3", [classOne, classTwo]);
//var obj3 = classThree.new();
//var result = obj3.call("func", ["Hello"]);








		//if(superClassList != null) {
		  //for(var index= 0; index < superClassList.length; index++) {
			   //var value = superClassList[index];
			   //console.log(value);
			   //this.supClassList.push(value);
		 // }
		//}
