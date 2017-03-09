var express = require('express');
var router = express.Router();
var Villain = require('../models/Villain');

router.get('/', function(req, res){
	Villain.find(function(err, villains){
		res.render('home', {array: villains, villains: true});
	});
});

router.post('/', function(req, res){
	var villain = new Villain({name: request.body.name,
							   movie: request.body.movie,
							   power: request.body.power,
							   height: request.body.height});

	villain.save();
	res.redirect('/villains');
});

router.patch('/:id', function(req, res) {
	var id = req.params.id;
	var newInfo = req.body;

	Villain.findById(id, function(err, villain) {
		villain.name 	= newInfo.name;
		villain.movie 	= newInfo.movie;
		villain.power 	= newInfo.power;
		villain.height 	= newInfo.height;

		villain.save();

		res.send('Success!');
	})
})

router.delete('/:id', function(req, res) {
	var id = req.params.id;
	console.log(id);
	Villain.findById(id, function(err, villain) {
		villain.remove();
		res.send('Success!');
	})
})


module.exports = router;


