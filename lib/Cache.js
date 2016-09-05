
var _cache = {};
function Cache() {
_cache = {};
}
module.exports = exports = new Cache();

Cache.prototype.set = function (object, value, callback) {

  if(_cache === undefined || _cache[object] === undefined){
      _cache[object] = new Array();
      _cache[object].push(value);
      callback(true);
      return;
  } else if (_cache[object] !== null) {
      _cache[object].push(value);
      callback(true);
      return;
  }
}

Cache.prototype.get = function (object, id, callback) {

    if (_cache === null || _cache === undefined){
        console.log("Cache is empty!");
        callback(false);
        return;
    } else if (_cache[object] === null || _cache[object] === undefined){
        console.log("Object "+object+" Cache is empty!");
        callback(false);
        return;
    } else {

        var data = _cache[object];
        var got = false;
        var itemToReturn;
        for (var i=0; i<data.length; i++){
            if(data[i]["id"] === id){
                got = true;
                itemToReturn = data[i];
            }
        }

        if(got === true && itemToReturn !== undefined){
            callback(itemToReturn);
            return;
        } else {
            console.log("Could not find the item");
            callback(false);
            return;
        }

    }
}

Cache.prototype.getAll = function(object, callback){
    if (_cache === null || _cache === undefined){
        console.log("Cache is empty!");
        callback(false);
        return;
    } else if (_cache[object] === null || _cache[object] === undefined){
        console.log("Object "+object+" Cache is empty!");
        callback(false);
        return;
    } else {
        console.log("returning "+JSON.stringify(_cache[object]));
        callback(_cache[object]);
        return;
    }
}

Cache.prototype.delete = function (object, id, callback) {
    if (_cache === null || _cache === undefined){
        console.log("Cache is empty!");
        callback(false);
        return;
    } else if (_cache[object] === null || _cache[object] === undefined){
        console.log("Object "+object+" Cache is empty!");
        callback(false);
        return;
    } else {

        var data = _cache[object];
        var isDeleted = false;
        var _newCache = {};
        _newCache[object] = new Array();
        for (var i=0; i<data.length; i++){
            if(data[i]["id"] === id){
                console.log("Object "+object+" data :"+JSON.stringify(data[i])+" is being deleted")
                isDeleted = true;
            } else{
                _newCache[object].push(data[i]);
            }
        }
        if(isDeleted){
            
            _cache[object] = _newCache[object];
            
            callback(true);
            return;
        } else{
            callback(false);
            return;
        }
    }

}

Cache.prototype.deleteAll = function (object, callback) {
    if (_cache === null || _cache === undefined){
        console.log("Cache is empty!");
        callback(false);
        return;
    } else if (_cache[object] === null || _cache[object] === undefined){
        console.log("Object "+object+" Cache is empty!");
        callback(false);
        return;
    } else {
        
        _cache[object] = new Array();
        
        callback(true);
        return;
    }
}

Cache.prototype.update = function (object, id, value, callback) {
    if (_cache === null || _cache === undefined){
        console.log("Cache is empty!");
        callback(false);
        return;
    } else if (_cache[object] === null || _cache[object] === undefined){
        console.log("Object "+object+" Cache is empty!");
        callback(false);
        return;
    } else {

        var data = _cache[object];
        var isUpdated = false;
        var _newCache = {};
        _newCache[object] = new Array();
        for (var i=0; i<data.length; i++){
            if(data[i]["id"] === id){
                console.log("Object "+object+" data :"+JSON.stringify(data[i])+" is being updated with new value"+value);
                isUpdated = true;
                _newCache[object].push(value);
            } else{
                _newCache[object].push(data[i]);
            }
        }
        if(isUpdated){

            _cache[object] = _newCache[object];

            callback(true);
            return;
        } else{
            callback(false);
            return;
        }
    }

}
