const menuButton = document.querySelector(".menuButton");
const sideBar  = document.querySelector(".sidebar");
const closeMenu = document.querySelector(".closeMenu");

const section = document.querySelector("section");
const navLincks = document.querySelector("header nav a");

menuButton.addEventListener("click", (showSideBAR) => {
  sideBar.style.display ="block"
})

closeMenu.addEventListener("click", (hideSideBar) => {
  sideBar.style.display ="none"
})






