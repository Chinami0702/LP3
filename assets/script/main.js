let swiperInstance = null;

function initSwiper() {
  const screenWidth = window.innerWidth;

  if (screenWidth < 768) {
    if (!swiperInstance) {
      swiperInstance = new Swiper('.voice__swiper', {
        loop: true,
        centeredSlides: true,
        slidesPerView: 1.4,
        spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
      });

      // ページネーション表示
      const pagination = document.querySelector('.swiper-pagination');
      if (pagination) {
        pagination.style.display = 'block';
      }
    }
  } else {
    if (swiperInstance) {
      swiperInstance.destroy(true, true);
      swiperInstance = null;
    }

    // 横並びに戻す
    const wrapper = document.querySelector('.voice__swiper .swiper-wrapper');
    const slides = document.querySelectorAll('.voice__swiper .swiper-slide');

    if (wrapper && slides.length > 0) {
      wrapper.style.display = 'flex';
      wrapper.style.flexWrap = 'nowrap';
      wrapper.style.gap = '20px';
      wrapper.style.transform = 'none';
      wrapper.style.transition = 'none';

      slides.forEach(slide => {
        slide.style.width = `calc((100% - 40px) / 3)`;
        slide.style.flexShrink = '0';
      });
    }

    // ページネーション非表示
    const pagination = document.querySelector('.swiper-pagination');
    if (pagination) {
      pagination.style.display = 'none';
    }
  }
}

window.addEventListener('load', initSwiper);
window.addEventListener('resize', initSwiper);