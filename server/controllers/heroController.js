// Hero Controller
var express = require('express');
var router  = express.Router();
var Hero    = require('../models/Hero');

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
						 height: req.body.height});
	hero.save();
	res.redirect('/heroes');
})

router.patch('/', function(req, res){
	var id = req.params.id;
	var heroUpdate = req.body;
	console.log(id);

	Hero.find.byId(id, function(err, hero){
		hero.name   = heroUpdate.name;
		hero.movie  = heroUpdate.movie;
		hero.power  = heroUpdate.power;
		hero.height = heroUpdate.height;
		hero.save();	
		res.send('hero updated');	
	})
})	

router.delete('/:id', function(req, res){
		var id = req.params.id;
		console.log(id);
		Hero.findById(id, function(err, hero){
			hero.remove();
			res.send('hero deleted');
		})

})

module.exports = router;


