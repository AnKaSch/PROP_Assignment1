

var myObject = {
	
	create: function(prototypeList) {return prototypeList;},
	call: function(funcName, parameters) {return funcName + " " + parameters;}
}

var objOne = Object.create(myObject);
var temp = ["Hello"];
objOne.create(temp);
objOne.call("World", " LALALA");

//Kan behöva ta med ex. newOb.__proto__ = oldProto;

//var newObj = Object.create();

//create(Object obj) {
	
//}
