var myModal = new bootstrap.Modal(document.getElementById('prof'), options);

$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 25,
    nav: true,
    items: 4,
    autoplayHoverPause: true,
    dots: true,
    navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
    rtl: true,
    localStorage: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        992: {
            items: 3,
        },
        1200: {
            items: 4,
        }
    }
});
var myCarousel = document.querySelector('#carouselExampleControls')
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 1000,
    wrap: true,
    touch: true,

})