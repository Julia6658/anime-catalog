const slider = () => {

    const swiper = new Swiper('.swiper', {
        effect: "fade",
        speed: 1000,
    
        // If we need pagination
        pagination: {
        el: '.swiper-pagination',
        },
    
        // Navigation arrows
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    });
}

slider();