var express = require('express');
var app = express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var session = require('express-session');

require('./db/db');

app.use(session({
	secret: " this is our secret salt",
	resave: false,
	saveUninitialized: true,
	cookie: {secure: false}
}))

//express framework node.js syntax
var authenticateRoute = function(request, response, next){
	if(request.originalUrl === '/user/login' || request.originalUrl === '/user/registration'){
		next()
	}
		else {
			if(!request.session.loggedIn){
				response.redirect('/user/registration')
			}else{
				next()
			}
		}
	}

app.use(authenticateRoute); //set this before controller!!!! It will run first!!!

var Villain = require('./models/Villain');
var Hero = require('./models/Hero');
var User = require('./models/User');

// var villains = ([{name: "Penguin", movie: "Batman Begins", power: "Criminal", height: 53}, {name: "Joker", movie: "Dark Knight", power: "Tricks", height: 60}]);
// var heros = ([{name: "Batman", movie: "The Dark Knight Returns", power: "Super rich", height: 60}, {name: "Spiderman", movies: "Spiderman", power: "Spidey senses", height: 57}]);

app.use(bodyParser.urlencoded({extended: true}));
var VillainController = require('./controllers/VillainController');
var HeroController = require('./controllers/HeroController');
var UserController = require('./controllers/UserController');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));

//goes to respective pages//
app.use('/heroes', HeroController);

app.use('/villains', VillainController); //extracts the logic and puts it in the controller
//any request for /villains goes into the villaincontroller
app.use('/user', UserController);

server.listen(3000, function(){
	console.log("listening on port 3000");
});


//make a user model with a username and password//
//go in and make a user controller that has a route for login and register//
//the base route of /user //
//controller will have 2 get routes and 2 post routes (1 registration 1 login)//
//then you are going to make a view for the login and register//
//make a form for the login and register//