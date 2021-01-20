"use strict";

$(document).ready(function () {
  var wdth = $(window).width();
  $('.js-totop').css('opacity', 0);

  if (wdth < 991) {
    $('.navbar').addClass('mobileNav');
  } else {
    $('.navbar').removeClass('mobileNav');
  }

  if (wdth < 769) {
    $('.tab__dropdown').find('.tab__menu').addClass('tab__menu--dropdown');
  } else {
    $('.tab__dropdown').find('.tab__menu').removeClass('tab__menu--dropdown');
  }

  $(window).resize(function () {
    var wdth = $(window).width();

    if (wdth < 991) {
      $('.navbar').addClass('mobileNav');
    } else {
      $('.navbar').removeClass('mobileNav');
    }

    if (wdth < 768) {
      $('.tab__dropdown').find('.tab__menu').addClass('tab__menu--dropdown ');
    } else {
      $('.tab__dropdown').find('.tab__menu').removeClass('tab__menu--dropdown');
    }
  });
  $('.navbar-toggler').click(function () {
    $(this).toggleClass('open');
    $(this).next().toggleClass('openNav');
    $(this).next().fadeToggle();
  });
  $('.nav-link').click(function () {
    $('.navbar-toggler').removeClass('open');
    $('.openNav').fadeToggle();
    $('.navbar-nav').removeClass('openNav');
  });
  $(window).scroll(function () {
    var scroHeight = $(window).scrollTop();

    if (scroHeight > 250) {
      $('.navbar').addClass('scrollNav');
      $('.js-totop').css('opacity', 0.7);
    } else {
      $('.navbar').removeClass('scrollNav');
      $('.js-totop').css('opacity', 0);
    }

    $('.tab__content').each(function () {
      var tabContent = $(this).offset().top;

      if (scroHeight > tabContent - 50) {
        $(this).find('.tab__backBtn').css('opacity', 0.7);
      } else {
        $(this).find('.tab__backBtn').css('opacity', 0);
      }
    });
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

  $('.js-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
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
  $('.js-hide-thumbnail').lightGallery({
    selector: '.js-lightbox-item',
    galleryId: 4,
    thumbnail: true,
    autoplay: false,
    rotate: false,
    subHtmlSelectorRelative: true
  });
  $('.js-hide-box').lightGallery({
    selector: '.js-lightbox-item',
    galleryId: 5,
    thumbnail: false,
    autoplay: false,
    rotate: false,
    subHtmlSelectorRelative: true
  });
  $('.js-lightbox-btn').click(function (e) {
    e.preventDefault();
    $(this).parent().find('.js-lightbox-item').first().trigger('click');
  });
  $('.js-lightbox-showBtn').click(function (e) {
    e.preventDefault();
    $(this).parent().find('.js-lightbox-item').first().trigger('click');
  });
  $('.js-tab').each(function () {
    $(this).find('.tab-pane').first().addClass('active');

    if ($(this).hasClass('tab__dropdown')) {
      if ($(this).children('.tab__menu').hasClass('tab__menu--dark')) {
        $(this).prepend('<a data-toggle="dropdown" class="tab__dropdownBtn tab__dropdownBtn--dark dropdown-toggle js-tab__dropdownBtn" href=""></a>');
      } else {
        $(this).prepend('<a data-toggle="dropdown" class="tab__dropdownBtn dropdown-toggle js-tab__dropdownBtn" href=""></a>');
      }

      var tab_btnText = $(this).find('.tab__menuLink--active').text();
      $(this).find('.js-tab__dropdownBtn').text(tab_btnText);
    }
  });
  $('[data-toggle="tab"]').click(function (e) {
    e.preventDefault();
    $(this).addClass('tab__menuLink--active');
    $(this).parent().siblings().children().removeClass('tab__menuLink--active');
    var tab_btnText = $(this).text();
    $(this).parent().parent().prev('.js-tab__dropdownBtn').text(tab_btnText);
    var showPane = $(this).attr('href');
    $(this).parent().parent().next('.tab__content').find('.tab-pane').hide();
    $(showPane).fadeIn();
  });
  $('[data-toggle="dropdown"]').click(function (e) {
    e.preventDefault();
    $(this).next('.tab__menu').slideToggle();
  });
  $('[data-toggle="dropdown"]').focusout(function () {
    $(this).next('.tab__menu').slideUp();
  });
});
//# sourceMappingURL=all.js.map
