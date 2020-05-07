import createHeader from "./js/header";
import createHome from "./js/home";
import createMenu from "./js/menu";
import createContact from "./js/contact";
import createFooter from "./js/footer";

require("./css/style.css");

const createPage = (page) => {
  document.querySelector("#content").innerHTML = "";
  createHeader.header();
  switch (page) {
    case "home":
      createHome.home();
      break;
    case "menu":
      createMenu.menu();
      break;
    case "contact":
      createContact.contact();
      break;
    default:
      break;
  }
  createFooter.footer();
  document.getElementById("home").addEventListener("click", () => {
    createPage("home");
  });
  document.getElementById("menu").addEventListener("click", () => {
    createPage("menu");
  });
  document.getElementById("contact").addEventListener("click", () => {
    createPage("contact");
  });
  document.querySelector("#contactButton").addEventListener("click", () => {
    createPage("contact");
  });
};

createPage("home");
