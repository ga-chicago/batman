//go in and make a user controller that has a route for login and register//
//the base route of /user //
//controller will have 2 get routes and 2 post routes (1 registration 1 login)//
//then you are going to make a view for the login and register//
//make a form for the login and register//

var express = require('express');
var router = express.Router();
var User = require('../models/User');
var bcrypt = require('bcryptjs');

//app.use(/user) this denotes that every route in this controller starts with /user!!!

//login
router.get('/login', function(request, response){
  response.render('login', {})
});

router.post('/login', function(request, response){



	var loginUsername = request.body.username;
	User.findOne({username: request.body.username}), function(error, user){
		if (user){

			bcrypt.compare(password, user.password, function(error, match){
				//this method returns true or false
				//true the passwords match
				if(match){
			request.session.username = user.username
			request.session.userId = user.id
			request.session.loggedIn = true
			response.redirect('/heroes')

				}else{
					res.render('register', {message: 'username was taken'})
					//because .redirect takes you to the absolute path!!!!
				}
			})

			}
		}

	});

router.get('/registration', function(request, response){

//CRYPTIONNNNNN//
bcrypt.genSalt(10, function(error, salt){
bcrypt.hash(request.body.password, salt, function(error, hash){
	var hashedPasswordObject = {};

	hashedPasswordObject.username = request.body.username;
	hashedPasswordObject.password = hash;



	User.create(hashedPasswordObject, function(error, user){
		if(user){
			request.session.username = user.username;
			request.session.userId = user.id;
			request.session.loggedIn = true;
			response.redirect('/heroes')
			}
			else{
				res.redirect('/user/registration')
			}
		})
	})
})

	//go into mongo and figure how to empty or drop a collection (user collection)
	//look up mongo command to drop/empty a collection
	//making sure when the user registers and registers a username it's not taken already
});




router.get('/logout', function(request, response){
	request.session.destroy(function(error){
		response.redirect('/user/login');
	})
});



// registration

router.post('/registration', function(request, response){
	console.log(request.session, " this is our session object");

	User.create(request.body, function(error, user){
		if(user){
			request.session.username = user.username
			request.session.userId = user.id
			request.session.loggedIn = true

			response.redirect('/heroes')
		}
		else {
			response.render('register', {message: 'username was nah'})
		}
	})
});


module.exports = router;

