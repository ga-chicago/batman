console.log("suh");

$('.delete').on('click', function(e){
	console.log("clicked")
	var $row = $(e.target).parent().parent();
	var id   = $row.data('id');

	$.ajax({
		url: '/heroes/' + id,
		type: 'DELETE',
		success: function(res){
		window.location.reload();
		},

		error: function(err){
			conolse.log(err);
		}
	});
});

$('.edit').on('click', function(e){
	console.log("clicked on edit");
	var $row = $(e.target).parent().parent();
	var id   = $row.data('id');

	var name   =$row.find('.name').val();
	var movie  = $row.find('.movie').val();
	var power  =$row.find('.power').val();
	var height = $row.find('.height').val();

		var updatedHeroes = {  name: name,
						   movie: movie,
						   power: power,
						   height: height
	};

	$.ajax({
		url: '/heroes/' + id,
		type: 'PATCH',
		data: updatedHeroes,
		success: function(res){
			console.log(res);
		},
		error: function(err){
			console.log(err)
		}
	});
});