import header from './js/header';
import home from './js/home';
import menu from './js/menu';
import contact from './js/contact';
import footer from './js/footer';

require('./css/style.css');

const content = document.querySelector('#content');
const createPage = (page) => {
  content.innerHTML = '';
  content.appendChild(header());
  switch (page) {
    case 'home':
      home().forEach((el) => {
        content.appendChild(el);
      });
      break;
    case 'menu':
      menu().forEach((el) => {
        content.appendChild(el);
      });
      break;
    case 'contact':
      content.appendChild(contact());
      break;
    default:
      break;
  }
  content.appendChild(footer());
  document.getElementById('home').addEventListener('click', () => {
    createPage('home');
  });
  document.getElementById('menu').addEventListener('click', () => {
    createPage('menu');
    document.querySelector('#contactButton').addEventListener('click', () => {
      createPage('contact');
    });
  });
  document.getElementById('contact').addEventListener('click', () => {
    createPage('contact');
  });
};

createPage('home');
