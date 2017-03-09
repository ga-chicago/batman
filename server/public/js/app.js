console.log("yo")

//row.data is hooked up to the data-id in VillainController
$('.delete').on('click', function(e){
	var row = $(e.target).parent().parent();
	var id = row.data('id');
	$.ajax({
		url: "/villains/" + id,
		type: "DELETE",
		success: function(result){
			window.location.reload();
		},
		error: function(err){
			console.log(err)
		}
	})
});

$('.edit').on('click', function(e){
	var $row = $(e.target).parent().parent();
	var id = $row.data('id');

//finding by the name gives you the box, .val gives you the html inside it
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
	console.log("clicked on edit");
})

$('.delete-heroes').on('click', function(e){
	var row = $(e.target).parent().parent();
	var id = row.data('id');
	$.ajax({
		url: "/heroes/" + id,
		type: "DELETE",
		success: function(result){
			window.location.reload();
		},
		error: function(err){
			console.log(err)
		}
	})
});


$('.edit-heroes').on('click', function(e){
	var $row = $(e.target).parent().parent();
	var id = $row.data('id');

//finding by the name gives you the box, .val gives you the html inside it
	var name = $row.find('.name').val();
	var movie = $row.find('.movie').val();
	var power = $row.find('.power').val();
	var height = $row.find('.height').val();
	var updatedHero = {name: name,
				movie: movie,
				power: power,
				height: height};

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
	console.log("clicked on edit-heroes");
})
