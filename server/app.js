var express = require('express');
var app =  express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');
var path = require('path');
var hbs = require('hbs');
var mongoose = require('mongoose');

require('./db/db');	
										
var Villian = require('./models/Villian'); 	
VillianController = require('./controllers/VillianController');	

var Hero = require('./models/Hero');
HeroController = require('./controllers/HeroController');			

app.use(bodyParser.urlencoded({extended: true})); //needs to be above controller

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


// var villains = [{name: "Penguin", 		//for testing
// 				 movie: "Batman Returns",
// 				 power: "Criminal",
// 				 height: 53 },
// 				 {name: "Joker",
// 				 movie: "Dark Knight",
// 				 power: "Tricks",
// 				 height: 60	}]

app.use(express.static(path.join(__dirname, 'public')));

app.use('/villians', VillianController); 	//telling app to use controller for any req. for /villians
											//would do for each model

app.use('/heroes', HeroController);

server.listen(3000, function(){
	console.log('port 3000 listening');
})






