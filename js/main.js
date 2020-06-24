$(window).on('load', function () {
    $('.pre-loader').fadeOut("500", function () {
        $(this).remove();
        $("body").removeClass("overflow");
    });
});
$(document).ready(function () {
    new WOW().init();
    /////////Main Slider/////////
    $('.main-slider').owlCarousel({
        items: 1,
        margin: 30,
        autoplay: true,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        dots: true,
        nav: true,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
    });
    /////////products Slider/////////
    $('.products-slider').owlCarousel({
        margin: 30,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        dots: true,
        nav: true,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
        responsive: {
            0: {
                margin: 5,
                items: 2,
            },
            768: {
                items: 2,
                margin: 30,
            },
            991: {
                items: 4,
                margin: 5,
            },
            1200: {
                items: 4
            }
        }
    });
    /////////lg search/////////
    $('.mo-search-icon').click(function () {
        $(".search-form").slideToggle(300);
        $(this).toggleClass("active");
    });
    ///////////////menu/////////////////////

    $('.mo-menu-icon').click(function () {
        $("nav").fadeIn(300);
        $(".mo-navbar-cont").addClass("nav-in");
        $("body").addClass("overflow");
    });

    $('nav').click(function () {
        $("nav").fadeOut(400);
        $(".mo-navbar-cont").removeClass("nav-in");
        $("body").removeClass("overflow");
    });
    $('.mo-navbar-cont').click(function (e) {
        e.stopPropagation();
    });

    $('.mo-close-icon').click(function () {
        $("nav").fadeOut(400);
        $(".mo-navbar-cont").removeClass("nav-in");
        $("body").removeClass("overflow");
    });
});

