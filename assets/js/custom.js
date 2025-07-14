/*
=================================
Template Name: Portfolio - HTML Template
=================================
*/

/*==========
JS INDEX
==========*/

$(document).ready(function () {
    "use strict";
  
    // Set background images from data-background attribute
    $("[data-background]").each(function () {
      const bg = $(this).attr("data-background");
      $(this).css("background-image", "url(" + bg + ")");
    });
  
    // Set background color from data-bg-color attribute
    $("[data-bg-color]").each(function () {
      const bgColor = $(this).attr("data-bg-color");
      $(this).css("background", bgColor);
    });
  
    // Preloader fade out on window load
    $(window).on("load", function () {
      $("#preloader").delay(500).fadeOut(500);
    });
  
    // Initialize meanmenu for mobile menu
    $("#mobile-menu").meanmenu({
      meanMenuContainer: ".mobile-menu",
      meanScreenWidth: "991",
      meanExpand: ['<i class="fas fa-plus"></i>'],
    });
  
    // Sidebar toggle for first sidebar area
    $(".sidebar-toggle-btn").on("click", function () {
      $(".sidebar__area").addClass("sidebar-opened");
      $(".body-overlay").addClass("opened");
    });
    $(".sidebar__close-btn").on("click", function () {
      $(".sidebar__area").removeClass("sidebar-opened");
      $(".body-overlay").removeClass("opened");
    });
    $(".body-overlay").on("click", function () {
      $(".sidebar__area").removeClass("sidebar-opened");
      $(".body-overlay").removeClass("opened");
    });
  
    // Sidebar toggle for second sidebar area (sidebar__area_two)
    $(".sidebar-toggle-btn").on("click", function () {
      $(".sidebar__area_two").addClass("sidebar-opened");
      $(".body-overlay").addClass("opened");
    });
    $(".sidebar__close-btn").on("click", function () {
      $(".sidebar__area_two").removeClass("sidebar-opened");
      $(".body-overlay").removeClass("opened");
    });
    $(".body-overlay").on("click", function () {
      $(".sidebar__area_two").removeClass("sidebar-opened");
      $(".body-overlay").removeClass("opened");
    });
  
    // Sticky menu on scroll
    $(window).on("scroll", function () {
      const scroll = $(window).scrollTop();
      if (scroll < 245) {
        $(".menu-area").removeClass("sticky");
      } else {
        $(".menu-area").addClass("sticky");
      }
    });
  
    // Banner carousel initialization
    $(".banner-carousel").owlCarousel({
      loop: false,
      dots: true,
      margin: 20,
      nav: true,
      smartSpeed: 500,
      autoHeight: true,
      autoplay: false,
      autoplayTimeout: 10000,
      navText: [
        '<span class="fa fa-long-arrow-alt-left"></span>',
        '<span class="fa fa-long-arrow-alt-right"></span>',
      ],
      responsive: {
        0: { items: 1 },
        600: { items: 1 },
        1024: { items: 1 },
      },
    });
  
    // Service carousel initialization
    $(".service-carousel").owlCarousel({
      loop: false,
      dots: true,
      margin: 20,
      nav: false,
      smartSpeed: 500,
      autoplay: false,
      autoplayTimeout: 10000,
      responsive: {
        0: { items: 1 },
        600: { items: 1 },
        1024: { items: 3 },
      },
    });
  
    // Counter Up plugin initialization
    $(".counter").counterUp({
      delay: 30,
      time: 3000,
    });
  
    // Magnific Popup for video iframes (YouTube)
    $(".video-icon").magnificPopup({
      type: "iframe",
      iframe: {
        patterns: {
          youtube: {
            index: "https://www.youtube.com/",
            id: "v=",
            src: "https://www.youtube.com/embed/%id%?autoplay=1",
          },
        },
        srcAction: "iframe_src",
      },
    });
  
    // Brand slider carousel
    $(".brand-slider").owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      margin: 20,
      dots: false,
      nav: false,
      responsive: {
        0: { items: 2 },
        600: { items: 2 },
        1000: { items: 3 },
        1200: { items: 4 },
      },
    });
  
    // Testimonial carousel
    $(".testimonial-carousel").owlCarousel({
      autoplay: true,
      smartSpeed: 1000,
      center: true,
      dots: false,
      loop: true,
      nav: true,
      navText: [
        '<i class="fas fa-chevron-left"></i>',
        '<i class="fas fa-chevron-right"></i>',
      ],
      responsive: {
        0: { items: 1 },
        576: { items: 1 },
        768: { items: 2 },
        992: { items: 3 },
      },
    });
  
    // Accordion functionality
    if ($(".accordion-box").length) {
      $(".accordion-box").on("click", ".acc-btn", function () {
        const outerBox = $(this).parents(".accordion-box");
        const target = $(this).parents(".accordion");
  
        if (!$(this).hasClass("active")) {
          $(outerBox).find(".accordion .acc-btn").removeClass("active");
        }
  
        if ($(this).next(".acc-content").is(":visible")) {
          return false;
        } else {
          $(this).addClass("active");
          $(outerBox).children(".accordion").removeClass("active-block");
          $(outerBox).find(".accordion").children(".acc-content").slideUp(300);
          target.addClass("active-block");
          $(this).next(".acc-content").slideDown(300);
        }
      });
    }
  });
  