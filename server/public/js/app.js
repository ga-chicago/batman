console.log("this is working!");

$('.delete').on('click', function(e){
	var row = $(e.target).parent().parent();
	var id = row.data('id'); //jquery objects
	console.log(id);

	$.ajax({//the ajax is sending things to the url and the type, calls other functions
		url: 'http://localhost:3000/villains/' + id, //client sends response to host
		type: 'DELETE',
		success: function(result){
			window.location.reload();
		},
		error: function(error){
			console.log(error);
		}
	}); //ajax is running the delete request, eventually everything will be in ajax
});

$('.edit').on('click', function(e){
	var row = $(e.target).parent().parent();
	var id = row.data('id');

	var name = row.find('.name').val();
	var movie = row.find('.movie').val(); //THESE ARE ALL $JQUERY OBJECTS
	var power = row.find('.power').val();
	var height = row.find('.height').val();

		var updatedVillain = {name: name, movie: movie, power: power, height: height};

		//how to send it to the server!!!// //ajax makes an http request in javascript//
		$.ajax({
			url: '/villains/' + id,
			type: 'PATCH',
			success: function(result){ //callback function when successful response is made
			console.log(result);
			},
			error: function(err){
				console.log(err);
			}
		})

		console.log(name, movie, power, height);

	console.log("clicked on edit");
});


//THIS IS FOR THE HERO APP!!!//
$('.deleteTwo').on('click', function(e){
	var row = $(e.target).parent().parent();
	var id = row.data('id'); //jquery objects
	console.log(id);

	$.ajax({//the ajax is sending things to the url and the type, calls other functions
		url: 'http://localhost:3000/heroes/' + id, //client sends response to host
		type: 'DELETE',
		success: function(result){
			window.location.reload();
		},
		error: function(error){
			console.log(error);
		}
	}); //ajax is running the delete request, eventually everything will be in ajax
});

$('.editTwo').on('click', function(e){
	var row = $(e.target).parent().parent();
	var id = row.data('id');

	var name = row.find('.name').val();
	var movie = row.find('.movie').val(); //THESE ARE ALL $JQUERY OBJECTS
	var power = row.find('.power').val();
	var height = row.find('.height').val();

		var updatedHero = {name: name, movie: movie, power: power, height: height};

		//how to send it to the server!!!// //ajax makes an http request in javascript//
		$.ajax({
			url: '/heroes/' + id,
			type: 'PATCH',
			data: updatedHero,
			success: function(result){ //callback function when successful response is made
			console.log(result);
			},
			error: function(err){
				console.log(err);
			}
		})

		console.log(name, movie, power, height);

	console.log("clicked on edit");
});


