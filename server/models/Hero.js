var mongoose = require('mongoose');

var HeroSchema = new mongoose.Schema({
	name: {type: String, required: true},
	movie: String,
	power: String,
	height: Number,
	cape: String,
	heroLevel: Number,
	charming: String
}, {strict: false});

var heroModel = mongoose.model('Hero', HeroSchema);

module.exports = heroModel;