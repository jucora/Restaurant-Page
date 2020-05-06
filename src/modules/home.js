export const createHome = (() => {
  /* HEADER */
  let header = document.createElement("header");
  header.classList.add("row");
  let divLogo = document.createElement("div");
  divLogo.setAttribute("id", "logo");
  divLogo.classList.add("col-lg-8", "col-md-8", "col-sm-12", "col-xs-12");
  divLogo.textContent = "Love Restaurant";
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
    li.setAttribute("id", linksValues[i]);
    li.appendChild(a);
    ul.appendChild(li);
  }
  nav.appendChild(ul);
  header.appendChild(nav);

  /*HOME CONTENT*/
  /* SLIDE */
  const slide = document.createElement("div");
  slide.classList.add("slide", "row");
  slide.setAttribute("id", "slide1");
  let slideCol = document.createElement("div");
  slideCol.classList.add("col-lg-12");
  slideCol.innerHTML =
    "<h3>The Best Tasting Experience</h3>" +
    "<br />" +
    "<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>" +
    "<br />" +
    "<button>Contact us!</button>";
  slide.appendChild(slideCol);

  /*SECTION1*/
  let section = document.createElement("section");
  section.setAttribute("id", "section1");
  section.classList.add("row");
  section.innerHTML =
    "<div class='col-lg-7 col-md-12 col-sm-12 col-xs-12'>" +
    "<br />" +
    "<h2>A very special place!</h2>" +
    "<br />" +
    "<p>Discover Delicious Greek Dishes and Desserts</p>" +
    " <br /><br />" +
    "<p>“...once you walk in past the mouth watering pastries you'll find yourself thinking you've teleported to a Greek island!”</p>" +
    "<br />" +
    "<p>“I came here during the day so I can imagine how romantic it feels during the evening. The decor simply stunning.”</p>" +
    "</div>" +
    "<div class='col-lg-5 col-md-12 col-sm-12 col-xs-12'><img src='../src/images/dish.jpeg' alt='' /></div>";
  /*FOOTER*/
  let footer = document.createElement("footer");
  footer.classList.add("row");
  footer.textContent =
    "Created by Julian Belmonte | @copyright - All rights reserved";
  return {
    header,
    slide,
    section,
    footer,
  };
})();
