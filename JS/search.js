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
