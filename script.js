function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function redirect() {
  const url = "./assets/anand-barnwal.pdf";
  window.open(url);
}

function MovixG() {
  window.open("https://github.com/anny143/Movix", "_blank");
}

function MovixL() {
  window.open("https://movix-omega-one.vercel.app/", "_blank");
}
function TodoG() {
  window.open("https://github.com/anny143/todo-list", "_blank");
}
function TodoL() {
  window.open("https://todo-list-roan-phi.vercel.app/", "_blank");
}
