//handles all our http requests for the villains
var express = require('express');
//returns the router object
var router = express.Router();
var Hero = require('../models/Hero')



router.get('/', function(request, response){
	Hero.find(function (err, heros){
		response.render('hero', {heroArray: heros});
	})
	
});

router.post('/', function(request, response) {
	var heros = new Hero({name: request.body.name,
								movie: request.body.movie,
								power: request.body.power,
								height: parseInt(request.body.height)});

	heros.save();
	response.redirect('/hero');
});

router.patch('/:id', function(request, response){
	var id = request.params.id;
	var newInfo = request.body;
	Hero.findById(id, function(err, heros){
		heros.name = newInfo.name;
		heros.movie = newInfo.movie;
		heros.power = newInfo.power;
		heros.height = newInfo.height;

		heros.save();
		response.send('success');
	});

	
});

router.delete('/:id', function(request, response){
	var id = request.params.id;
	console.log(id);
	Hero.findById(id, function(err, hero){
		hero.remove();
		response.send('success');
	});
});




//export router to app.js file
module.exports = router;