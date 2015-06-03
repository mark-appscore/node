var express = require('express');
var mongojs = require('mongojs');
var app = express();
var db = mongojs('contactlist',['contactlist']);

app.use(express.static(__dirname + "/public"));

app.get('/contactlist', function(req, res) {
	console.log("I received a GET request");

    db.contactlist.find(function (err,docs) {
        console.log(docs);
        res.json(docs);
    });

});

app.listen(3000);
console.log("Server is running on port 3000!");