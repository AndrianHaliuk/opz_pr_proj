const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });
  });
};

navSlide();

let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function() {
  const scrollTop = document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-87px";
  } else {
    navbar.style.top = "0";
  }

  lastScrollTop = scrollTop;
});

new Swiper('.swiper', {
  loop: true,
  spaceBetween: 30,
  
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 300
    },
    768: {
      slidesPerView: 1
    },
    1260: {
      slidesPerView: 2
    },

  },
});
