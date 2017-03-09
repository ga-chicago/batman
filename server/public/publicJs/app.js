console.log('yo');

$('.delete').on('click', function(e){
	console.log("clicked")
	var $row = $(e.target).parent().parent();
	var id   = $row.data('id');
	$.ajax({
		url: '/villains/' + id,
		type: 'DELETE',
		success: function(res){
			console.log("success")
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


	var updatedVillain = { name: name,
						   movie: movie,
						   power: power,
						   height: height
	};


//creating a http request using javascript
	$.ajax({
		url: '/villains/' + id,
		type: 'PATCH',
		data: updatedVillain,
		success: function(res){
			console.log(res);
		},
		error: function(err){
			console.log(err)
		}
	});
});


