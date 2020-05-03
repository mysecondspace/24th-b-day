//= ../../bower_components/jquery/dist/jquery.js
//= components/confetti.min.js

$('input').on('input', function(e) {
  if ($(this).val() == 'Оля') {
  	$('#canvas').addClass('fade');
    $('#video').html('<iframe src="https://www.youtube.com/embed/1IaZy0sDLu0?vq=hd1080;autoplay=1&;controls=0;showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>');

    setTimeout(function() {
    	$('article').addClass('swipe');
    }, 2500);
  };
});

window.onload = function() {
  $('input').focus();
};

var confettiSettings = {target: 'canvas'},
    confetti = new ConfettiGenerator(confettiSettings);

confetti.render();
