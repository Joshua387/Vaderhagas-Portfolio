const sideMenu = document.getElementById("sidemenu");
const openMenu = document.getElementById("openmenu");
const closeMenu = document.getElementById("closemenu");

openMenu.addEventListener("click", () => {
  if (sideMenu.style.right == "-200px") {
    sideMenu.style.right = "0";
  } else {
    sideMenu.style.right = "-200px";
  }
});
closeMenu.addEventListener("click", () => {
  if (sideMenu.style.right == "0") {
    sideMenu.style.right = "-200px";
  } else {
    sideMenu.style.right = "-200px";
  }
});

// Sending form to email

