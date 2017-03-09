var express = require('express');
var router = express.Router(); 
var Hero =  require('../models/Hero'); 

// Get
router.get('/', function(req, res){
	Hero.find(function(err, heroes){
		console.log(heroes);
		res.render('heroes', {heroesArray: heroes}); 
	}); 
}); 


// Post 
router.post('/', function(req, res){
	console.log(req.body.name); 
	console.log(req.body.movie); 
	console.log(req.body.power); 

	var hero = new Hero ({name: req.body.name,
								movie: req.body.movie,
								power: req.body.power,
								height: req.body.height}); 
	hero.save(); 
	res.redirect('/heroes'); 
	
}); 

// Patch
router.patch('/:id', function(req, res){
	var id = req.params.id;
	var newInfo = req.body;

	Hero.findById(id, function(err, hero){
		hero.name 	= newInfo.name; 
		hero.movie 	= newInfo.movie;
		hero.power	= newInfo.power;
		hero.height	= newInfo.height; 
		// console.log(hero);
		hero.save(); 

		res.send("Success"); 
	});
}); 

// Delete
router.delete('/:id', function(req, res){
	var id = req.params.id; 
	Hero.findById(id, function(err, hero){
		hero.remove(); 

		res.send("Success"); 
	}); 
})


// Export
module.exports = router; 
