/*Grupp 9: Cecilia Bergman, Anna Schuback*/


var myObject = {
	
	listOfPrototypes: [],
	
	create: function(prototypeList) {
		if(prototypeList instanceof Array || prototypeList === null || prototypeList[0] === null || prototypeList[0] === undefined) {			
			var newObj = Object.create(myObject);
			if (prototypeList != null) {
				for(var i = 0; i < prototypeList.length; i++) {
        				if (this.listOfPrototypes.indexOf(prototypeList[i]) == - 1) {
							var value = prototypeList[i];
							value.__proto__ = myObject;
							this.listOfPrototypes.push(value);
						}
					}
				}
			}
		return newObj;
	},
	
	call: function(funcName, parameters) {
	if (this.hasOwnProperty(funcName)) {
		return this[funcName].call(this,parameters);

    } else {
      for (var i = 0; i < this.listOfPrototypes.length; i++) {
        var currentPrototype = this.listOfPrototypes[i];
        if (currentPrototype.hasOwnProperty(funcName)) {
          return currentPrototype[funcName].call(currentPrototype,parameters);
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