/*Grupp 9: Cecilia Bergman, Anna Schuback*/

function createClass(className, superClassList) {
	console.log("Parametrar " + className + " "+ superClassList);
	this.className=className;
	if(superClassList == null || superClassList instanceof Array || superClassList[0] == null || superClassList[0] == undefined) {
		if(superClassList != null) {
		  for(var index= 0; index < superClassList.length; index++) {
			   var ele = superClassList[index];
			   console.log(ele);
		  };
		};
	};	
};

//new = function() {
	//ska returnera ett nytt objekt av en viss klass
//};

call = function (funcName, parameters) {
	
};


var classZero = createClass("Class0 ", null);
console.log(classZero); //Endast för testning

classZero.func = function(arg) {return "func0: "+ arg;};
var classOne = createClass("Class1", [classZero]);
var classTwo = createClass("Class2",[]);
classTwo.func = function(arg) {return "func2 " + arg;};
var classThree = createClass("Class3", [classOne, classTwo]);
var obj3 = classThree.new();
var result = obj3.call("func", ["Hello"]);


/*
Exception: ReferenceError: my is not defined
@Scratchpad/3:16:1
*/
/*
Exception: ReferenceError: my is not defined
@Scratchpad/3:16:1
*/
/*
Exception: SyntaxError: expected expression, got '='
@Scratchpad/3:16
*/
/*
Exception: TypeError: classZero is undefined
@Scratchpad/3:27:1
*/