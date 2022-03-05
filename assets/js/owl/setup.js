$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoWidth: true,
    mouseDrag: false,
    navText:["<button role='button' class='controls nav-btn prev-slide'><i class='fa-solid fa-angle-left'></i></button>","<button role='button' class='controls nav-btn next-slide'><i class='fa-solid fa-angle-right'></i></button>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})