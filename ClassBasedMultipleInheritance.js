/*Grupp 9: Cecilia Bergman, Anna Schuback*/

function createClass(className, superClassList) {
	this.className=className;
	this.superClassList=superClassList;
}

function new() {
	
}

function call(funcName, parameters) {
	
}

var classZero = createClass("Class0 ", null);
classZero.func = {return "func0 "+ args;};
var classOne = createClass("Class1", [classZero]);
var classTwo = createClass("Class2",[]);
classTwo.func = {return "func2 " + args;};
var classThree = createClass("Class3", [classOne, classTwo]);
var obj3 = classThree.new();
var result = obj3.call("func", ["Hello"]);
