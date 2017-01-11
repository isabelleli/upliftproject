$(document).keypress(function(e){
    var key = e.which;
    
    if (key == 116) {
        // if the user pressed 't' (for 'toggle'):
        $('#comment').show();
    }
    setTimeout(fade_out, 4000);
});

function fade_out() {
  $("#comment").fadeOut().hide();
  setTimeout(show_options,500);
}

function show_options() {
  $("#wrapper").show();
}

function toggle_visibility(id) {
   var e = document.getElementById(id);
   if(e.style.display === 'none')
      e.style.display = 'block';
   else
      e.style.display = 'none';
}

function clean_up() {
  document.getElementById('wrapper').style.display = 'none';
  document.getElementById('popupBoxOnePosition').style.display = 'none';
  document.getElementById('popupBoxTwoPosition').style.display = 'none';
}

// $('#show').click(function() {
// 	$('#show').css('display','none');
// 	$('#data').show();
// 	$('#hide').show();
// });

// $('#hide').click(function() {
// 	$('#hide').css('display','none');
// 	$('#data').hide();
// 	$('#show').show();
// });