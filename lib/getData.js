var util = require('./DataValidator');
var cache = require('./Cache');

function getData() {}
module.exports = exports = new getData();

getData.prototype.getAll = function(path, verb, callback) {
console.log("getAll")
    util.checkForObjectExistenceAndSupportedOperation(path, verb, function(found){
        if(found){
            cache.getAll(path, function(all){
                if(!all){
                    callback(false);
                    return;
                } else
                {
                    callback(all);
                    return;
                }
            })
        }
    })
}

getData.prototype.getById = function(path, verb, id, callback) {

    util.checkForObjectExistenceAndSupportedOperation(path, verb, function(response){
        callback(response);
    })
}