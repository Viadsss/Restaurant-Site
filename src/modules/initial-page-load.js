function createHeader(id) {
  const header = document.createElement('header');
  header.setAttribute('id', id);
  return header;
}

function createDiv(id, text) {
  const div = document.createElement('div');
  div.setAttribute('id', id);
  div.innerText = text;
  div.classList.add('tab');
  return div;
}

function createNav(id) {
  const nav = document.createElement('nav');
  nav.setAttribute('id', id);

  const homeTab = createDiv('home', 'Home');
  const menuTab = createDiv('menu', 'Menu');
  const contactTab = createDiv('contact', 'Contact');
  
  nav.appendChild(homeTab);
  nav.appendChild(menuTab);
  nav.appendChild(contactTab);
  
  return nav;
}

function createMain(id) {
  const main = document.createElement('main');
  main.setAttribute('id', id);
  return main;
}

function createFooter(id, text) {
  const footer = document.createElement('footer');
  footer.setAttribute('id', id);

  const h3 = document.createElement('h3');
  h3.innerText = text;

  const logo = document.createElement('a');
  logo.href = 'https://github.com/Viadsss';
  
  const icon = document.createElement('img');
  icon.src = 'imgs/github.svg';
  icon.width = '24';
  logo.appendChild(icon);

  footer.appendChild(logo);
  footer.appendChild(h3);
  return footer;
}

function loadPage() {
  const content = document.getElementById('content');

  const header = createHeader('header');
  content.appendChild(header);

  const nav = createNav('nav');
  header.appendChild(nav);

  const tabContent = createMain('tab-content');
  content.appendChild(tabContent);

  const footer = createFooter('footer', 'Created by John Paul Viado');
  content.appendChild(footer);
}

export default loadPage;