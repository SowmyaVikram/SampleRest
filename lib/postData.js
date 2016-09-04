
var util = require('./DataValidator');
var Cache = require('./Cache');

function postData() {}
module.exports = exports = new postData();

postData.prototype.saveData = function(path, verb, data, callback) {

    util.checkForObjectExistenceAndSupportedOperation(path, verb, function(response){

        if(response === true){
          Cache.set(path, data , function(set){
              if(set){
                  callback(true);
                  return;
              }
          })
        } else{
            callback(false);
            return;
        }
    })
    
}

