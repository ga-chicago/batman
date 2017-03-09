var express = require('express');
var router = express.Router();
var Hero = require('../models/Hero');

router.get('/', function(request, response){
	Hero.find(function(error, heros){
		console.log(heros);
		//searches the database
	response.render('home', {herosArray: heros});
});
	}); 

router.post('/heros', function(request, response){
	var hero = new Hero({name: request.body.name, movie: request.body.movie, power: request.body.power, height: request.body.height});
	// console.log(request.body.name);
	// console.log(request.body.movie);
	// console.log(request.body.power);
	// console.log(request.body.height);
	hero.save();
	response.redirect("/heros");

});

//from 3/8//
	router.patch('/:id', function(request, response){
	var id = request.params.id;
	var newInfo = request.body;

	Hero.findById(id, function(err, hero){
		hero.name = newInfo.name;
		hero.movie = newInfo.movie;
		hero.power = newInfo.power;
		hero.height = newInfo.height;
		
		hero.save();
		response.send('success');
	})
});

router.delete('/:id', function(request, response){
	var id = request.params.id;
	console.log(id);
	Hero.findById(id, function(err, hero){
		hero.remove();
			response.send("success");
	})

});

module.exports = router;