var SwaggerParser = require('swagger-parser');
var swaggerData = require("./../model/swaggerData.json");


function DataValidator() {

}
module.exports = exports = new DataValidator();

DataValidator.prototype.getSupportedObjects = function(callback){

    SwaggerParser.validate(swaggerData)
        .then(function (api) {

            var supportedListOfObjects = new Array();
            var objectsList = api["x-objects-list"];
            for (var key in objectsList) {
                supportedListOfObjects.push({"Object Name":key, "Path":"/"+key,"Methods Supported":objectsList[key].methods});
            }

            callback(supportedListOfObjects);
            return;
        })
        .catch(function (err) {
            console.log(err);
            return;
        });

}

DataValidator.prototype.checkForObjectExistenceAndSupportedOperation = function(object, verb, callback){
    SwaggerParser.validate(swaggerData)
        .then(function (api) {

            var objectList = api["x-objects-list"];
             var got = false;

            //Check if the object in the requestPath is supported by swagger
            for (var key in objectList) {
               if(key.toLowerCase() === object.toLowerCase()){

                   //Now we know object is supported, so check if the verb is supported
                   var verbList = objectList[key].methods;

                   for (var i=0; i < verbList.length; i++) {

                       if (verbList[i].toLowerCase() === verb.toLowerCase()) {
                           got = true;
                           break;
                       }
                   }
                   if (got) {
                       break;
                   }
               }
            }
            if(got === true){
                callback(true);
            }
            else {
                callback(false);
            }
        })
        .catch(function (err) {
            callback(false);
        });
}

