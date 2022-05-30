const isTabletOrMobile = window.matchMedia("(max-width: 768px)");
const navButton = document.getElementById("navButton");
const header = document.getElementById("header");
let navOn = false;
const navBarToggle = () => {
  if (isTabletOrMobile.matches) {
    if (!navOn) {
      navButton.innerHTML = "close";
      header.style.top = "0";
      navOn = true;
    } else {
      navButton.innerHTML = "menu";
      header.style.top = "-50vh";
      navOn = false;
    }
  } else {
    if (!navOn) {
      navButton.innerHTML = "close";
      header.style.left = "-90vw";
      navOn = true;
    } else {
      navButton.innerHTML = "menu";
      header.style.left = "0";
      navOn = false;
    }
  }
};
navButton.addEventListener("click", navBarToggle);
