$("#zu-carousel").owlCarousel({
    margin: 0,
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    slideTransition: 'linear',
    autoplayTimeout: 0,
    autoplaySpeed: 3000,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 2
        },
        480: {
            items: 3
        },
        600: {
            items: 4
        },
        1000: {
            items: 5
        },
        1200: {
            items: 6
        }
    }
});