$(document).ready(() => {
    // Toggle the hamburger menu and navigation visibility
    $('#hamburger-menu').click(() => {
        $('#hamburger-menu').toggleClass('active')
        $('#nav-menu').toggleClass('active')
    })

    // Back to Top button functionality
    const backToTop = $('<button id="back-to-top" title="Back to top">↑</button>');
    $('body').append(backToTop);

    $(window).scroll(() => {
        if ($(window).scrollTop() > 300) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    $('#back-to-top').click(() => {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });

    // Owl Carousel Navigation Icons
    let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"];

    // Hero Carousel configuration
    $('#hero-carousel').owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: navText,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        smartSpeed: 800
    });

    // Top Movies Carousel configuration
    $('#top-movies-slide').owlCarousel({
        items: 2,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 4000,
        smartSpeed: 700,
        responsive: {
            500: {
                items: 3
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    });

    // Movies Slide Carousel configuration
    $('.movies-slide').owlCarousel({
        items: 2,
        dots: false,
        nav: true,
        navText: navText,
        margin: 15,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 3500,
        smartSpeed: 750,
        responsive: {
            500: {
                items: 2
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    });
});
