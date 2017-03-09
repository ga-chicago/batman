$('.delete').on('click', function(e){
	var row = $(e.target).parent().parent();
	var id  = row.data('id');

	$.ajax({
		url: '/heroes/' + id,
		type: 'DELETE',
		success: function(result){
			console.log(result);
		},	
		error: function(err) {
			console.log(err);	
		}
	})
})

$('.edit').on('click', function(e){
	var row = $(e.target).parent().parent();
	var id  = row.data('id');

	var name  = row.find('name').val();
	var movie = row.find('movie').val();
	var power = row.find('power').val();
	var height = row.find('height').val();

	var updatedHero = {name: name,
					  movie: movie,
					  power: power,
					  height: height};

	console.log(name, movie, power, height);

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
	})				  

});





