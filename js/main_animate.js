
var navimove = function() {
$('.nav-bar-icon').click(function() {
  $('.nav-bar').animate({
      width: "193px"
    },
    300);
});
});

$(document).ready(navimove);