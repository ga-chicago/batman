var express = require('express');
var router = express.Router(); 
var Villain =  require('../models/Villain'); 

// Get
router.get('/', function(req, res){
	Villain.find(function(err, villains){
		console.log(villains);
		res.render('villains', {villainsArray: villains}); 
	}); 
}); 


// Post 
router.post('/', function(req, res){
	console.log(req.body.name); 
	console.log(req.body.movie); 
	console.log(req.body.power); 

	var villain = new Villain ({name: req.body.name,
								movie: req.body.movie,
								power: req.body.power,
								height: req.body.height}); 
	villain.save(); 
	res.redirect('/villains'); 
	
}); 

// Patch
router.patch('/:id', function(req, res){
	var id = req.params.id;
	var newInfo = req.body;

	Villain.findById(id, function(err, villain){
		console.log(villain)
		villain.name 	= newInfo.name; 
		villain.movie 	= newInfo.movie;
		villain.power	= newInfo.power;
		villain.height	= newInfo.height; 
		console.log(villain);
		villain.save(); 

		res.send("Success"); 
	})
})

// Delete
router.delete('/:id', function(req, res){
	var id = req.params.id; 
	console.log(id);
	Villain.findById(id, function(err, villain){
		villain.remove(); 

		res.send("Success"); 
	}); 
})


// Export
module.exports = router; 
