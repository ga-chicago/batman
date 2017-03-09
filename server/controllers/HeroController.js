var express = require('express');
var router = express.Router();
var Hero = require('../models/Hero');

router.get('/', function(request, response){
	Hero.find(function(err, heroes){
		response.render('hhome', {heroesArray: heroes});
	});
});

router.post('/', function(request, response){
	var hero = new Hero({
		name: request.body.name,
		movie: request.body.movie,
		power: request.body.power,
		height: request.body.height
	});
	hero.save();
	response.redirect('/heroes');
});

router.patch('/:id', function (req, res) {
	var id = req.params.id;
	var newInfo = req.body;
	Hero.findById(id, function (err, hero) {
		hero.name = newInfo.name;
		hero.movie = newInfo.movie;
		hero.power = newInfo.power;
		hero.height = newInfo.height;
		hero.save();
		res.send("patched");
	});
});

router.delete('/:id', function (req, res) {
	var id = req.params.id;
	Hero.findById(id, function (err, hero) {
		hero.remove();
		res.send("deleted");
	});
});

module.exports = router;