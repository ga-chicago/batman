var express = require('express');
var router = express.Router();
var Hero = require('../models/Hero.js');


router.get('/', function(request, response){
	Hero.find(function(err, heroes){
		response.render('heroes', {heroesArray: heroes});
	})
});

router.post('/', function(request, response){
	console.log(request.body);
	var hero = new Hero({
		name: request.body.name,
		movie: request.body.movie,
		power: request.body.power,
		height: request.body.height,
		cape: request.body.cape,
		heroLevel: request.body.heroLevel,
		charming: request.body.charming
	})
	hero.save(function(error){
		console.log(error);
	});
	console.log(hero)
	response.redirect('/heroes');
});

router.patch('/:id', function(request, response){
	var id = request.params.id;
	var newInfo = request.body;

	Hero.findById(id, function(err, hero){
		console.log("here")
		hero.name = newInfo.name,
		hero.movie = newInfo.movie,
		hero.power = newInfo.power,
		hero.height = newInfo.height,
		hero.cape = newInfo.cape,
		hero.heroLevel = newInfo.heroLevel,
		hero.charming = newInfo.charming

		hero.save();

		response.send('success');
	})
})

router.delete('/:id', function(request, response){
	var id = request.params.id;
	Hero.findById(id, function(err, hero){
		hero.remove();
		response.send('success');
	});
});



module.exports = router;