var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	mongoose = require('mongoose'),
	path = require('path'),
	bodyParser = require('body-parser'),
	hbs	= require('hbs');

require('./db/db.js')
var VillainController = require('./controllers/VillainController.js')
var HeroController = require('./controllers/HeroController.js')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/villains', VillainController)
app.use('/heros', HeroController)


















server.listen(3000, function(){
	console.log('Why so serious on port 3000?')
})