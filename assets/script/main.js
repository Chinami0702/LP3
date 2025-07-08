/*お客様の声*/
new Swiper(".voice__swiper", {
    loop: false,
    allowTouchMove: true,

    centeredSlides: true,
    initialSlide: 1,

    slidesPerView: 1.225,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    autoplay: {
        delay: 600000,
        disableOnInteraction: false,
    },
    breakpoints: {
        768: {
            allowTouchMove: false,
            slidesPerView: 3,
            spaceBetween: 10,
            pagination: false,
            autoplay:false,
        },
    },
});
