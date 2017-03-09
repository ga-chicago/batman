// Hero Controller
var express = require('express');
var router = express.Router();
var Hero = require('../models/Hero');

router.get('/', function(req, res){
	Hero.find(function(err, heroes){
		console.log(heroes);
		res.render('herohome', {heroesArray: heroes});
	});
});

router.post('/', function(req, res){

	var hero = new Hero({name: req.body.name,
						 movie: req.body.movie,
						 power: req.body.power,
						 height: req.body.height})
	hero.save();
	res.redirect('/heroes');
})

module.exports = router;