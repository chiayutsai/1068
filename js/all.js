"use strict";

$(document).ready(function () {
  $('.navbar-toggler').click(function () {
    $(this).toggleClass('open');
    $(this).next().fadeToggle();
  });
  $('.nav-link').click(function () {
    $('.navbar-toggler').removeClass('open');
    $('.navbar-nav').fadeToggle();
  });
  $(window).scroll(function () {
    var scroHeight = $(window).scrollTop();

    if (scroHeight > 250) {
      $('.navbar').addClass('scrollNav');
    } else {
      $('.navbar').removeClass('scrollNav');
    }
  });
  $(".js-collapseBtn").each(function () {
    $(this).click(function () {
      $('.collapse__content').slideUp();
      $(this).parent().next().stop().slideToggle();
    });
  });
  var slider_mul = $(".slider-mul").length;
  slider_mul = parseInt(slider_mul) / 2;

  for (var i = 1; i <= slider_mul; i++) {
    $('.js-slider-for' + i).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.js-slider-nav' + i
    });
    $('.js-slider-nav' + i).slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.js-slider-for' + i,
      arrows: false,
      dots: false,
      centerMode: true,
      focusOnSelect: true
    });
  }

  $('.js-light-thumbnail').lightGallery({
    selector: '.js-lightbox-item',
    galleryId: 2,
    thumbnail: true,
    autoplay: false,
    rotate: false,
    subHtmlSelectorRelative: true
  });
  $('.js-light-box').lightGallery({
    selector: '.js-lightbox-item',
    galleryId: 3,
    thumbnail: false,
    autoplay: false,
    rotate: false,
    subHtmlSelectorRelative: true
  });
  $('.js-lightbox-btn').click(function (e) {
    e.preventDefault();
    $(this).parent().find('.js-lightbox-item').first().trigger('click');
  });
});
//# sourceMappingURL=all.js.map
