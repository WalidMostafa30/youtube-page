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
// #################### dynamic code #####################
let videoContainer = document.querySelector(".videos-container");
let homeContainer = document.querySelector(".home-container");
let youContainer = document.querySelector(".you-container");
let subContainer = document.querySelector(".Subscription-container");
let miniSideBar = document.querySelector(".mini-side-bar");
let nav = document.querySelector("nav ul");
function getVideo() {
  fetch("../data/data.json")
    .then((res) => res.json())
    .then((data) => {
      data.video.map((e) => {
        videoContainer.innerHTML += `<div class="video-card">
              <a href="${e.src}" class="video-img">
                <img
                  src="${e.img}"
                  alt="img"
                  width="100%"
                  />
                  <span class="video-time">${e.VideoDuration}</span>
              </a>
              <a href="${e.src}" class="video-details">
              <img src="${e.channelImg}" class="channel-img"/>
              <div class="video-info">
                  <h3 class="video-title">
                    ${e.title}
                    </h3>
                  <span class="channel-name">
                  ${e.channelName} <i class="fa-solid fa-circle-check"></i>
                  </span>
                  <p class="date-views">${e.publishDate} ago . ${e.views} views</p>
                  </div>
                  </a>
                  </div>`;
      });
      data.home.map((e) => {
        homeContainer.innerHTML += `<div class="big-side-li">
                <h4>${e.title}</h4>
                <i class="${e.icon}"></i>
              </div>`;
      });
      data.you.map((e) => {
        youContainer.innerHTML += `<div class="big-side-li">
                <h4>${e.title}</h4>
                <i class="${e.icon}"></i>
              </div>`;
      });
      data.Subscriptions.map((e) => {
        subContainer.innerHTML += `<div class="big-side-li">
                <h4>${e.title}</h4>
                <i class="${e.icon}"></i>
              </div>`;
      });
      data.miniSideBar.map((e) => {
        miniSideBar.innerHTML += `<div class="mini-side-li">
            <i class="${e.icon}"></i>
            <p>${e.title}</p>
          </div>`;
      });
      data.navLi.map((e) => {
        nav.innerHTML += `<li>${e.title}</li>`;
      });
    });
}
getVideo();
// #################### toggle side bar code #####################
let bars = document.querySelector(".bars-icon");
let hiddenContainer = document.querySelector(".hidden-container");
bars.addEventListener("click", () => {
  hiddenContainer.classList.toggle("open");
});
document.addEventListener("click", (e) => {
  if (e.target === hiddenContainer) {
    hiddenContainer.classList.remove("open");
  }
});
// #################### toggle search code #####################
let back = document.querySelector(".back-icon");
let srch = document.querySelector(".srch-clone");
let searchContainer = document.querySelector(".search-container");
srch.addEventListener("click", () => {
  searchContainer.classList.add("open");
});
back.addEventListener("click", () => {
  searchContainer.classList.remove("open");
});
