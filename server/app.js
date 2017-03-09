var express = require('express');
var app 	= express();
var server  = require('http').createServer(app);
var bodyParser = require('body-parser');
var path	= require('path');
var mongoose = require('mongoose');

require('./db/db.js');

var VillainController = require('./controllers/VillainController');
var HeroesController  = require('./controllers/HeroController');

app.use(bodyParser.urlencoded({extended: true}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname,'public')));


app.use('/villains', VillainController);
//tells it to look for the resquests for villains is handled in the villain controller
app.use('/heroes', HeroesController);


server.listen(3000, function(){
	console.log("yo it's andre port 3000");
})