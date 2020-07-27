(function ($) {
  'use strict';

  jQuery(document).ready(function ($) {
    $('.slider').owlCarousel({
      items: 1,
      margin: 30,
      loop: false,
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

    $('.map')
      .gmap3({
        center: [48.8620722, 2.352047],
        zoom: 4,
      })
      .marker([
        { position: [48.8620722, 2.352047] },
        { address: '86000 Poitiers, France' },
        { address: '66000 Perpignan, France', icon: '../img/location.png' },
      ])
      .on('click', function (marker) {
        marker.setIcon('https://maps.google.com/mapfiles/marker_green.png');
      });
  });

  jQuery(window).on('load', function () {});
})(jQuery);
