export const createHeader = (() => {
  let header = document.createElement("header");
  header.classList.add("row");
  let divLogo = document.createElement("div");
  divLogo.classList.add("col-lg-8", "col-md-8", "col-sm-12", "col-xs-12");
  header.appendChild(divLogo);
  let nav = document.createElement("nav");
  let ul = document.createElement("ul");
  let links = ["index.html", "menu.html", "contact.html"];
  let linksValues = ["Home", "Menu", "Contact"];
  for (let i = 0; i <= links.length - 1; i += 1) {
    let li = document.createElement("li");
    li.classList.add("col-lg-1", "col-md-1", "col-sm-4", "col-xs-12");
    let a = document.createElement("a");
    a.setAttribute("href", links[i]);
    a.textContent = linksValues[i];
    li.appendChild(a);
    ul.appendChild(li);
  }
  nav.appendChild(ul);
  header.appendChild(nav);
  return {
    header,
  };
})();
