var express = require('express');
var router  = express.Router();
var Heroes 	= require('../models/Heroes');

router.get('/', function(req, res){
	Heroes.find(function(err, heroes){
		// console.log(heroes);
		res.render('heroes', {heroesArray: heroes});
	});
});

router.post('/', function(req, res){
	console.log("hey")
	var heroes = new Heroes({   name:   req.body.name,
								movie:  req.body.movie,
								power:  req.body.power,
								height: req.body.height});
	heroes.save();
	res.redirect('/heroes')
});
	
router.patch('/:id', function(req, res){
	var id = req.params.id;
	var newInfo = req.body;

	Heroes.findById(id, function(err, heroes){
		heroes.name   = newInfo.name;
		heroes.movie  = newInfo.movie;
		heroes.power  = newInfo.power;
		heroes.height = newInfo.height;

		heroes.save();
		res.send("success");
	});
});

router.delete('/:id', function(req, res){
	var id = req.params.id;
	console.log("deleted " + id);
	Heroes.findById(id, function(err, heroes){
		heroes.remove();
		res.send("success");
	})
})
		
module.exports = router;