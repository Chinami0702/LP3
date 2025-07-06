new Swiper(".voice__swiper", {
    loop: false,
    allowTouchMove: true,

    centeredSlides: true,
    initialSlide: 1,

    slidesPerView: 1.3,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    breakpoints: {
        768: {
            allowTouchMove: false,
            slidesPerView: 3,
            spaceBetween: 10,
            pagination: false,
        },
    },
});
