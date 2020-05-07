import { removePage } from "./remove";
import { createHeader } from "./header";
import { createFooter } from "./footer";

export const createContact = () => {
  removePage();
  createHeader();
  let section = document.createElement("section");
  section.setAttribute("id", "section3");
  section.innerHTML =
    "<div class='col-lg-0 col-md-0 col-sm-0 col-xs-0'></div>" +
    "<div class='col-lg-12 col-md-12 col-sm-12 col-xs-12'>" +
    "<aside id='right'>" +
    "<form>" +
    "<h1>Contact us!</h1>" +
    "<input type='text' placeholder='User' />" +
    "<input type='email' placeholder='Email' />" +
    "<input type='submit' value='Send' />" +
    "</form>" +
    "</aside>" +
    "</div>" +
    "<div class='col-lg-0 col-md-0 col-sm-0 col-xs-0'></div>;";
  document.querySelector("#content").appendChild(section);
  createFooter();
};
