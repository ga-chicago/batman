//The Villain Model

var mongoose = require('mongoose');  //require mongoose for this file

var VillianSchema = new mongoose.Schema({ //define villian schema
	name: String,
	movie: String,
	power: String,
	height: Number
});

var villianModel = mongoose.model('Villian', VillianSchema);  	//define villian model
																//Villian is a class capitalize V

module.exports = villianModel;  //export model