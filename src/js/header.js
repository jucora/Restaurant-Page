import { createHome } from "./home";
import { createMenu } from "./menu";
import { createContact } from "./contact";
export const createHeader = () => {
  let header = document.createElement("header");
  header.classList.add("row");
  header.innerHTML =
    "<div class='col-lg-8 col-md-8 col-sm-12 col-xs-12' id='logo'>Love Restaurant</div>" +
    "<nav>" +
    "<ul>" +
    "<li class='col-lg-1 col-md-1 col-sm-4 col-xs-12' id='home'>Home</li>" +
    "<li class='col-lg-1 col-md-1 col-sm-4 col-xs-12' id='menu'>Menu</li>" +
    "<li class='col-lg-1 col-md-1 col-sm-4 col-xs-12' id ='contact'>Contact</li>" +
    "</ul>" +
    "</nav>";
  document.getElementById("content").appendChild(header);
  document.querySelector("#home").addEventListener("click", createHome);
  document.querySelector("#menu").addEventListener("click", createMenu);
  document.querySelector("#contact").addEventListener("click", createContact);
};
