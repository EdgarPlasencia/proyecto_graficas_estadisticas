
jQuery(document).ready(function() {
  jQuery('body').scrollspy('refresh')
});

jQuery('.navbar-default').addClass('opaqued');

var windowsHeight = $(window).height();
  $('#headerwrap').css('height', windowsHeight + 'px');

  $('#headerwrap').backstretch([
        "img/eliminar.png"
    ], {duration: 3000, fade: 750});

