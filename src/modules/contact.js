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

function createDiv(id) {
  const div = document.createElement('div');
  div.setAttribute('id', id);
  return div;
}

function createMapSection(src) {
  const placeholder = document.createElement('p');
  placeholder.classList.add('map-placeholder');

  const iframe = document.createElement('iframe');
  iframe.setAttribute('src', src);
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('loading', 'lazy');
  iframe.setAttribute('reffererpolicy', 'no-referrer-when-downgrade');

  iframe.classList.add('map-frame');
  placeholder.appendChild(iframe);

  return placeholder;
}

function createInfoSection(name, data) {
  const section = document.createElement('section');
  section.classList.add('contact-section');

  const title = document.createElement('h2');
  title.classList.add('contact-section__title');
  title.innerText = name;
  section.appendChild(title);

  data.forEach((d) => {
    const description = document.createElement('p');
    description.classList.add('contact-section__description');
    description.innerText = d;
    section.appendChild(description);
  });

  return section;
}

function loadContact() {
  const content = document.getElementById('tab-content');
  content.classList.add('contact-layout');
  content.classList.remove('home-layout');
  content.classList.remove('menu-layout');

  content.textContent = '';
  setTabActive('contact');

  const mapDiv = createDiv('map-contact');
  const infoDiv = createDiv('info-contact');

  const mapSection = createMapSection('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4332.162107020529!2d121.07727543463814!3d14.683286446923052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b0aa3c4dd971%3A0x8dcc94a57f3c6c6e!2s19-c%20Holy%20Spirit%20Drive%20Corner%20Don%20Faustino%20Drive%2C%20Quezon%20City%2C%201127%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1682307069341!5m2!1sen!2sph');
  mapDiv.appendChild(mapSection)


  const locationSection = createInfoSection('Location', [
    '● 19-c Holy Spirit Drive Corner Don Faustino Drive',
    'Quezon City, 1127 Metro Manila'
  ]);

  const hoursSection = createInfoSection('Hours', [
    '● Mon - Thu, 8 am - 10 pm',
    '● Fri - Sun, 8 am - 11 pm'
  ]);

  const contactSection = createInfoSection('Contact', [
    '● +63 951 692 3678',
    '● (512) 555-0110',
    '● SpiceAvenue@gmail.com'
  ]);

  infoDiv.appendChild(locationSection);
  infoDiv.appendChild(hoursSection);
  infoDiv.appendChild(contactSection);

  content.appendChild(mapDiv);
  content.appendChild(infoDiv);

  handlePageTransition();
}

export default loadContact;