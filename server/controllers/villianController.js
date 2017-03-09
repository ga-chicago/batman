//This is where wer handle all http request related to villians
//Villain controller
var express = require('express');
var router = express.Router();
var Villian = require('../models/Villian'); //note .. had to go back another level 

router.get('/', function(req, res){			//'/' only needed because this is on same level
	Villian.find(function(err, villians){
		console.log(villians);
		res.render('home', {villiansArray: villians});
	});
});

router.post('/', function(req, res){


	var villian = new Villian({name: req.body.name,
							    movie: req.body.movie,
								power: req.body.power,
								height: req.body.height})
	villian.save();
	res.redirect('/villians');

});

router.patch('/', function(req, res){
	var id = req.params.id;
	var heroUpdate = req.body;
	console.log(id);
	
})

module.exports = router;  