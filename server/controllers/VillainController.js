var express = require('express'),
	router	= express.Router(),
	Villain = require('../models/Villain.js')


router.get('/', function(req,res){
	Villain.find(function(err, villains){
		res.render('villains', {villainsArray: villains})
	})
});

router.post('/', function(req, res){
	console.log(req.body.villainName)
	console.log(req.body.realName)
	console.log(req.body.weight)
	console.log(req.body.height)
	console.log(req.body.noteableFeature)

	var villain = new Villain({villainName: req.body.villainName,
							  realName: req.body.realName,
							  weight: req.body.weight,
							  height: req.body.height,
							  noteableFeature: req.body.noteableFeature})
	villain.save();
	res.redirect('/villains')

});

router.delete('/:id', function(req,res){
	var id = req.params.id;
	console.log(id)
	Villain.findById(id, function(err,villain){
		villain.remove();
		res.send('success')
	})
})

router.patch('/:id', function(req,res){
	var id = req.params.id;
	var newInfo = req.body;
	console.log(newInfo)
	Villain.findById(id, function(err,villain){
		villain.villainName = newInfo.villainName;
		villain.realName = newInfo.realName;
		villain.weight = newInfo.weight;
		villain.height = newInfo.height;
		villain.noteableFeature = newInfo.noteableFeature;

		villain.save();
		res.send('success')
	})
})


module.exports = router;