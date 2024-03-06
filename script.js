function hideSidebar() {
  const sideBar = document.querySelector(".sidebar");
  if (sideBar.style.display == "block") {
      sideBar.style.display = "none";
  } else {
      sideBar.style.display = "block";
  }
}

document.addEventListener("click", hideSidebar);
