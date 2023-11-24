let toggleBtn = document.querySelector(".dark-mode");
let moonBtn = document.querySelector(".dark-mode i");
let body = document.querySelector("body");
let darkMode = false;
let YouTube = document.querySelector(".logo-img img");
let moon = document.querySelector(".dark-mode .fa-moon");
let sun = document.querySelector(".dark-mode .fa-sun");

toggleBtn.addEventListener("click", () => {
  darkMode = !darkMode;
  if (darkMode) {
    body.classList.add("dark");
    YouTube.src = "./images/YouTubeWhite.svg";
    moon.style.display = "none";
    sun.style.display = "block";
  } else {
    body.classList.remove("dark");
    YouTube.src = "./images/YouTube.svg";
    moon.style.display = "block";
    sun.style.display = "none";
  }
});
