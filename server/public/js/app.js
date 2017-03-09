$('.vdelete').on('click', function (e) {
	var id = $(e.target).parent().parent().data('id');
	$.ajax({
		url: 'http://localhost:3000/villains/' + id,
		type: 'DELETE',
		success: function (res) {
			window.location.reload();
		},
		error: function (err) {
			console.log(err);
		}
	});
});

$('.vedit').on('click', function (e) {
	var $row = $(e.target).parent().parent();
	var id = $row.data('id');
	var updatedVillain = {
		name: $row.find('.name').val(),
		movie: $row.find('.movie').val(),
		power: $row.find('.power').val(),
		height: $row.find('.height').val()
	}
	$.ajax({
		url: '/villains/' + id,
		type: 'PATCH',
		data: updatedVillain,
		success: function (res) {
			window.location.reload();
		},
		error: function (err) {
			console.log(err);
		}
	});
	console.log("edited");
});

$('.hdelete').on('click', function (e) {
	var id = $(e.target).parent().parent().data('id');
	$.ajax({
		url: 'http://localhost:3000/heroes/' + id,
		type: 'DELETE',
		success: function (res) {
			window.location.reload();
		},
		error: function (err) {
			console.log(err);
		}
	});
});

$('.hedit').on('click', function (e) {
	var $row = $(e.target).parent().parent();
	var id = $row.data('id');
	var updatedHero = {
		name: $row.find('.name').val(),
		movie: $row.find('.movie').val(),
		power: $row.find('.power').val(),
		height: $row.find('.height').val()
	}
	$.ajax({
		url: '/heroes/' + id,
		type: 'PATCH',
		data: updatedHero,
		success: function (res) {
			window.location.reload();
		},
		error: function (err) {
			console.log(err);
		}
	});
	console.log("edited");
});