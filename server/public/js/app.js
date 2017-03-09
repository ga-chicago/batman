console.log("Yo!");

$('.delete').on('click', function(e) {
	if ($('h1').innerHTML === 'Villains!') {
		var group = 'villains';
	}
	else {
		var group = 'heroes';
	}
	var row = $(e.target).parent().parent();
	var id = row.data('id');
	$.ajax({
		url: '/' + group + '/' + id,
		type: 'DELETE',
		success: function(result) {
			window.location.reload();
		},
		error: function(error) {
			console.log(error);
		}
	})
})

$('.edit').on('click', function(e) {
	if ($('h1').innerHTML === 'Villains!') {
		var group = 'villains';
	}
	else {
		var group = 'heroes';
	}
	var $row = $(e.target).parent().parent();
	var id = $row.data('id');

	var name = $row.find('.name').val();
	var movie = $row.find('.movie').val();
	var power = $row.find('.power').val();
	var height = $row.find('.height').val();

	var updatedGroup = {name: name,
							movie: movie,
							power: power,
							height: height};

	$.ajax({
		url: '/' + group + '/' + id,
		type: 'PATCH',
		data: updatedGroup,
		success: function(result) {
			console.log(result);
		},
		error: function(error) {
			console.log(error);
		}
	})

	console.log(name, movie, power, height);
	console.log('clicked on edit button');
})