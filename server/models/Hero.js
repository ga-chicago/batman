var mongoose = require('mongoose');

var HeroSchema = new mongoose.Schema({
	name: String,
	movie: String,
	power: String,
	height: Number
});

var HeroModel = mongoose.model('Hero', HeroSchema);

module.exports = HeroModel;