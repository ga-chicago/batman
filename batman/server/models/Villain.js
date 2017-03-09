var mongoose= require('mongoose');

var VillainSchema = new mongoose.Schema({
	name: String,
	movie: String,
	power: String,
	height: Number,
});

//creates our actual model villian (for when we do villain.find())
var villainModel = mongoose.model('Villain', VillainSchema);
module.exports = villainModel;