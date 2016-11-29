
var myObject = {
	
	listOfPrototypes: [],
	
	get: function(){
		return listOfPrototypes;
	},
	
	create: function(prototypeList) {
		if(prototypeList === null) {
			console.log("Nullobjekt");
			listOfPrototypes = undefined;
			newObj = Object.create(myObject);
		} else if (prototypeList[0] === null || prototypeList[0] === undefined){
			listOfPrototypes = prototypeList;
			console.log("Tom lista-objekt");
			newObj = prototypeList;//Object.create(myObject);
		} else {
			listOfPrototypes = prototypeList;
			console.log("Nytt/nya objekt");
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



//Kan behöva ta med ex. newOb.__proto__ = oldProto;
