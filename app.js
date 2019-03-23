var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes/routes.js");
var MongoClient = require('mongodb').MongoClient;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var db;

routes(app);

MongoClient.connect('mongodb://130.245.170.88:27017/', (err, client) =>{
	if(err) 
		return console.log(err);
	db = client.db('final-project');
	var server = app.listen(3000, function () {
	    console.log("app running on port.", server.address().port);
	});
});