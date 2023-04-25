/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_initial_page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/initial-page-load */ \"./src/modules/initial-page-load.js\");\n/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/contact */ \"./src/modules/contact.js\");\n\r\n\r\n\r\n\r\n\r\ninit();\r\n\r\nfunction addNavEvents() {\r\n  const homeTab = document.getElementById('home');\r\n  const menuTab = document.getElementById('menu');\r\n  const contactTab = document.getElementById('contact');\r\n\r\n  homeTab.addEventListener('click', _modules_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n  menuTab.addEventListener('click', _modules_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n  contactTab.addEventListener('click', _modules_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\r\n}\r\n\r\nfunction init() {\r\n  (0,_modules_initial_page_load__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  (0,_modules_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  addNavEvents();\r\n}\r\n\r\nconsole.log(130);\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction handlePageTransition() {\r\n  const content = document.getElementById('content');\r\n\r\n  content.classList.add('animate');\r\n  if (content.classList.contains('animate')) {\r\n    content.addEventListener('animationend', () => {\r\n      content.classList.remove('animate');\r\n    });\r\n  }\r\n}\r\n\r\nfunction setTabActive(id) {\r\n  const activeTab = document.querySelector('.tab.active');\r\n  if (activeTab) activeTab.classList.remove('active');\r\n\r\n  const homeTab = document.getElementById(id);\r\n  homeTab.classList.add('active');\r\n}\r\n\r\nfunction createDiv(id) {\r\n  const div = document.createElement('div');\r\n  div.setAttribute('id', id);\r\n  return div;\r\n}\r\n\r\nfunction createMapSection(src) {\r\n  const placeholder = document.createElement('p');\r\n  placeholder.classList.add('map-placeholder');\r\n\r\n  const iframe = document.createElement('iframe');\r\n  iframe.setAttribute('src', src);\r\n  iframe.setAttribute('allowfullscreen', '');\r\n  iframe.setAttribute('loading', 'lazy');\r\n  iframe.setAttribute('reffererpolicy', 'no-referrer-when-downgrade');\r\n\r\n  iframe.classList.add('map-frame');\r\n  placeholder.appendChild(iframe);\r\n\r\n  return placeholder;\r\n}\r\n\r\nfunction createInfoSection(name, data) {\r\n  const section = document.createElement('section');\r\n  section.classList.add('contact-section');\r\n\r\n  const title = document.createElement('h2');\r\n  title.classList.add('contact-section__title');\r\n  title.innerText = name;\r\n  section.appendChild(title);\r\n\r\n  data.forEach((d) => {\r\n    const description = document.createElement('p');\r\n    description.classList.add('contact-section__description');\r\n    description.innerText = d;\r\n    section.appendChild(description);\r\n  });\r\n\r\n  return section;\r\n}\r\n\r\nfunction loadContact() {\r\n  const content = document.getElementById('tab-content');\r\n  content.classList.add('contact-layout');\r\n  content.classList.remove('home-layout');\r\n  content.classList.remove('menu-layout');\r\n\r\n  content.textContent = '';\r\n  setTabActive('contact');\r\n\r\n  const mapDiv = createDiv('map-contact');\r\n  const infoDiv = createDiv('info-contact');\r\n\r\n  const mapSection = createMapSection('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4332.162107020529!2d121.07727543463814!3d14.683286446923052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b0aa3c4dd971%3A0x8dcc94a57f3c6c6e!2s19-c%20Holy%20Spirit%20Drive%20Corner%20Don%20Faustino%20Drive%2C%20Quezon%20City%2C%201127%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1682307069341!5m2!1sen!2sph');\r\n  mapDiv.appendChild(mapSection)\r\n\r\n\r\n  const locationSection = createInfoSection('Location', [\r\n    '● 19-c Holy Spirit Drive Corner Don Faustino Drive',\r\n    'Quezon City, 1127 Metro Manila'\r\n  ]);\r\n\r\n  const hoursSection = createInfoSection('Hours', [\r\n    '● Mon - Thu, 8 am - 10 pm',\r\n    '● Fri - Sun, 8 am - 11 pm'\r\n  ]);\r\n\r\n  const contactSection = createInfoSection('Contact', [\r\n    '● +63 951 692 3678',\r\n    '● (512) 555-0110',\r\n    '● SpiceAvenue@gmail.com'\r\n  ]);\r\n\r\n  infoDiv.appendChild(locationSection);\r\n  infoDiv.appendChild(hoursSection);\r\n  infoDiv.appendChild(contactSection);\r\n\r\n  content.appendChild(mapDiv);\r\n  content.appendChild(infoDiv);\r\n\r\n  handlePageTransition();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction handlePageTransition() {\r\n  const content = document.getElementById('content');\r\n\r\n  content.classList.add('animate');\r\n  if (content.classList.contains('animate')) {\r\n    content.addEventListener('animationend', () => {\r\n      content.classList.remove('animate');\r\n    });\r\n  }\r\n}\r\n\r\nfunction setTabActive(id) {\r\n  const activeTab = document.querySelector('.tab.active');\r\n  if (activeTab) activeTab.classList.remove('active');\r\n\r\n  const homeTab = document.getElementById(id);\r\n  homeTab.classList.add('active');\r\n}\r\n\r\nfunction createIntroSection() {\r\n  const intro = document.createElement('section');\r\n  intro.classList.add('home-section__intro');\r\n\r\n\r\n  const title = document.createElement('h1');\r\n  title.classList.add('home-section__title');\r\n  title.innerText = 'Spice Avenue';\r\n\r\n  intro.appendChild(title);\r\n\r\n  const description = document.createElement('p');\r\n  description.classList.add('home-section__description');\r\n  description.innerText = 'Welcome to Spice Avenue, where flavor and spice are always on the menu! Our fine-dining restaurant promises to take you on a culinary journey like no other, with dishes that are not only delicious but also visually stunning.'\r\n\r\n  intro.appendChild(description);\r\n  return intro;\r\n}\r\n\r\nfunction createImageSection() {\r\n  const frame = document.createElement('section');\r\n  frame.classList.add('home-section__img');\r\n\r\n  \r\n  const img = document.createElement('img');\r\n  img.src = '../src/assets/man-chef.png';\r\n  img.alt = 'Chef';\r\n  img.classList.add('img-banner');\r\n\r\n  frame.appendChild(img);\r\n  return frame;\r\n}\r\n\r\n\r\n\r\nfunction loadHome() {\r\n  const content = document.getElementById('tab-content');\r\n  content.classList.add('home-layout');\r\n  content.classList.remove('menu-layout');\r\n  content.classList.remove('contact-layout');\r\n\r\n  content.textContent = '';\r\n  setTabActive('home');\r\n  \r\n  const introSection = createIntroSection();\r\n  const imageSection = createImageSection();\r\n\r\n  content.appendChild(introSection);\r\n  content.appendChild(imageSection);\r\n  \r\n  handlePageTransition();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/initial-page-load.js":
/*!******************************************!*\
  !*** ./src/modules/initial-page-load.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHeader(id) {\r\n  const header = document.createElement('header');\r\n  header.setAttribute('id', id);\r\n  return header;\r\n}\r\n\r\nfunction createDiv(id, text) {\r\n  const div = document.createElement('div');\r\n  div.setAttribute('id', id);\r\n  div.innerText = text;\r\n  div.classList.add('tab');\r\n  return div;\r\n}\r\n\r\nfunction createNav(id) {\r\n  const nav = document.createElement('nav');\r\n  nav.setAttribute('id', id);\r\n\r\n  const homeTab = createDiv('home', 'Home');\r\n  const menuTab = createDiv('menu', 'Menu');\r\n  const contactTab = createDiv('contact', 'Contact');\r\n  \r\n  nav.appendChild(homeTab);\r\n  nav.appendChild(menuTab);\r\n  nav.appendChild(contactTab);\r\n  \r\n  return nav;\r\n}\r\n\r\nfunction createMain(id) {\r\n  const main = document.createElement('main');\r\n  main.setAttribute('id', id);\r\n  return main;\r\n}\r\n\r\nfunction createFooter(id, text) {\r\n  const footer = document.createElement('footer');\r\n  footer.setAttribute('id', id);\r\n\r\n  const h3 = document.createElement('h3');\r\n  h3.innerText = text;\r\n\r\n  const logo = document.createElement('a');\r\n  logo.href = 'https://github.com/Viadsss';\r\n  \r\n  const icon = document.createElement('img');\r\n  icon.src = '../src/assets/github.svg';\r\n  icon.width = '24';\r\n  logo.appendChild(icon);\r\n\r\n  footer.appendChild(logo);\r\n  footer.appendChild(h3);\r\n  return footer;\r\n}\r\n\r\nfunction loadPage() {\r\n  const content = document.getElementById('content');\r\n\r\n  const header = createHeader('header');\r\n  content.appendChild(header);\r\n\r\n  const nav = createNav('nav');\r\n  header.appendChild(nav);\r\n\r\n  const tabContent = createMain('tab-content');\r\n  content.appendChild(tabContent);\r\n\r\n  const footer = createFooter('footer', 'Created by John Paul Viado');\r\n  content.appendChild(footer);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/initial-page-load.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction handlePageTransition() {\r\n  const content = document.getElementById('content');\r\n\r\n  content.classList.add('animate');\r\n  if (content.classList.contains('animate')) {\r\n    content.addEventListener('animationend', () => {\r\n      content.classList.remove('animate');\r\n    });\r\n  }\r\n}\r\n\r\nfunction setTabActive(id) {\r\n  const activeTab = document.querySelector('.tab.active');\r\n  if (activeTab) activeTab.classList.remove('active');\r\n\r\n  const homeTab = document.getElementById(id);\r\n  homeTab.classList.add('active');\r\n}\r\n\r\nfunction createFood(text, price, calories, alt, src) {\r\n  const food = document.createElement('div');\r\n  food.classList.add('food');\r\n\r\n  const img = document.createElement('img');\r\n  img.setAttribute('src', src);\r\n  img.setAttribute('alt', alt);\r\n\r\n  const description = document.createElement('div');\r\n  description.classList.add('food-description');\r\n\r\n  const foodName = document.createElement('h2');\r\n  foodName.classList.add('food-name');\r\n  foodName.innerText = text;\r\n  \r\n  const foodPrice = document.createElement('div');\r\n  foodPrice.classList.add('food-price');\r\n  foodPrice.innerText = price;\r\n\r\n  const foodCalories = document.createElement('div');\r\n  foodCalories.classList.add('food-calories');\r\n  foodCalories.innerText = calories;\r\n\r\n  description.appendChild(foodName);\r\n  description.appendChild(foodPrice);\r\n  description.appendChild(foodCalories);\r\n\r\n  food.appendChild(img);\r\n  food.appendChild(description);\r\n\r\n  return food;\r\n}\r\n\r\nfunction loadMenu() {\r\n  const content = document.getElementById('tab-content');\r\n  content.classList.add('menu-layout');\r\n  content.classList.remove('home-layout');\r\n  content.classList.remove('contact-layout');\r\n\r\n  content.textContent = '';\r\n  setTabActive('menu');\r\n\r\n  const foods = [\r\n    createFood(\r\n      'Steak with Potato',\r\n      '$9.50',\r\n      '700 Calories',\r\n      'Steak with Potato',\r\n      'https://i.ibb.co/3W5FyXT/Steak-with-Potato.png'\r\n    ),\r\n    createFood(\r\n      'Chicken Salad',\r\n      '$6.00',\r\n      '400 Calories',\r\n      'Chicken Salad',\r\n      '../src/assets/dishes/Chicken-Salad.png'\r\n    ),\r\n    createFood(\r\n      'Salmon-Fennel Salad',\r\n      '$7.00',\r\n      '350 Calories',\r\n      'Salmon-Fennel Salad',\r\n      '../src/assets/dishes/Salmon-Fennel-Salad.png'\r\n    ),\r\n\r\n    createFood(\r\n      'Steak with Tomato',\r\n      '$8.50',\r\n      '600 Calories',\r\n      'Steak with Tomato',\r\n      '../src/assets/dishes/Steak-with-Tomato.png'\r\n    ),\r\n\r\n    createFood(\r\n      'Chicken with Rice',\r\n      '$7.00',\r\n      '750 Calories',\r\n      'Chicken with Rice',\r\n      '../src/assets/dishes/Chicken-with-Rice.png'\r\n    ),\r\n\r\n    createFood(\r\n      'Salmon Stack',\r\n      '$6.50',\r\n      '300 Calories',\r\n      'Salmon Stack',\r\n      '../src/assets/dishes/Salmon-Stack.png'\r\n    ),\r\n    \r\n    createFood(\r\n      'Raw Salmon Salad',\r\n      '$6.00',\r\n      '350 Calories',\r\n      'Raw Salmon Salad',\r\n      '../src/assets/dishes/Raw-Salmon-Salad.png'\r\n    ),\r\n\r\n    createFood(\r\n      'Classic Salmon Salad',\r\n      '$7.50',\r\n      '400 Calories',\r\n      'Classic Salmon Salad',\r\n      '../src/assets/dishes/Classic-Salmon-Salad.png'\r\n    )\r\n  ];\r\n\r\n  foods.forEach((food) => {\r\n    content.appendChild(food)\r\n  });\r\n\r\n  handlePageTransition();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;