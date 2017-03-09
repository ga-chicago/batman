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

router.post('/', function(req, res){						//listener for post function


	var villian = new Villian({name: req.body.name,			//define new Villian to match Schema
							    movie: req.body.movie,
								power: req.body.power,
								height: req.body.height})
	villian.save();											//save new var
	res.redirect('/villians');								//response to be a redirect	

});

router.patch('/:id', function(req, res){				//listner for patch
	var id = req.params.id;								//define id as all infor in id
	var newInfo = req.body;								//define newInfo as the req from the body

	console.log(id);
	Villian.findById(id, function(err, villian){		//find villain we want to update w.callback function
		villian.name = newInfo.name;					//pass updated info
		villian.vmovie = newInfo.movie;
		villian.power = newInfo.power;
		villian.height = newInfo.height;
		villian.save();									//save villain
		res.send('villain changed')						//req response
	})
})

router.delete('/:id', function(req,res){				//req listener delete
	var id = req.params.id;								//define id as all info assoc with id
	console.log(id);
	Villian.findbyId(id, function(err, villian){		//grab villain by id and all info defind above by id
		villian.remove();								//delete villain
		res.send('villain deleted')						//req response
	})
})


module.exports = router;


