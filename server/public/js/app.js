console.log("yo");

$('.delete').on('click', function(e){
	var $row = $(e.target).parent().parent();
	var id = $row.data('id');
	$.ajax({
		url: '/villains/' + id ,
		type: 'DELETE',
		success: function(result){
			console.log(result);
			// window.location.reload();
		},
		error: function(err){
			console.log(err);
		}
	});
});

$('.delete-hero').on('click', function(e){
	var row = $(e.target).parent().parent();
	var id = row.data('id');
	$.ajax({
		url: '/heroes/' + id,
		type: 'DELETE',
		success: function(response){
			console.log(response);
		}
	})
})

$('.edit').on('click', function(e){
	var $row = $(e.target).parent().parent();
	var id = $row.data('id');

	var name = $row.find('.name').val();
	var movie = $row.find('.movie').val();
	var power = $row.find('.power').val();
	var height = $row.find('.height').val();

	var updatedVillain = {name: name,
							movie: movie,
							power: power,
							height: height};
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
	})
});

$('.edit-hero').on('click', function(e){
	var row = $(e.target).parent().parent();
	var id = row.data('id');

	var name = row.find('.name').val();
	var movie = row.find('.movie').val();
	var power = row.find('.power').val();
	var height = row.find('.height').val();
	var cape = row.find('.cape').val();
	var heroLevel = row.find('.heroLevel').val();
	var charming = row.find('.charming').val();

	var updatedHero = {
		name: name,
		movie: movie,
		power: power,
		height: height,
		cape: cape,
		heroLevel: heroLevel,
		charming: charming
	}

	$.ajax({
		url: '/heroes/' + id,
		type: 'PATCH',
		data: updatedHero,
		success: function(response){
			console.log(response);
		},
		error: function(error){
			console.log(error);
		}
	});
});









