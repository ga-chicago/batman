var express = require('express');
var router 	= express.Router();
var Villain = require('../models/Villains');

router.get('/', function(req, res){
	Villain.find(function(err, villains){
		// console.log(villains);
		res.render('villains', {villainsArray: villains});
	});
});

router.post('/', function(req, res){
	var villain = new Villain({ name:   req.body.name,
								movie:  req.body.movie,
								power:  req.body.power,
								height: req.body.height});
	villain.save();
	res.redirect('/villains');
});

router.patch('/:id', function(req, res){
	var id = req.params.id;
	var newInfo = req.body;
	
	Villain.findById(id, function(err, villain){
		villain.name   = newInfo.name;
		villain.movie  = newInfo.movie;
		villain.power  = newInfo.power;
		villain.height = newInfo.height;
		
		villain.save();// Villain.create({})
		res.send("success");
	});
});

//.../:id /:whatever is called a wildcard..
router.delete('/:id', function(req, res){
	var id = req.params.id;
	console.log("deleted " + id);
	Villain.findById(id, function(err, villain){//this grabs the specific thing we are looking for
		villain.remove();//this removes it
		res.send("success");
	});
});

module.exports = router;