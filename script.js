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
  window.open("https://github.com/anny143/To-Do-List", "_blank");
}
function TodoL() {
  window.open("https://to-do-list-nine-puce.vercel.app/", "_blank");
}
