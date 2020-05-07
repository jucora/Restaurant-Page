import { removePage } from "./remove";
import { createHeader } from "./header";
import { createFooter } from "./footer";

export const createMenu = () => {
  removePage();
  /* SLIDE 2*/
  createHeader();
  let slide = document.createElement("div");
  slide.classList.add("row", "slide");
  slide.setAttribute("id", "slide2");
  slide.innerHTML =
    "<div class='col-lg-12'>" +
    "<h3>The Best Tasting Experience</h3>" +
    "<br />" +
    "<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>" +
    "<br />" +
    "<button>Contact us!</button>" +
    "</div>";

  /*SECTION 2*/
  let section = document.createElement("section");
  section.classList.add("row");
  section.setAttribute("id", "section2");
  section.innerHTML =
    "<article class='col-lg-4 col-md-4 col-sm-12'>" +
    "<h2>Appetizers</h2>" +
    "<br />" +
    "<img src='../src/images/appetizers.jpeg' alt='' />" +
    "<div class='row'>" +
    "<ul class='items col-lg-12 col-md-12 col-sm-12 col-xs-12 itemsPrices'>" +
    "<li>Savory Party Bread</li>" +
    "<li>$10.00</li>" +
    "<li>Orange-Glazed Meatballs</li>" +
    "<li>$20.00</li>" +
    "<li>Chicken Parmesan Slider Bake</li>" +
    "<li>$15.00</li>" +
    "<li>Grilled Tomato-Peach Pizza</li>" +
    "<li>$30.00</li>" +
    "</ul>" +
    "</div>" +
    "</article>" +
    "<article class='col-lg-4 col-md-4 col-sm-12'>" +
    "<h2>Main</h2>" +
    "<br />" +
    "<img src='../src/images/main.jpeg' alt='' />" +
    "<div class='row'>" +
    "<ul class='items col-lg-12 col-md-12 col-sm-12 col-xs-12 itemsPrices'>" +
    "<li>Vegetable Lovers' Fried Rice</li>" +
    "<li>$10.00</li>" +
    "<li>Cardamom Maple Salmon</li>" +
    "<li>$20.00</li>" +
    "<li>Beef Stroganoff with Ground Beef</li>" +
    "<li>$15.00</li>" +
    "<li>Keto Turkey-Stuffed Peppers</li>" +
    "<li>$30.00</li>" +
    "</ul>" +
    "</div>" +
    "</article>" +
    "<article class='col-lg-4 col-md-4 col-sm-12'>" +
    "<h2>Desserts</h2>" +
    "<br />" +
    "<img src='../src/images/desserts.jpeg' alt='' />" +
    "<div class='row'>" +
    "<ul class='items col-lg-12 col-md-12 col-sm-12 col-xs-12 itemsPrices'>" +
    "<li>Triple Chocolate Roll Cake</li>" +
    "<li>$10.00</li>" +
    "<li>Sheet Pan Apple Crisp</li>" +
    "<li>$20.00</li>" +
    "<li>Apple Pie by Grandma Ople</li>" +
    "<li>$15.00</li>" +
    "<li>Chantal's New York Cheesecake</li>" +
    "<li>$30.00</li>" +
    "</ul>" +
    "</div>" +
    "</article>";
  document.getElementById("content").appendChild(slide);
  document.getElementById("content").appendChild(section);
  createFooter();
};
