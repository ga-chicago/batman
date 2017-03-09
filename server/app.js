var express = require('express');
var path = require('path')
var app = express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended: true}));

require('./db/db'); 

var VillainController = require('./controllers/VillainController');
var HeroController = require('./controllers/HeroController'); 




app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


//any requests to '/villains' send to VillainController.js
app.use('/villains', VillainController); 
app.use('/heroes', HeroController); 


app.use(express.static(path.join(__dirname, 'public'))); 









server.listen(3000, function(){
	console.log("Listening on port 3000"); 
})