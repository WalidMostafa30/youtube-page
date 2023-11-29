// #################### dark mode code #####################
let toggleBtn = document.querySelector(".dark-mode");
let moonBtn = document.querySelector(".dark-mode i");
let body = document.querySelector("body");
let darkMode = false;
let YouTube = document.querySelector(".logo-img img");
let moon = document.querySelector(".fa-moon");
toggleBtn.addEventListener("click", () => {
  darkMode = !darkMode;
  if (darkMode) {
    body.classList.add("dark");
    YouTube.src = "./images/YouTubeWhite.svg";
  } else {
    body.classList.remove("dark");
    YouTube.src = "./images/YouTube.svg";
  }
  moon.classList.toggle("fa-moon");
  moon.classList.toggle("fa-sun");
});
