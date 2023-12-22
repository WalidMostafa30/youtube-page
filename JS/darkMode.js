// #################### dark mode code #####################
let toggleBtn = document.querySelector(".dark-mode");
let body = document.querySelector("body");
let theme;
let YouTube = document.querySelector(".logo-img img");
let moon = document.querySelector(".fa-moon");
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    YouTube.src = "./images/YouTubeWhite.svg";
    moon.classList.remove("fa-moon");
    moon.classList.add("fa-sun");
    theme = "dark";
  } else {
    YouTube.src = "./images/YouTube.svg";
    moon.classList.add("fa-moon");
    moon.classList.remove("fa-sun");
    theme = "light";
  }
  localStorage.setItem("page-theme", theme);
});
if (localStorage.getItem("page-theme") === "dark") {
  body.classList.add("dark");
  YouTube.src = "./images/YouTubeWhite.svg";
  moon.classList.remove("fa-moon");
  moon.classList.add("fa-sun");
}
