var util = require('./DataValidator');
var cache = require('./Cache');

function updateData() {}
module.exports = exports = new updateData();

updateData.prototype.updateByID = function(path, verb, value, id, callback) {

    util.checkForObjectExistenceAndSupportedOperation(path, verb, function(found){
        if(found) {

            cache.update(path, id, value, function(updated){

                if(updated){
                    callback(true);
                    return;
                } else {
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