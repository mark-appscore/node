var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/contactlist', function(req, res) {
	console.log("I received a GET request");

    person1 = {
	name: 	'Tim',
	email: 	'tim@gmail.com',
	number: '(111) 111-1111'
    };
    person2 = {
    	name: 	'Emliy',
    	email: 	'emliy@gmail.com',
    	number: '(222) 222-2222'
    };
    person3 = {
    	name: 	'John',
    	email: 	'john@gmail.com',
    	number: '(333) 333-4444'
    };

    var contactlist = [person1,person2,person3];
    res.json(contactlist);

});

app.listen(3000);
console.log("Server is running on port 3000!");