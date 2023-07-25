const header = document.querySelector(".header");
const mobileMenu = document.querySelector(".menu-icon");
const closeMenu = document.querySelector(".close-icon");
const navLink = document.querySelectorAll(".nav-link");
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
