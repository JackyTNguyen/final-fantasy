$(document).ready(function(){
    const swiper = new Swiper('.swiper-container-projects', {
        direction: 'horizontal',
        spaceBetween: 50,
        slidesPerView: 2,
        breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 1.5,
              spaceBetween: 30
            },
            1280: {
              slidesPerView: 2,
              spaceBetween: 40
            }
          },
        grabCursor: true,
        freeMode: true,
        mousewheel: {
            invert: false,
            sensitivity: 0.5,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },
    });
});