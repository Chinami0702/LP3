new Swiper(".voice__swiper", {
  loop: false,
  allowTouchMove: true,

  centeredSlides: true,
  initialSlide: 1,

  slidesPerView: 1.4,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  autoplay: {
    delay: 1000000,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      allowTouchMove: false,
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: false,
    },
  },
});
