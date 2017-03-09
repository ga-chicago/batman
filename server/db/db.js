var mongoose = require('mongoose');
var connectionString = 'mongodb://localhost/villian'

mongoose.connect(connectionString);
mongoose.connection.on('connected', function(){
	console.log("connected to " + connectionString);
})

mongoose.connection.on('error', function(error){
	console.log("MongoDB error" + error);
})

mongoose.connection.on('disconnected', function(){
	console.log("Mongoose disconnected from " + connectionString);
})
//this file sets up event listeners and connects applications to the database