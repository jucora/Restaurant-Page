const menu = () => {
  const slide = document.createElement('div');
  slide.classList.add('row', 'slide');
  slide.setAttribute('id', 'slide2');
  const div1 = document.createElement('div');
  div1.classList.add('col-lg-12');
  const h3 = document.createElement('h3');
  h3.textContent = 'The Best Tasting Experience';
  div1.appendChild(h3);
  div1.innerHTML += '<br>';
  const p1 = document.createElement('p');
  p1.textContent = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
  div1.appendChild(p1);
  div1.innerHTML += '<br>';
  const button = document.createElement('button');
  button.setAttribute('id', 'contactButton');
  button.textContent = 'Contact us!';
  div1.appendChild(button);
  slide.appendChild(div1);
  /* SECTION 2 */
  const section = document.createElement('section');
  section.classList.add('row');
  section.setAttribute('id', 'section2');
  const article1 = document.createElement('article');
  article1.classList.add('col-lg-4', 'col-md-4', 'col-sm-12');
  const title = document.createElement('h2');
  title.textContent = 'Appetizers';
  article1.appendChild(title);
  article1.innerHTML += '<br>';
  const img1 = document.createElement('img');
  img1.setAttribute('src', '../src/images/appetizers.jpeg');
  img1.setAttribute('alt', 'appetizers image');
  article1.appendChild(img1);
  const row1 = document.createElement('div');
  row1.classList.add('row');
  const ul1 = document.createElement('ul');
  ul1.classList.add(
    'items',
    'col-lg-12',
    'col-md-12',
    'col-sm-12',
    'col-xs-12',
    'itemsPrices',
  );
  ul1.innerHTML = '<li>Savory Party Bread</li>'
    + '<li>$10.00</li>'
    + '<li>Orange-Glazed Meatballs</li>'
    + '<li>$20.00</li>'
    + '<li>Chicken Parmesan Slider Bake</li>'
    + '<li>$15.00</li>'
    + '<li>Grilled Tomato-Peach Pizza</li>'
    + '<li>$30.00</li>';
  row1.appendChild(ul1);
  article1.appendChild(row1);
  section.appendChild(article1);

  /* ARTICLE 2 */
  const article2 = document.createElement('article');
  article2.classList.add('col-lg-4', 'col-md-4', 'col-sm-12');
  const title2 = document.createElement('h2');
  title2.textContent = 'Main';
  article2.appendChild(title2);
  article2.innerHTML += '<br>';
  const img2 = document.createElement('img');
  img2.setAttribute('src', '../src/images/main.jpeg');
  img2.setAttribute('alt', 'main dishes image');
  article2.appendChild(img2);
  const row2 = document.createElement('div');
  row2.classList.add('row');
  const ul2 = document.createElement('ul');
  ul2.classList.add(
    'items',
    'col-lg-12',
    'col-md-12',
    'col-sm-12',
    'col-xs-12',
    'itemsPrices',
  );
  ul2.innerHTML = "<li>Vegetable Lovers' Fried Rice</li>"
    + '<li>$10.00</li>'
    + '<li>Cardamom Maple Salmon</li>'
    + '<li>$20.00</li>'
    + '<li>Beef Stroganoff with Ground Beef</li>'
    + '<li>$15.00</li>'
    + '<li>Keto Turkey-Stuffed Peppers</li>'
    + '<li>$30.00</li>';
  row2.appendChild(ul2);
  article2.appendChild(row2);
  section.appendChild(article2);
  /* ARTICLE 3 */
  const article3 = document.createElement('article');
  article3.classList.add('col-lg-4', 'col-md-4', 'col-sm-12');
  const title3 = document.createElement('h2');
  title3.textContent = 'Desserts';
  article3.appendChild(title3);
  article3.innerHTML += '<br>';
  const img3 = document.createElement('img');
  img3.setAttribute('src', '../src/images/desserts.jpeg');
  img3.setAttribute('alt', 'Desserts image');
  article3.appendChild(img3);
  const row3 = document.createElement('div');
  row3.classList.add('row');
  const ul3 = document.createElement('ul');
  ul3.classList.add(
    'items',
    'col-lg-12',
    'col-md-12',
    'col-sm-12',
    'col-xs-12',
    'itemsPrices',
  );
  ul3.innerHTML = '<li>Triple Chocolate Roll Cake</li>'
    + '<li>$10.00</li>'
    + '<li>Sheet Pan Apple Crisp</li>'
    + '<li>$20.00</li>'
    + '<li>Apple Pie by Grandma Ople</li>'
    + '<li>$15.00</li>'
    + "<li>Chantal's New York Cheesecake</li>"
    + '<li>$30.00</li>';
  row3.appendChild(ul3);
  article3.appendChild(row3);
  section.appendChild(article3);
  return [slide, section];
};
export default menu;
