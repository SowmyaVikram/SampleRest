var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json())
var port = process.env.REST_PORT || 3001;

var postData = require ('./lib/postData');
var getData = require('./lib/getData');
var updateData = require('./lib/updateData');
var deleteData = require('./lib/deleteData');

app.get(/.*$/, function(req, res) {
    var objectPath = (req.path).split('/');
    var itsGetBYId = false;
    var id;
    if (objectPath[1] === undefined) {
        res.status(500).send("You have hit get but with no path");
    } else if (objectPath.length > 3) {
        res.status(500).send("You have hit get but with no path");
    } else if (objectPath.length === 3) {
        itsGetBYId = true;
        id = Number(objectPath[2]);
        if (id === undefined || id === ''){
            res.status(500).send("You have hit get but with no ID to get the data");
        }
    }

    if (itsGetBYId) {
        getData.getById(objectPath[1], 'get', id, function (found) {

            if (found) {
                res.json(found);
            }
            else {
                res.status(200).send("There is no data to get");
            }
        });

    } else {
        getData.getAll(objectPath[1], 'get', function (found) {

        if (found) {
            res.json(found);
        }
        else {
            res.status(200).send("There is no data to get");
        }
    });
   }
})

app.listen(port, function () {
    console.log('App listening on port '+port+'!');
});

app.post(/.*$/, function(req, res){

    var objectPath = (req.path).split('/');
    console.log(JSON.stringify(objectPath))

    if(objectPath[1] === undefined)
    {
        res.status(500).send("You have hit POST but with no object specified");
    }

    if(req.body === undefined){
        res.status(500).send("You have hit POST with no data");
    }

    postData.saveData(objectPath[1], 'post', req.body, function(found){
        if(found){
            res.status(200).send("Your data "+ JSON.stringify(req.body)+" is saved");
        }
        else {
            res.status(200).send("Please specify a known object");
        }
    });

})

app.put(/.*$/, function(req, res){
    var objectPath = (req.path).split('/');
    if(objectPath[1] === undefined )
    {
        res.status(500).send("Do you think an unknown object can be updated? !");
    } else if (objectPath.length !== 3 && objectPath[2] === undefined && objectPath[2] === "")
    {
        res.status(500).send("ID is must. /{objectName}/{id} is the path to be used !");
    }

    var id = objectPath[2];

    updateData.updateByID(objectPath[1], 'put', id, function(found){
        if(found){
            res.status(200).send("You have hit POST with "+ JSON.stringify(req.body));
        }
        else {
            res.status(200).send("You have hit POST with but path not found");
        }
    });
})

app.delete(/.*$/, function(req,res){
    var objectPath = (req.path).split('/');
    var itsDeleteBYId = false;
    var id;
    if(objectPath[1] === undefined)
    {
        res.status(500).send("What do you want to delete?");
    } else if (objectPath.length > 3) {
        res.status(500).send("You have hit get but with no path");
    } else if (objectPath.length === 3) {
        itsDeleteBYId = true;
        id = Number(objectPath[2]);
        if (id === undefined || id === ''){
            res.status(500).send("You have hit get but with no ID to get the data");
        }
    }
    
    if(itsDeleteBYId){
        deleteData.deleteById(objectPath[1], 'delete', id, function(deleted){
            if(deleted){
                res.status(200).send("All data for "+objectPath[1]+" with ID : "+id+" successfully deleted");
            }
            else {
                res.status(404).send("Problem deleting data");
            }
        });
    }else {
        deleteData.deleteAll(objectPath[1], 'delete', function(deleted){
            if(deleted){
                res.status(200).send("All data for "+objectPath[1]+" successfully deleted");
            }
            else {
                res.status(404).send("Problem deleting data");
            }
        });
    }


})

/**app.all(/.*$/, function(req, res) {
    console.log(req.path);
 
    res.send('You can send any request but you can expect only this !');
});**/

module.exports = {app:app};