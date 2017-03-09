//handles all our http requests for the villains
var express = require('express');
//returns the router object
var router = express.Router();
var Villain = require('../models/Villain')



router.get('/', function(request, response){
	Villain.find(function (err, villains){
		response.render('home', {villainsArray: villains});
	})
	
});

router.post('/', function(req, res) {
	var villain = new Villain({name: req.body.name,
								movie: req.body.movie,
								power: req.body.power,
								height: parseInt(req.body.height)});

	villain.save();
	res.redirect('/villains');
});

router.patch('/:id', function(request, response){
	var id = request.params.id;
	var newInfo= request.body;
	Villain.findById(id, function(err, villain){
		villain.name = newInfo.name;
		villain.movie = newInfo.movie;
		villain.power = newInfo.power;
		villain.height = newInfo.height;

		villain.save();
		response.send("success");
	});
});

router.delete('/:id', function(request, response){
	var id = request.params.id;
	console.log(id);
	Villain.findById(id, function(err, villain){
		villain.remove();
		response.send('success');
	});
});



//export router to app.js file
module.exports = router;