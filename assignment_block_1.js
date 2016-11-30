/*Grupp 9: Cecilia Bergman, Anna Schuback*/

var myObject = {
	
	id: 10,
	
	listOfPrototypes: [],
	
	create: function(prototypeList) {
		if(prototypeList instanceof Array || prototypeList === null) {
			if(prototypeList === null) {
				listOfPrototypes = undefined;
				newObj = Object.create(myObject);
				console.log("Nullobjekt" + newObj);
			} else if (prototypeList[0] === null || prototypeList[0] === undefined){
				listOfPrototypes = prototypeList;
				newObj = Object.create(myObject);
				console.log("Tom lista-objekt:" + newObj);
			} else {
				console.log(prototypeList.length() + " Längd ");
				listOfPrototypes = prototypeList;
				console.log("Nytt/nya objekt: " + " " + prototypeList);
				newObj = prototypeList;
			}
			console.log("Nytt? "+newObj);
			return newObj;
			}
	},
	
	call: function(funcName, parameters) {return funcName + " " + parameters;}
};

var objZero = myObject.create(null);
console.log(objZero.id);
objZero.func = function(arg) { return "Function1 " + arg};
var objOne = myObject.create([objZero]);
var objTwo = myObject.create([]);
objTwo.func = function(arg) {return "Function2 " + arg};
var objThree = myObject.create([objOne, objTwo]);
var result = objThree.call("func", + ["Test"]);
console.log(result);




/*  */


//Kan behöva ta med ex. newOb.__proto__ = oldProto;