var $ = 'jQuery';
jQuery(function($) {

  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function() {

    // Calc current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animatable'),
        $animateds = $('.animated');

    // Unbind scroll handler if we have no animatables
    if ($animatables.size() == 0) {
      $(window).off('scroll', doAnimations);
    }

    // Check all animatables and animate them if necessary
		$animatables.each(function(i) {
       var $animatable = $(this);
			if (($animatable.offset().top - 20) < offset-$(window).height()/100*10 && !(($animatable.offset().top + $animatable.height()) < $(window).scrollTop())) {
        $animatable.toggleClass('animatable',false).toggleClass('animated',true);
			}
    });

    // Check all animated and desanimate :( them if necessary
		$animateds.each(function(i) {
       var $animated = $(this);
			if (($animated.offset().top) > offset || (($animated.offset().top + $animated.height()) < $(window).scrollTop())) {
        $animated.toggleClass('animatable',true).toggleClass('animated',false);
			}
    });
	};

  // Hook doAnimations on scroll, and trigger a scroll
	$(window).on('scroll', doAnimations);
  $(window).trigger('scroll');

});

jQuery(document).ready(function(){
  jQuery('#fixed-event').hide(); // Grey Area big
  jQuery('#first-event').show(); // Quote

   setTimeout(function(){
    jQuery('#first-event').hide();
    jQuery('#fixed-event').show();
  },5000);  //original time: 10000

});
