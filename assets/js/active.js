(function ($) {
  'use strict';

  jQuery(document).ready(function ($) {
    $('.slider').owlCarousel({
      items: 1,
      margin: 30,
      loop: true,
      dots: false,
      nav: true,
      navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
      autoplay: true,
    });

    /* Modal Video */
    $('.js-modal-btn').modalVideo({ channel: 'youtube' });

    /*==============================
        Slick Nav
        ================================*/
    var $ourmenu = $('#ourmenu');
    $ourmenu.slicknav();
  });

  jQuery(window).on('load', function () {});
})(jQuery);
