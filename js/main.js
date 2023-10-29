// Intersection observer for the navbar
const header = document.querySelector("header");
const section = document.querySelector(".hero-section");
const sectionOptions = {
  rootMargin: "-400px 0px 0px 0px",
};

const sectionObserver = new IntersectionObserver(function (
  entries,
  sectionObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
},
sectionOptions);

sectionObserver.observe(section);

//scroll to the top
function scrolltop() {
    window.scrollTo(0, 0);
  }

// menu responsivness
let menu = document.getElementById("menu-bar");
let navbar = document.querySelector(".nav-container");

window.onscroll = function () {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

menu.addEventListener("click", function () {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});
