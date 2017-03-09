var mongoose= require('mongoose');

var HeroSchema = new mongoose.Schema({
	name: String,
	movie: String,
	power: String,
	height: Number,
});

//creates our actual model villian (for when we do villain.find())
var heroModel = mongoose.model('Hero', HeroSchema);
module.exports = heroModel;