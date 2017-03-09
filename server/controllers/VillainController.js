var express = require('express');
var router = express.Router();
var Villain = require('../models/Villain');

router.get('/', function(request, response){
	Villain.find(function(err, villains){
		response.render('vhome', {villainsArray: villains});
	});
});

router.post('/', function(request, response){
	var villain = new Villain({
		name: request.body.name,
		movie: request.body.movie,
		power: request.body.power,
		height: request.body.height
	});
	villain.save();
	response.redirect('/villains');
});

router.patch('/:id', function (req, res) {
	var id = req.params.id;
	var newInfo = req.body;
	Villain.findById(id, function (err, villain) {
		villain.name = newInfo.name;
		villain.movie = newInfo.movie;
		villain.power = newInfo.power;
		villain.height = newInfo.height;
		villain.save();
		res.send("patched");
	});
});

router.delete('/:id', function (req, res) {
	var id = req.params.id;
	Villain.findById(id, function (err, villain) {
		villain.remove();
		res.send("deleted");
	});
});

module.exports = router;