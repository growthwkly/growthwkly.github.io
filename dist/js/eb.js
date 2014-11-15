$(document).ready(function() {

  //mixpanel track
  $('[track]').click(function () {
    mixpanel.track($(this).attr("track"))  
  });

  //particles
  $('#intro').particleground({
    dotColor: '#fff',
    lineColor: '#fff',
    parallax: 'true'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });

  //navbar transition
  jQuery(function() {
    var menu = jQuery(".navbar.navbar-default.navbar-fixed-top");
    jQuery(window).scroll(function() {    
        var scroll = jQuery(window).scrollTop();
        if (scroll >= 15) {
         console.log('hello')
         menu.addClass("navbar-fill");
    } else {
        menu.removeClass("navbar-fill");
        }
    });
  });
});