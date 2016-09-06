var util = require('./DataValidator');
var cache = require('./Cache');

function getData() {}
module.exports = exports = new getData();

getData.prototype.getObjects = function(callback){
    util.getSupportedObjects(function(objects){
        callback(objects);
        return;
    });

}

getData.prototype.getAll = function(path, verb, callback) {
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
        }else{
            callback(found);
            return;
        }
    })
}

getData.prototype.getById = function(path, verb, id, callback) {

    util.checkForObjectExistenceAndSupportedOperation(path, verb, function(found){
        if(found){
            cache.get(path, id, function(all){
                if(!all){
                    callback(false);
                    return;
                } else
                {
                    callback(all);
                    return;
                }
            })
        } else{
            callback(found);
            return;
        }
    })
}