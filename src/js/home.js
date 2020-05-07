import { removePage } from "./remove";
import { createHeader } from "./header";
import { createFooter } from "./footer";

export const createHome = () => {
  removePage();
  createHeader();
  /* SLIDE 1*/
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

  document.getElementById("content").appendChild(slide),
    document.getElementById("content").appendChild(section);
  createFooter();
};
