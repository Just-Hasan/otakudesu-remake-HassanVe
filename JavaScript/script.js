const header = document.querySelector(".header");
const mobileMenu = document.querySelector(".menu-icon");
const closeMenu = document.querySelector(".close-icon");
const navLink = document.querySelectorAll(".nav-link");

const movieImage = document.getElementById("movieImage");
const movieContainer = document.querySelector(".anime-movies-img");
//

mobileMenu.addEventListener("click", () => {
  header.classList.add("nav-open");
});

closeMenu.addEventListener("click", () => {
  header.classList.remove("nav-open");
});
navLink.forEach((button) => {
  button.addEventListener("click", () => {
    header.classList.remove("nav-open");
  });
});

//////////////////////
// SMOOTH SCROLLING ANIMATION

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");
    console.log(href);

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    //   Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

//

let currentIndex = 0;

const slides = document.querySelectorAll(".slide");
const previousBtn = document.querySelector(".previousBtn");
const nextBtn = document.querySelector(".nextBtn");

const movingSlider = function (curIndex) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - curIndex)}%)`;
  });
};

const nextSlide = function () {
  if (currentIndex >= slides.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  movingSlider(currentIndex);
};

movingSlider(0);

nextBtn.addEventListener("click", (e) => {
  nextSlide();
});

previousBtn.addEventListener("click", () => {
  currentIndex === 0 ? (currentIndex = 0) : currentIndex--;
  movingSlider(currentIndex);
});

setInterval(function () {
  nextSlide();
}, 3000);
