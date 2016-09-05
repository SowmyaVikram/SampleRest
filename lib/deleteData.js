var util = require('./DataValidator');
var cache = require('./Cache');

function deleteData() {}
module.exports = exports = new deleteData();

deleteData.prototype.deleteAll = function(path, verb, callback) {

    util.checkForObjectExistenceAndSupportedOperation(path, verb, function(found){
        if(found){
          cache.deleteAll(path, function(deleted){
              if(deleted){
                  callback(deleted);
                  return;
              }else{
                  callback(false);
                  return;
              }
          })
        } else{
            callback(false);
            return;
        }
        
    })

}

deleteData.prototype.deleteById = function(path, verb, id, callback) {

    util.checkForObjectExistenceAndSupportedOperation(path, verb, function(found){
        if(found){
            cache.delete(path, id, function(deleted){
                if(deleted){
                    callback(deleted);
                    return;
                }else{
                    callback(false);
                    return;
                }
            })
        } else{
            callback(false);
            return;
        }
    })

}