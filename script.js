const menuButton = document.querySelector(".menuButton");
const sideBar  = document.querySelector(".sidebar");
const closeMenu = document.querySelector(".closeMenu");
const menuLinks = document.querySelectorAll(".sidebar a[href^='#']");

menuButton.addEventListener("click", (showSideBAR) => {
  sideBar.style.display = "block"
})

closeMenu.addEventListener("click", (hideSideBar) => {
  sideBar.style.display = "none"
})

menuLinks.forEach(menuLinks => {
  menuLinks.addEventListener("click", function(){
    sideBar.style.display = "none"
  })
})







