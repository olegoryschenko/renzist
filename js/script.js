const burger = document.querySelector('.menu-icon');
const menu = document.querySelector('.header__menu');
const menuBack = document.querySelector('.menu__overfloy');
const body = document.body;


burger.addEventListener('click', () => {
    menu.classList.toggle('_active')
    body.classList.toggle('_lock')
    menuBack.classList.toggle('_active')
    burger.classList.toggle('_active')
}) 

menuBack.addEventListener('click', () => {
    menu.classList.remove('_active')
    menuBack.classList.remove('_active')
    body.classList.remove('_lock');
    burger.classList.remove('_active')

});

const popularSwiper = new Swiper('.popular-slider', {
    spaceBetween: 20,
    slidesPerView: 1,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      992: {
      slidesPerView: 3,
      },
      660: {
        slidesPerView: 2,

        }
    },
    // Navigation arrows
    navigation: {
      nextEl: '.popular-slider-next',
      prevEl: '.popular-slider-prev',
    },
  });

  const reviewsSwiper = new Swiper('.slider-reviews', {
    slidesPerView: 1,
    autoHeight: true,
    navigation: {
      nextEl: '.slider-reviews-next',
      prevEl: '.slider-reviews-prev',
    },
  });


  const galleryItems = document.querySelectorAll('.gallery__item');

  if (galleryItems.length > 0) {
    galleryItems.forEach(item => {
      new Swiper(item, {
        slidesPerView: 1,
        autoplay: {
          delay:  5000,
        },
        effect: 'fade',
      })
    })
  }


  const swiperArrow = document.querySelector('.swiper__arrow');
  const swiperImg = document.querySelectorAll('.popular-slide__thumb');
  const timeout = 2500;

  window.addEventListener('scroll', function() {
    if(this.window.pageYOffset >= 600) {
      setTimeout(() => {
        swiperArrow.classList.add('active');
        swiperImg.forEach(item => {
          item.classList.remove('active')
        });
      }, timeout);
    }
  })

  const header = document.querySelector('.header');
  window.addEventListener('scroll', function() {
    if(this.window.pageYOffset > 150) {
      header.classList.add('active')
    } else if (this.window.pageYOffset <= 100) {
      header.classList.remove('active');
    }
  });

  AOS.init();
