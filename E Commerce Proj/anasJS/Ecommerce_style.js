/* Second point slider  */

$('.carousel').carousel({
    interval: 1000,
    pause: "hover"
});

/*  carousel For Arrivalls */
$("#slider").slider();


/*  Work Top Sales and Categories */
var triggerTabList = [].slice.call(document.querySelectorAll('#pills-tab a'))
triggerTabList.forEach(function(triggerEl) {
    var tabTrigger = new bootstrap.Tab(triggerEl)

    triggerEl.addEventListener('click', function(event) {
        event.preventDefault()
        tabTrigger.show()
    })
})


/* Chart Bisc code  */
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'polarArea',

    // The data for our dataset
    data: {
        labels: ['   laptops', 'Clothes', 'Electronics', 'Another Prod'],

        datasets: [{
            label: 'My First dataset for 3 month ago ',
            backgroundColor: [
                "#3e95cd",
                "#8e5ea2",
                "#3cba9f",
                "#e8c3b9",
                "#c45850"
            ],
            data: [15, 4, 20, 13.5],
            labels: ["sd", "sdj", "sjd", "as"]
        }]

    },

    // Configuration options go here
    options: {
        scales: {
            yAxes: [{
                stacked: true
            }]
        }
    }
});


/*  OWL Carousel for best_offers*/
$('.owl_offers').owlCarousel({
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    nav: true,
    ltr: true,
    stagePadding: 40,
    smartSpeed: 550,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})


/*  Carousel Js for   Category1 */

$('.owl-fashion').owlCarousel({
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    nav: true,
    rtl: true,
    stagePadding: 40,
    smartSpeed: 550,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})