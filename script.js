const menuButton = document.querySelector(".menuButton")
const sideBar  = document.querySelector(".sidebar")
const closeMenu = document.querySelector(".closeMenu")

menuButton.addEventListener("click", (showSideBAR)=>{
  sideBar.style.display ="block"
})

closeMenu.addEventListener("click", (hideSideBar)=>{
  sideBar.style.display ="none"
})