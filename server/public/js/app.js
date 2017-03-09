console.log('yoo')

$('.delete').on('click', function(e){
  var row = $(e.target).parent().parent();
  var id = row.data('id');
  $.ajax({
    url: '/villains/' + id,
    type: 'DELETE',
    success: function(result){
      window.location.reload();
    },
    error: function(err){
      console.log(err);
    }
  });
});

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
      console.log(result)
    },
    error: function(err){
      console.log(err)
    }
  });
});


$('.edit-hero').on('click', function(e){
  var $row = $(e.target).parent().parent();
  var id = $row.data('id');

  var name = $row.find('.name').val();
  var movie = $row.find('.movie').val();
  var power = $row.find('.power').val();
  var height = $row.find('.height').val();

  var updatedHero = {name: name,
                        movie: movie,
                        power: power,
                        height: height};
  $.ajax({
    url: '/heros/' + id,
    type: 'PATCH',
    data: updatedHero,
    success: function(result){
      console.log(result)
    },
    error: function(err){
      console.log(err)
    }
  });
});

$('.delete-hero').on('click', function(e){
  var row = $(e.target).parent().parent();
  var id = row.data('id');
  $.ajax({
    url: '/heros/' + id,
    type: 'DELETE',
    success: function(result){
      window.location.reload();
    },
    error: function(err){
      console.log(err);
    }
  });
});
