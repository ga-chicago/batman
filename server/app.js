var express = require('express');
var app = express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

require('./db/db');
var Villain = require('./models/Villain');
var Hero = require('./models/Hero');

// var villains = ([{name: "Penguin", movie: "Batman Begins", power: "Criminal", height: 53}, {name: "Joker", movie: "Dark Knight", power: "Tricks", height: 60}]);
// var heros = ([{name: "Batman", movie: "The Dark Knight Returns", power: "Super rich", height: 60}, {name: "Spiderman", movies: "Spiderman", power: "Spidey senses", height: 57}]);

app.use(bodyParser.urlencoded({extended: true}));
var VillainController = require('./controllers/VillainController');
var HeroController = require('./controllers/HeroController');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));

//goes to respective pages//
app.use('/heros', HeroController);

app.use('/villains', VillainController); //extracts the logic and puts it in the controller
//any request for /villains goes into the villaincontroller

server.listen(3000, function(){
	console.log("listening on port 3000");
});