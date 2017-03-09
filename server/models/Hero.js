var mongoose = require('mongoose')

var HeroSchema = new mongoose.Schema({
	heroName: String,
	realName: String,
	weight: String,
	height: String,
	noteableFeature: String,
});

var heroModel = mongoose.model('Hero', HeroSchema);

module.exports = heroModel;