var util = require('./DataValidator');

function deleteData() {}
module.exports = exports = new deleteData();

deleteData.prototype.deleteAll = function(path, verb, callback) {

    util.checkForObjectExistenceAndSupportedOperation(path, verb, function(response){
        callback(response);
    })

}

deleteData.prototype.deleteById = function(path, verb, id, callback) {

    util.checkForObjectExistenceAndSupportedOperation(path, verb, function(response){
        callback(response);
    })

}