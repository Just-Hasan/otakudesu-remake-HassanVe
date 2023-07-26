const header = document.querySelector(".header");
const mobileMenu = document.querySelector(".menu-icon");
const closeMenu = document.querySelector(".close-icon");
const navLink = document.querySelectorAll(".nav-link");

// Selected for carousel
const movieImage = document.getElementById("movieImage");
const previousButton = document.querySelector(".previousBtn");
const nextButton = document.querySelector(".nextBtn");
const movieContainer = document.querySelector(".anime-movies-img");
//

previousButton.addEventListener("click", () => {
  console.log("You click the previous button");
});

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

//////////////////////
// Making the carousel

// Define an array of image sources and their corresponding anime info

const images = [
  {
    src: "Images/Compressed/suzume_1.webp",
    name: "Suzume no Tojimori",
    score: "Score: 8.8",
  },
  {
    src: "Images/Compressed/tenki no ko.webp",
    name: "Tenki no Ko",
    score: "Score: 8.5",
  },
  {
    src: "Images/Compressed/kimi no Nawa.webp",
    name: "Kimi no Nawa",
    score: "Score: 9.5",
  },
];

let currentIndex = 0;

// Function to update the movie image and anime info
const updateMovieInfo = function () {
  movieImage.src = images[currentIndex].src;
  document.querySelector(".recommended-anime-name").textContent =
    images[currentIndex].name;
  document.querySelector(".recommended-anime-score").textContent =
    images[currentIndex].score;
};

// Function to handle next button click
const nextImage = function () {
  currentIndex = (currentIndex + 1) % images.length;
  updateMovieInfo();
};

// Function to handle previous button click
const previousImage = function () {
  currentIndex = (currentIndex - 1) % images.length;
  updateMovieInfo();
};

// Event listeners for button click
nextButton.addEventListener("click", nextImage);
previousButton.addEventListener("click", previousImage);

setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  updateMovieInfo();
}, 3000);
