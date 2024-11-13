document.addEventListener("DOMContentLoaded", () => {
  const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // Обробник події для бургер-меню
    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');

      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;
        }
      });
      burger.classList.toggle('toggle');
    });
  };

  navSlide();
});

// Скрипт для приховування/показування navbar під час прокрутки
let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function() {
  const scrollTop = document.documentElement.scrollTop;
  
  // Якщо прокрутка вниз — ховаємо navbar, якщо вгору — показуємо
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-87px";
  } else {
    navbar.style.top = "0";
  }

  lastScrollTop = scrollTop;
});

// Ініціалізація Swiper для слайдера
new Swiper('.swiper', {
  loop: true,
  spaceBetween: 30,
  
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    1260: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});
