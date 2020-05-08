const createHeader = (() => {
  const header = () => {
    const headerTag = document.createElement('header');
    headerTag.classList.add('row');
    const div = document.createElement('div');
    div.classList.add('col-lg-8', 'col-md-8', 'col-sm-12', 'col-xs-12');
    div.setAttribute('id', 'logo');
    div.textContent = 'Love Restaurant';
    headerTag.appendChild(div);
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const li1 = document.createElement('li');
    li1.classList.add('col-lg-1', 'col-md-1', 'col-sm-4', 'col-xs-12');
    li1.setAttribute('id', 'home');
    li1.textContent = 'Home';
    ul.appendChild(li1);
    const li2 = document.createElement('li');
    li2.classList.add('col-lg-1', 'col-md-1', 'col-sm-4', 'col-xs-12');
    li2.setAttribute('id', 'menu');
    li2.textContent = 'Menu';
    ul.appendChild(li2);
    const li3 = document.createElement('li');
    li3.classList.add('col-lg-1', 'col-md-1', 'col-sm-4', 'col-xs-12');
    li3.setAttribute('id', 'contact');
    li3.textContent = 'Contact';
    ul.appendChild(li3);
    nav.appendChild(ul);
    headerTag.appendChild(nav);
    document.getElementById('content').appendChild(headerTag);
  };
  return {
    header,
  };
})();
export default createHeader;
