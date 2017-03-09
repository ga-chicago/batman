// Delete Villain
$('.delete').on('click', function(e){
	var row = $(e.target).parent().parent(); 
	var id = row.data('id'); 

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

// Delete Hero
$('.delete').on('click', function(e){
	var row = $(e.target).parent().parent(); 
	var id = row.data('id'); 

	$.ajax({
		url: 'http://localhost:3000/heroes/' + id,
		type: 'DELETE',
		success: function(result){
			window.location.reload(); 
		},
		error: function(err){
			console.log(err);
		}
	}); 
}); 

// Edit Villain
$('.edit').on('click', function(e){
	var $row = $(e.target).parent().parent(); 
	var id = $row.data('id'); 

	var name = $row.find('.name').val(); 
	var movie = $row.find('.movie').val();
	var power = $row.find('power').val(); 
	var height = $row.find('.height').val(); 

	var updatedVillain = { name: name,
						movie: movie,
						power: power,
						height: height
						 };
		console.log(updatedVillain);

	$.ajax({
		url: '/villains/' + id,
		type: 'PATCH',
		data: updatedVillain,
		success: function(result){
			console.log(result);
		},

		error: function(err){
			console.log(err); 
		}
	});
}); 

// Edit Hero
$('.edit').on('click', function(e){
	var $row = $(e.target).parent().parent(); 
	var id = $row.data('id'); 

	var name = $row.find('.name').val(); 
	var movie = $row.find('.movie').val();
	var power = $row.find('power').val(); 
	var height = $row.find('.height').val(); 

	var updatedHero = { name: name,
						movie: movie,
						power: power,
						height: height
						 };
		console.log(updatedHero);

	$.ajax({
		url: '/heroes/' + id,
		type: 'PATCH',
		data: updatedHero,
		success: function(result){
			console.log(result);
		},

		error: function(err){
			console.log(err); 
		}
	});
}); 
