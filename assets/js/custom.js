/*=========


Template Name: Portfolio -  HTML Template

=========*/

/*=========
----- JS INDEX -----

=========*/

$(document).ready(function($) {

	// Whole Script Strict Mode Syntax
	"use strict";
    $("[data-background").each(function() {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });
    // data-bg
    $("[data-bg-color").each(function() {
        $(this).css("background", $(this).attr("data-bg-color"))
    });

        // PreLoader Js
        $(window).on('load', function(event) {
            $('#preloader').delay(500).fadeOut(500);
        });
    
         // PreLoader Js


    
    // meanmenu
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991",
        meanExpand: ['<i class="fas fa-plus"></i>'],
    });
    
    ////////////////////////////////////////////////////
    //  Sidebar Js
    $(".sidebar-toggle-btn").on("click", function() {
        $(".sidebar__area").addClass("sidebar-opened");
        $(".body-overlay").addClass("opened");
    });
    $(".sidebar__close-btn").on("click", function() {
        $(".sidebar__area").removeClass("sidebar-opened");
        $(".body-overlay").removeClass("opened");
    });

    $(".body-overlay").on("click", function() {
        $(".sidebar__area").removeClass("sidebar-opened");
        $(".body-overlay").removeClass("opened");
    });
    // sidebar__area2
    $(".sidebar-toggle-btn").on("click", function() {
        $(".sidebar__area_two").addClass("sidebar-opened");
        $(".body-overlay").addClass("opened");
    });
    $(".sidebar__close-btn").on("click", function() {
        $(".sidebar__area_two").removeClass("sidebar-opened");
        $(".body-overlay").removeClass("opened");
    });

    $(".body-overlay").on("click", function() {
        $(".sidebar__area_two").removeClass("sidebar-opened");
        $(".body-overlay").removeClass("opened");
    });




    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $(".menu-area").removeClass("sticky");
        } else {
            $(".menu-area").addClass("sticky");
        }
    });

    $('.banner-carousel').owlCarousel({
        loop: false,
        dots:true,
        margin: 0,
        nav: true,
        margin:20,
        smartSpeed: 500,
        autoHeight: true,
        autoplay: false,
        autoplayTimeout: 10000,
        navText: ['<span class="fa fa-long-arrow-alt-left"></span>', '<span class="fa fa-long-arrow-alt-right"></span>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1024: {
                items: 1
            },
        }
    });

    // service 
    $('.service-carousel').owlCarousel({
        loop: false,
        dots:true,
        margin: 30,
        nav: false,
        margin:20,
        smartSpeed: 500,
        autoplay: false,
        autoplayTimeout: 10000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1024: {
                items: 3
            },
        }
    });

    // counter 

    $('.counter').counterUp({
        delay: 30,
        time: 3000
      });
      
    	   // Magnific popup
   $('.video-icon').magnificPopup({
    type: 'iframe',
    iframe: {
        patterns: {
            youtube: {
                index: 'https://www.youtube.com/',

                id: 'v=',
                src: 'https://www.youtube.com/embed/%id%?autoplay=1'
            }

        },
        srcAction: 'iframe_src',
    }
    });  
    $('.brand-slider').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        margin:20,
        dots:false,
        nav: false,
    
        responsive:{
            0:{
                items:2
            },
            600:{
                items:2
            },
            1000:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });
    
    
    
    $('.testimonials-carousel').owlCarousel({
        loop: false,
        dots:true,
        margin: 0,
        nav: false,
        margin:20,
        smartSpeed: 500,
        autoHeight: true,
        autoplay: false,
        autoplayTimeout: 10000,

        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1024: {
                items: 1
            },
        }
    });
    
	//Accordion Box
	if ($('.accordion-box').length) {
		$(".accordion-box").on('click', '.acc-btn', function () {

			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');

			if ($(this).hasClass('active') !== true) {
				$(outerBox).find('.accordion .acc-btn').removeClass('active ');
			}

			if ($(this).next('.acc-content').is(':visible')) {
				return false;
			} else {
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);
			}
		});
	}


});