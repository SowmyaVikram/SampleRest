var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json())
var port = process.env.REST_PORT || 3001;

app.get('/', function(req, res){

    res.send("You have hit GET !")
})

app.listen(port, function () {
    console.log('App listening on port '+port+'!');
});

app.post('/', function(req, res){
    res.status(200).send("You have hit POST with "+ JSON.stringify(req.body));
})

app.put('/', function(req, res){
    res.send("This is PUT");
})

app.delete('/', function(req,res){
    res.send("This is Delete");
})

app.all(/.*$/, function(req, res) {
    res.send('You can send any request but you can expect only this !');
});

module.exports = {app:app};