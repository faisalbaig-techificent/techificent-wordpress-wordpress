

jQuery(function ($) {
    "use strict";

    //let $window = $(window);
    // alert($window);

    /*------ STICKY MENU FIXED ------*/

    $(window).scroll(function () {

        if ($(document).scrollTop() > 0) {

            $('.fixed-header1').removeClass('position-relative');
            $('.header-area').addClass('fixednavbar');

        } else {
            $('.fixed-header1').addClass('position-relative');
            $('.header-area').removeClass('fixednavbar');
        }
    });

    /*------ End STICKY MENU FIXED ------*/


    var owl5 = $('.owl-testimonial');
    owl5.owlCarousel({
        items: 2,
        dots: false,
        loop: true,
        autoplay: false,
        responsiveClass: true,
        
        margin: 0, // Adjust the margin value as needed
        responsive: {
            0: {
                items: 1,
                margin: 10 // Optional: Set different margin for smaller screens
            },
            760: {
                items: 2,
                margin: 15 // Optional: Set different margin for medium screens
            },
            1000: {
                items: 2,
                margin: 0 // Optional: Set different margin for larger screens
            }
        }
    });
    
    $('.customNextBtn').click(function() {
        var owl = $('.owl-testimonial');
        owl.owlCarousel();
        owl.trigger('next.owl.carousel');
    });
    $('.customPrevBtn').click(function() {
        var owl = $('.owl-testimonial');
        owl.owlCarousel();
        owl.trigger('prev.owl.carousel', [300]);
    });
        

    var owl5 = $('.marquee-owl');
    owl5.owlCarousel({
        items: 6,
        dots: false,
        loop: true,
        autoplay: true,
        responsiveClass: true,
        
        margin: 0, // Adjust the margin value as needed
        responsive: {
            0: {
                items: 1,
                margin: 10 // Optional: Set different margin for smaller screens
            },
            760: {
                items: 2,
                margin: 15 // Optional: Set different margin for medium screens
            },
            1000: {
                items: 6,
                margin: 40 // Optional: Set different margin for larger screens
            }
        }
    });
    



    $(function(){
        // Scroll Event
        $(window).on('scroll', function(){
            var scrolled = $(window).scrollTop();
            if (scrolled > 600) $('.go-top').addClass('active');
            if (scrolled < 600) $('.go-top').removeClass('active');
        });
        // Click Event
        $('.go-top').on('click', function() {
            $("html, body").animate({ scrollTop: "0" },  500);
        });
    });



    /* ===================================
         Search Side Menu
     ====================================== */


    $("#add_search_box").click(function () {
        $(".search-box-overlay").addClass("fixed-box");
    });

    $("#close-window").click(function () {
        $(".search-box-overlay").addClass("remove-fixed-box");
        setTimeout(function () {
            $(".search-box-overlay").removeClass("fixed-box");
            $(".search-box-overlay").removeClass("remove-fixed-box");
        }, 800);


    });


    $("#add_cart_box").click(function () {
        $(".cart-box-overlay").addClass("fixed-box");
    });

    $("#close-window1").click(function () {
        $(".cart-box-overlay").addClass("remove-fixed-box");
        setTimeout(function () {
            $(".cart-box-overlay").removeClass("fixed-box");
            $(".cart-box-overlay").removeClass("remove-fixed-box");
        }, 800);


    });

    /*Menu Onclick*/
    let sideMenuToggle = $("#sidemenu_toggle");
    let sideMenu = $(".side-menu");
    if (sideMenuToggle.length) {
        sideMenuToggle.on("click", function () {
            $("body").addClass("overflow-hidden");
            sideMenu.addClass("side-menu-active");
            $(function () {
                setTimeout(function () {
                    $("#close_side_menu").fadeIn(300);
                }, 300);
            });
        });
        $("#close_side_menu , #btn_sideNavClose , .side-nav .nav-link.pagescroll").on("click", function () {
            $("body").removeClass("overflow-hidden");
            sideMenu.removeClass("side-menu-active");
            $("#close_side_menu").fadeOut(200);
            $(() => {
                setTimeout(() => {
                    $('.sideNavPages').removeClass('show');
                    $('.fas').removeClass('rotate-180');
                }, 400);
            });
        });
        $(document).keyup(e => {
            if (e.keyCode === 27) { // escape key maps to keycode `27`
                if (sideMenu.hasClass("side-menu-active")) {
                    $("body").removeClass("overflow-hidden");
                    sideMenu.removeClass("side-menu-active");
                    $("#close_side_menu").fadeOut(200);
                    $tooltip.tooltipster('close');
                    $(() => {
                        setTimeout(() => {
                            $('.sideNavPages').removeClass('show');
                            $('.fas').removeClass('rotate-180');
                        }, 400);
                    });
                }
            }
        });
    }



    $('.testimonial').owlCarousel({
        loop: true,
        margin: 20,
        slideSpeed: 1000,
        nav: false,
        dots: false,
        autoplay: false,
        autoplayTimeout: 1500,
        autoplayHoverPause: false,
        animateOut: 'slideOutLeft',
        animateIn: 'slideInRight',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            },
        }
    });



    var $carousel = $('.slider');

    var settings = {
        dots: false,
        arrows: false,
        slide: '.slick-slideshow__slide',
        slidesToShow: 2,
        centerMode: true,
        centerPadding: '80px',
        autoplay: false,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1024, // iPad
                settings: {
                    slidesToShow: 2,
                    centerPadding: '40px'
                }
            },
            {
                breakpoint: 768, // Mobile
                settings: {
                    slidesToShow: 1,
                    centerPadding: '20px'
                }
            }
        ]
    };
    
    function setSlideVisibility() {
        
        var visibleSlides = $carousel.find('.slick-slideshow__slide[aria-hidden="false"]');
      
        $(visibleSlides).each(function () {
            $(this).css('opacity', 1);
        });

        
        $(visibleSlides).first().prev().css('opacity', 0);
    }

    $carousel.slick(settings);
    $carousel.slick('slickGoTo', 1);
    setSlideVisibility();

    $carousel.on('afterChange', function () {
        setSlideVisibility();
    });









    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        var name = document.getElementById('name');
        var email = document.getElementById('email');
        var phone = document.getElementById('phone');
        var message = document.getElementById('message');
        var valid = true;
        
        // Clear previous errors
        name.classList.remove('error');
        email.classList.remove('error');
        phone.classList.remove('error');
        message.classList.remove('error');
    
        // Validate fields
        if (name.value.trim() === '') {
            name.classList.add('error');
            valid = false;
        }
        if (email.value.trim() === '') {
            email.classList.add('error');
            valid = false;
        }
        if (phone.value.trim() === '') {
            phone.classList.add('error');
            valid = false;
        }
        if (message.value.trim() === '') {
            message.classList.add('error');
            valid = false;
        }
        
        if (valid) {
            var formData = new FormData(this);
    
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'process.php', true);
            xhr.onload = function() {
                if (xhr.status === 200) {
                    document.getElementById('response').innerHTML = xhr.responseText;
                } else {
                    document.getElementById('response').innerHTML = 'An error occurred while submitting the form.';
                }
            };
            xhr.send(formData);
        } else {
            document.getElementById('response').innerHTML = 'Please fill out all required fields.';
        }
    });


   

    $(document).ready(function() {
        $(".choose-sec .row:last-child .choose-content-area").style("background-color", "green");
    });


    /* ===================================
         Lottie Animation
    ====================================== */


    document.addEventListener('DOMContentLoaded', function () {
        const servicesContentArea = document.querySelector('.services_content_area');
        const lottie = servicesContentArea.querySelector('.lottie');
        const lottieHover = servicesContentArea.querySelector('.lottie_hover');
    
        servicesContentArea.addEventListener('mouseover', function () {
            lottie.style.opacity = 0;
            lottieHover.style.opacity = 1;
        });
    
        servicesContentArea.addEventListener('mouseout', function () {
            lottie.style.opacity = 1;
            lottieHover.style.opacity = 0;
        });
    });
    




    /* ===================================
         Counter
    ====================================== */
    $('.count').each(function () {
        $(this).appear(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 5000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });




});