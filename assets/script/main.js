const swiper = new Swiper('.voice__swiper', {
            loop: true,
            centeredSlides: true,
            slidesPerView: 1,
            spaceBetween: 20,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            autoplay: {
                delay: 10000,        // 3秒ごとに自動スライド
                disableOnInteraction: false, // ユーザー操作後も自動再生続行
            },
            breakpoints: {
                768: { slidesPerView: 1, spaceBetween: 24 },
                1024: { slidesPerView: 1, spaceBetween: 28 }
            }
        });