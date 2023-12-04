var iconMenu = document.querySelector(".berger");
var menu = document.querySelector(".menu");
var iconHide = document.querySelector(".icon-hide");
iconMenu.addEventListener("click", () => {

  menu.setAttribute("style", "left:0; transition: all 1s;");
});

iconHide.addEventListener("click", () => {
  menu.removeAttribute("style");
});