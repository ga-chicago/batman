var mongoose= require('mongoose');
var connectionString = 'mongodb://localhost/batman';

//connection to the database
mongoose.connect(connectionString);

mongoose.connection.on('connected', function(){
	console.log("connected to" + connectionString);

});

mongoose.connection.on('error', function(error){
	console.log("MongoDB error" + error);

});

mongoose.connection.on('disconnected', function(){
	console.log("mongoose disconnected to" + connectionString);

})