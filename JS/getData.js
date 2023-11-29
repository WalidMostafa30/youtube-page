// #################### get Data code #####################
let videoContainer = document.querySelector(".videos-container");
let homeContainer = document.querySelector(".home-container");
let youContainer = document.querySelector(".you-container");
let subContainer = document.querySelector(".Subscription-container");
let miniSideBar = document.querySelector(".mini-side-bar");
let nav = document.querySelector("nav ul");
function getData() {
  data.video.map((e) => {
    if (e.title === "" || e.title == null) {
      e.title = "This video has no title";
    }
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
                    ${
                      e.title.length > 80
                        ? e.title.slice(0, 80) + "..."
                        : e.title
                    }
                    </h3>
                  <span class="channel-name">
                  ${e.channelName} <i class="fa-solid fa-circle-check"></i>
                  </span>
                  <p class="date-views">${e.publishDate} ago . ${
      e.views
    } views</p>
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
}
getData();