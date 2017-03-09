console.log('hey')

$('.delete').on('click', function(e){
	var row = $(e.target).parent().parent();
	var id = row.data('id');
	$.ajax({
		url: 'http://localhost:3000/heros/' + id,
		type: 'DELETE',
		success: function(result){
			window.location.reload();
		},
		error: function(err){
			console.log(err)
		}
	})
})

$('.save').on('click', function(e){
	var row = $(e.target).parent().parent();
	var id = row.data('id');
	var heroName = row.find('.heroName').val();
	var realName = row.find('.realName').val();
	var weight = row.find('.weight').val();
	var height = row.find('.height').val();
	var noteableFeature = row.find('.noteableFeature').val();
	var updatedHero = {heroName: heroName, realName: realName, weight: weight, height: height, noteableFeature: noteableFeature}
	$.ajax({
		url: 'http://localhost:3000/heros/' + id,
		type: 'PATCH',
		data: updatedHero,
		success: function(result){
			console.log(result)
		},

		error: function(error){
			console.log(error)
		}
	})

})

$('.deleteVillain').on('click', function(e){
	var row = $(e.target).parent().parent();
	var id = row.data('id');
	$.ajax({
		url: 'http://localhost:3000/villains/' + id,
		type: 'DELETE',
		success: function(result){
			window.location.reload();
		},
		error: function(err){
			console.log(err)
		}
	})
})


$('.saveVillain').on('click', function(e){
	var row = $(e.target).parent().parent();
	var id = row.data('id');
	var villainName = row.find('.villainName').val();
	var realName = row.find('.realName').val();
	var weight = row.find('.weight').val();
	var height = row.find('.height').val();
	var noteableFeature = row.find('.noteableFeature').val();
	var updatedVillain = {villainName: villainName, realName: realName, weight: weight, height: height, noteableFeature: noteableFeature}
	$.ajax({
		url: 'http://localhost:3000/villains/' + id,
		type: 'PATCH',
		data: updatedVillain,
		success: function(result){
			console.log(result)
		},

		error: function(error){
			console.log(error)
		}
	})
})