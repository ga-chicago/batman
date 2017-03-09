console.log('hello');

$('.delete-villains').on('click', function(e){
	var $row = $(e.target).parent().parent();
	var id = $row.data('id');
	console.log(id);

	$.ajax({
		url: 'http://localhost:3000/villains/' + id,
		type: 'DELETE',
		success: function(result){
			window.location.reload();
		},
		error: function(err){
			console.log(err);
		}
	});
});

$('.edit-villains').on('click', function(e){
	console.log("clicked on edit");
	var $row = $(e.target).parent().parent();
	var id = $row.data('id');
//looks for the children in the row , this case the name
	var name = $row.find(".name").val();
	var movie = $row.find(".movie").val();
	var power = $row.find(".power").val();
	var height = $row.find(".height").val();

	var updatedVillain ={name: name, movie: movie, power: power, height: height};

	$.ajax({
		url: '/villains/' + id,
		type: 'PATCH',
		data: updatedVillain,
		//call backs
		success: function(result){
			console.log(result);
		},
		error: function(err){
			console.log(err);
		}

	});
	// console.log(name, movie, power, height);
});

$('.delete-hero').on('click', function(e){
	var $row = $(e.target).parent().parent();
	var id = $row.data('id');
	console.log(id);

	$.ajax({
		url: 'http://localhost:3000/hero/' + id,
		type: 'DELETE',
		success: function(result){
			window.location.reload();
		},
		error: function(err){
			console.log(err);
		}
	});
});

$('.edit-hero').on('click', function(e){
	console.log("clicked on edit");
	var $row = $(e.target).parent().parent();
	var id = $row.data('id');
//looks for the children in the row , this case the name
	var name = $row.find(".name").val();
	var movie = $row.find(".movie").val();
	var power = $row.find(".power").val();
	var height = $row.find(".height").val();

	var updatedHero ={name: name, movie: movie, power: power, height: height};

	$.ajax({
		url: '/hero/' + id,
		type: 'PATCH',
		data: updatedHero,
		//call backs
		success: function(result){
			console.log(result);
		},
		error: function(err){
			console.log(err);
		}

	});
	// console.log(name, movie, power, height);
});