var db = require('./db.js').db;
module.exports = {
    getCountryInfo : function(number){
        return db.reduce((obj, value, index)=>{
          if(number.indexOf(value.code) === 0 || number.indexOf(value.code) === 1)
            return Number(obj.code) > Number(value.code) ? obj : value;
          return obj;
        }, {});
    }
}