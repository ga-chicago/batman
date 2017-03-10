var express = require('express');
var router = express.Router();
var Hero = require('../models/Hero.js');

router.get('/', function(request, response){
	console.log(request.session)
	Hero.find(function(error, heroes){
		console.log(heroes);
		//searches the database
	response.render('heroes', {heroesArray: heroes});
	});
}); 

router.post('/', function(request, response){
	var hero = new Hero({name: request.body.name, movie: request.body.movie, power: request.body.power, height: request.body.height});
	hero.save();
	response.redirect("/heroes");

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
		response.redirect('/heroes');
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