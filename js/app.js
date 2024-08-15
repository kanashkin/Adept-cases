function blogSwiper() {
    const swiperEl = document.querySelector('.blog-swiper')
    
    if (swiperEl) {
        new Swiper(swiperEl, {
            spaceBetween: 20,
			slidesPerView: 'auto',
			loop: true,
            speed: 700,
			navigation: {
				prevEl: '.blog-swiper-prev',
		        nextEl: '.blog-swiper-next',
			},
			breakpoints: {
				1440: {
					spaceBetween: 40,
				},
				1600: {},
			},
        })
    }
}

function clientsSwiper() {
    const swiperEl = document.querySelector('.clients-swiper')

    if (swiperEl) {
        new Swiper(swiperEl, {
            slidesPerView: 4,
            slidesPerGroup: 1,
            speed: 700,
            loop: true,
            navigation: {
                prevEl: '.clients-swiper-prev',
                nextEl: '.clients-swiper-next',
            },
            breakpoints: {
                1340: {
                    slidesPerView: 6,
                },
            },
        })
    }
}

function animations() {
    const targetElems = document.querySelectorAll('.animation-el')

    if (targetElems.length) {
        targetElems.forEach(function(el) {
            window.addEventListener('scroll', function() {
                if (el.getBoundingClientRect().top < window.innerHeight / 2) {
                    el.classList.add('active')
                }
            })
        })
    }
}

window.addEventListener('DOMContentLoaded', function() {
    blogSwiper()
    clientsSwiper()
    animations()
})