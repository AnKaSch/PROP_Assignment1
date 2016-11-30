/*Grupp 9: Cecilia Bergman, Anna Schuback*/

var myObject = {
	
	id: 10,
	
	listOfPrototypes: [],
	
	create: function(prototypeList) {
		if(prototypeList instanceof Array || prototypeList === null) {
			if(prototypeList === null) {
				newObj = Object.create(myObject);
				console.log("Nullobjekt" + newObj);
			} else if (prototypeList[0] === null || prototypeList[0] === undefined){
				this.listOfPrototypes = prototypeList;
				newObj = Object.create(myObject);
				console.log("Tom lista-objekt:" + this.newObj);
			} else {
				for(var i = 0; i < prototypeList.length; i++) {
					value = prototypeList[i];
					console.log(value + " Value");
					value.__proto__ = myObject;
					this.listOfPrototypes.push(value);
					console.log(i + " index" + " " + this.listOfPrototypes);
				}
			}
				console.log("Nytt/nya objekt: " + " " + this.listOfPrototypes);
				this.newObj = prototypeList;
			//}
			console.log("Nytt? "+this.newObj);
			return newObj;
			}
	},
	
	call: function(funcName, parameters) {return funcName + " " + parameters;}
};

var objZero = myObject.create(null);
objZero.func = function(arg) { return "func0" + arg};
var objOne = myObject.create([objZero]);
var objTwo = myObject.create([]);
objTwo.func = function(arg) {return "func2" + arg};
var objThree = myObject.create([objOne, objTwo]);
var result = objThree.call("func", + ["hello"]);
console.log("Ob1 ID " + objOne.id + " Ob2 ID " + objTwo.ID + " Ob3 ID "+ objThree.id);
console.log(result);

/*
Exception: SyntaxError: missing ) after argument list
@Scratchpad/15:45
*/