var express = require('express');
var router = express.Router();
var Hero = require('../models/Hero');

router.get('/', function(req, res) {
	Hero.find(function(err, heroes) {
	res.render('home', {array: heroes, villains: false});
	})
});

router.post('/', function(req, res) {
	var hero = new Hero({name: req.body.name,
						 movie: req.body.movie,
						 power: req.body.power,
						 height: req.body.height});

	hero.save();
	res.redirect('/heroes');
});

router.patch('/:id', function(req, res) {
	var id = req.params.id;
	var newInfo = req.body;

	Hero.findById(id, function(err, hero) {
		hero.name 	= newInfo.name;
		hero.movie 	= newInfo.movie;
		hero.power 	= newInfo.power;
		hero.height = newInfo.height;

		hero.save();

		res.send('Success!');
	})
})

router.delete('/:id', function(req, res) {
	var id = req.params.id;
	console.log(id);
	Hero.findById(id, function(err, hero) {
		hero.remove();
		res.send('Success!');
	})
})

module.exports = router;