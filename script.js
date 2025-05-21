const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

// Declare Variable to Hide the mobile menu on nav link clicks
const navLinks = document.querySelectorAll(".nav-menu .nav-link");

menuOpenButton.addEventListener("click", () => {
  // Toggle mobile menu visuability
  document.body.classList.toggle("show-mobile-menu");
});

//Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

// Hide the mobile menu on nav link clicks
navLinks.forEach((link) => {
  link.addEventListener("click", () => menuOpenButton.click());
});

// Initialize Swiper
const swiper = new Swiper(".slider-wrapper", {
  // Optional parameters
  loop: true,
  spaceBetween: 25,
  grabCursor: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  //Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    760: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
