var mongoose = require('mongoose')

var VillainSchema = new mongoose.Schema({
	villainName: String,
	realName: String,
	weight: String,
	height: String,
	noteableFeature: String,
});

var villainModel = mongoose.model('Villain', VillainSchema);

module.exports = villainModel