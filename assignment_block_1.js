
var myObject = {
	
	listOfPrototypes: [],
	
	get: function(){
		return listOfPrototypes;
	},
	
	create: function(prototypeList) {
		var newObj;
		if(prototypeList === null) {
			listOfPrototypes = undefined;
			newObj = Object.create(myObject);
		} else if (prototypeList[0] === null || prototypeList[0] === undefined){
			console.log("Tom lista!");
			listOfPrototypes = prototypeList;
			newObj = Object.create(myObject);
		} else {
			listOfPrototypes = prototypeList;
			newObj = prototypeList;
		}
		console.log("Nytt? "+newObj);
		return newObj;
	},
	
	call: function(funcName, parameters) {return funcName + " " + parameters;}
};

var objZero = myObject.create(null);
objZero.func = function(arg) { return "Function1 " + arg};
var objOne = myObject.create([objZero]);
var objTwo = myObject.create([]);
objTwo.func = function(arg) {return "Function2 " + arg};
var objThree = myObject.create([objOne, objTwo]);
var result = objThree.call("Function ", + ["Test"]);
console.log(result);




/*  */


//Kan behöva ta med ex. newOb.__proto__ = oldProto;