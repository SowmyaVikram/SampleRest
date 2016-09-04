var util = require('./DataValidator');

function updateData() {}
module.exports = exports = new updateData();

updateData.prototype.updateByID = function(path, verb, id, callback) {

    util.checkForObjectExistenceAndSupportedOperation(path, verb, function(response){
        callback(response);
    })

}