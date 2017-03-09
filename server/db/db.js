var mongoose = require('mongoose'),
	connectionString = 'mongodb://localhost/batman'

mongoose.connect(connectionString);

mongoose.connection.on('connected', function(){
	console.log('connected to' + connectionString)
})

mongoose.connection.on('error', function(error){
	console.log('Mongodb err' + error)
})

mongoose.connection.on('disconnected', function(){
	console.log('Mongoose disconnected from' + connectionString)
})