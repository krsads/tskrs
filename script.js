
const cursor = document.querySelector(".screen");
window.addEventListener("touchsreen", function (e) {
  screen.style.left = e.x - 100 + "px";
  screen.style.top = e.y - 100 + "px";
});
