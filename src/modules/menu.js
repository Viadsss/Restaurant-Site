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

function createFood(text, price, calories, alt, src) {
  const food = document.createElement('div');
  food.classList.add('food');

  const img = document.createElement('img');
  img.setAttribute('src', src);
  img.setAttribute('alt', alt);

  const description = document.createElement('div');
  description.classList.add('food-description');

  const foodName = document.createElement('h2');
  foodName.classList.add('food-name');
  foodName.innerText = text;
  
  const foodPrice = document.createElement('div');
  foodPrice.classList.add('food-price');
  foodPrice.innerText = price;

  const foodCalories = document.createElement('div');
  foodCalories.classList.add('food-calories');
  foodCalories.innerText = calories;

  description.appendChild(foodName);
  description.appendChild(foodPrice);
  description.appendChild(foodCalories);

  food.appendChild(img);
  food.appendChild(description);

  return food;
}

function loadMenu() {
  const content = document.getElementById('tab-content');
  content.classList.add('menu-layout');
  content.classList.remove('home-layout');
  content.classList.remove('contact-layout');

  content.textContent = '';
  setTabActive('menu');

  const foods = [
    createFood(
      'Steak with Potato',
      '$9.50',
      '700 Calories',
      'Steak with Potato',
      '../src/assets/dishes/Steak-with-Potato.png'
    ),
    createFood(
      'Chicken Salad',
      '$6.00',
      '400 Calories',
      'Chicken Salad',
      '../src/assets/dishes/Chicken-Salad.png'
    ),
    createFood(
      'Salmon-Fennel Salad',
      '$7.00',
      '350 Calories',
      'Salmon-Fennel Salad',
      '../src/assets/dishes/Salmon-Fennel-Salad.png'
    ),

    createFood(
      'Steak with Tomato',
      '$8.50',
      '600 Calories',
      'Steak with Tomato',
      '../src/assets/dishes/Steak-with-Tomato.png'
    ),

    createFood(
      'Chicken with Rice',
      '$7.00',
      '750 Calories',
      'Chicken with Rice',
      '../src/assets/dishes/Chicken-with-Rice.png'
    ),

    createFood(
      'Salmon Stack',
      '$6.50',
      '300 Calories',
      'Salmon Stack',
      '../src/assets/dishes/Salmon-Stack.png'
    ),
    
    createFood(
      'Raw Salmon Salad',
      '$6.00',
      '350 Calories',
      'Raw Salmon Salad',
      '../src/assets/dishes/Raw-Salmon-Salad.png'
    ),

    createFood(
      'Classic Salmon Salad',
      '$7.50',
      '400 Calories',
      'Classic Salmon Salad',
      '../src/assets/dishes/Classic-Salmon-Salad.png'
    )
  ];

  foods.forEach((food) => {
    content.appendChild(food)
  });

  handlePageTransition();
}

export default loadMenu;