const header = document.querySelector(".header");
const mobileMenu = document.querySelector(".menu-icon");
const closeMenu = document.querySelector(".close-icon");
const navLink = document.querySelectorAll(".nav-link");
const navigationBar = document.querySelector(".navigation-bar");
const allLinks = document.querySelectorAll("a:link");
const slides = document.querySelectorAll(".slide");
const previousBtn = document.querySelector(".previousBtn");
const nextBtn = document.querySelector(".nextBtn");
const movieImage = document.getElementById("movieImage");
const movieContainer = document.querySelector(".anime-movies-img");
const finishedAnimeContainer = document.querySelector(
  ".finished-anime-container"
);

/////////////////////////////////////[Event]
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

/////////////////////////////////////[Smooth scroll]
navigationBar.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.tagName !== "A") return;
  const navLinkSection = e.target.getAttribute("href");
  if (navLinkSection === "#") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else if (navLinkSection !== "#" && navLinkSection.startsWith("#")) {
    const navLinkSectionDestination = document.querySelector(navLinkSection);
    navLinkSectionDestination.scrollIntoView({ behavior: "smooth" });
  }
});

/////////////////////////////////////[Making the slider work]
let currentIndex = 0;
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

/////////////////////////////////////[Requesting API]
const request = fetch("https://api.jikan.moe/v4/top/anime");
request
  .then((response) => response.json())
  .then((animeData) => {
    const { data } = animeData;
    const sliced = data.slice(0, 10);
    console.log(sliced);
    sliced.forEach((anime) => {
      const html = `
      <figure class="anime">
      <img
        src="${anime.images.webp.image_url}"
        alt="${anime.title}"
      />
      <p class="anime-details">
        <ion-icon name="tv-outline" class="anime-icon"></ion-icon>
        <span class="anime-episodes">${anime.episodes} episodes</span>
      </p>
      <p class="anime-date">${anime.status}</p>
      <div class="anime-info">
        <p class="anime-names">
          ${anime.title}
        </p>
      </div>
    </figure>`;
      finishedAnimeContainer.insertAdjacentHTML("afterbegin", html);
    });
  });
