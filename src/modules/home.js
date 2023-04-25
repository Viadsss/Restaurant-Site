function handlePageTransition() {
  const content = document.getElementById('content');

  content.classList.add('animate');
  if (content.classList.contains('animate')) {
    content.addEventListener('animationend', () => {
      content.classList.remove('animate');
    });
  }
}

function setTabActive(id) {
  const activeTab = document.querySelector('.tab.active');
  if (activeTab) activeTab.classList.remove('active');

  const homeTab = document.getElementById(id);
  homeTab.classList.add('active');
}

function createIntroSection() {
  const intro = document.createElement('section');
  intro.classList.add('home-section__intro');


  const title = document.createElement('h1');
  title.classList.add('home-section__title');
  title.innerText = 'Spice Avenue';

  intro.appendChild(title);

  const description = document.createElement('p');
  description.classList.add('home-section__description');
  description.innerText = 'Welcome to Spice Avenue, where flavor and spice are always on the menu! Our fine-dining restaurant promises to take you on a culinary journey like no other, with dishes that are not only delicious but also visually stunning.'

  intro.appendChild(description);
  return intro;
}

function createImageSection() {
  const frame = document.createElement('section');
  frame.classList.add('home-section__img');

  
  const img = document.createElement('img');
  img.src = 'imgs/dishes/Chicken-Salad.png';
  img.alt = 'Chef';
  img.classList.add('img-banner');

  frame.appendChild(img);
  return frame;
}



function loadHome() {
  const content = document.getElementById('tab-content');
  content.classList.add('home-layout');
  content.classList.remove('menu-layout');
  content.classList.remove('contact-layout');

  content.textContent = '';
  setTabActive('home');
  
  const introSection = createIntroSection();
  const imageSection = createImageSection();

  content.appendChild(introSection);
  content.appendChild(imageSection);
  
  handlePageTransition();
}

export default loadHome;