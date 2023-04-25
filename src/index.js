import loadPage from "./modules/initial-page-load";
import loadHome from "./modules/home";
import loadMenu from "./modules/menu";
import loadContact from "./modules/contact";

init();

function addNavEvents() {
  const homeTab = document.getElementById('home');
  const menuTab = document.getElementById('menu');
  const contactTab = document.getElementById('contact');

  homeTab.addEventListener('click', loadHome);
  menuTab.addEventListener('click', loadMenu);
  contactTab.addEventListener('click', loadContact);
}

function init() {
  loadPage();
  loadHome();
  addNavEvents();
}

console.log(130);