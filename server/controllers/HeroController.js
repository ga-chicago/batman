var express = require('express'),
	router	= express.Router(),
	Hero	= require('../models/Hero.js')


router.get('/', function(req,res){
	Hero.find(function (err,heros){
		res.render('heros', {herosArray: heros})
	})
});

router.post('/', function(req, res){
	console.log(req.body.villainName)
	console.log(req.body.realName)
	console.log(req.body.weight)
	console.log(req.body.height)
	console.log(req.body.noteableFeature)

	var hero = new Hero({heroName: req.body.heroName,
							  realName: req.body.realName,
							  weight: req.body.weight,
							  height: req.body.height,
							  noteableFeature: req.body.noteableFeature})
	hero.save();
	res.redirect('/heros')

});

router.delete('/:id', function(req,res){
	var id = req.params.id;
	console.log(id)
	// Hero.findById(id, function(err,hero){
	// 	hero.remove();
	// 	res.send('success')
	// })
})

router.patch('/:id', function(req,res){
	var id = req.params.id;
	var newInfo = req.body;
	console.log(newInfo)
	Hero.findById(id, function(err,hero){
		hero.heroName = newInfo.heroName;
		hero.realName = newInfo.realName;
		hero.weight = newInfo.weight;
		hero.height = newInfo.height;
		hero.noteableFeature = newInfo.noteableFeature;

		hero.save();
		res.send('success')
	})
})


module.exports = router;