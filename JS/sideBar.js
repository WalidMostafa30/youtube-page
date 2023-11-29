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