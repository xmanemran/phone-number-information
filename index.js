var db = require('./db.js').db;

function checkCountryCode(number, value){
	return ((number[0] === "+" || number[0] === "(") && number.indexOf(value.code) === 1) || number.indexOf(value.code) === 0 || (number[0] === "0" && number[1] === "0") && number.indexOf(value.code) === 2;
}

function PhoneInfo(number){
	return db.reduce(function(obj, value, index){
	    if(checkCountryCode(number, value)){
	    	var returnObj = Number(obj.code) > Number(value.code) ? obj : value;
	    	returnObj.operator = value.operators.filter(function(data){
	    		if(number.indexOf(data.code) === (number.indexOf(value.code) + value.code.length)){
	    			data.isValid = number.length - (number.indexOf(value.code) + value.code.length) == data.isValid;
	    			return true;	
	    		}
	    		return false;
	    	})[0];
	    	delete value.operators;
			return returnObj;	
		}
		return obj;
	}, {});
}

module.exports = PhoneInfo;
