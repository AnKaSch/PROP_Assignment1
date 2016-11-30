var project = "Assignment block 1";
print(project);

var myObject = {
	
	listOfPrototypes: [],
	
	create: function(prototypeList) {
		if(prototypeList instanceof Array || prototypeList === null) {
			if(prototypeList === null) {
				var newObj = Object.create(myObject);
				//console.log("Nullobjekt" + newObj);
			} else if (prototypeList[0] === null || prototypeList[0] === undefined){
				//this.listOfPrototypes = prototypeList;
				var newObj = Object.create(myObject);
				//console.log("Tom lista-objekt:" + this.newObj);
			//} else {
			} else if (prototypeList != null) {
				for(var i = 0; i < prototypeList.length; i++) {
        if (this.listOfPrototypes.indexOf(prototypeList[i]) == - 1) {
          //this.listOfPrototypes.push(prototypeList[i]);
					var value = prototypeList[i];
					//console.log(value + " Value");
					value.__proto__ = myObject;
					this.listOfPrototypes.push(value);
					//console.log(i + " index" + " " + this.listOfPrototypes);
				}
			}
				//console.log("Nytt/nya objekt: " + " " + this.listOfPrototypes);
				//this.newObj = prototypeList;
			}
		}
			//console.log("Nytt? "+this.newObj);
			return newObj;
			//}
	},
	
	call: function(funcName, parameters) {
	if (this.hasOwnProperty(funcName)) {
      //return funcName + ' ' + parameters;
			return this[funcName].apply(this,parameters);

    } else {
      for (var i = 0; i < this.listOfPrototypes.length; i++) {
        var currentPrototype = this.listOfPrototypes[i];
        if (currentPrototype.hasOwnProperty(funcName)) {
          return currentPrototype[funcName].apply(currentPrototype,parameters);
        }
      }
    }
  }
};
	
var obj0 = myObject.create(null);
obj0.func = function(arg) { return "func0: " + arg; };
var obj1 = myObject.create([obj0]);
var obj2 = myObject.create([]);
obj2.func = function(arg) { return "func2: " + arg; };
var obj3 = myObject.create([obj1, obj2]);
var result = obj3.call("func", ["hello"]);
console.log(result);


