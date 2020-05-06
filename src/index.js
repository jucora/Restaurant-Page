import { createHome } from "./js/home";
import { createMenu } from "./js/menu";
require("./css/style.css");

document.addEventListener(
  "DOMContentLoaded",
  document.getElementById("content").appendChild(createHome.header),
  document.getElementById("content").appendChild(createHome.slide),
  document.getElementById("content").appendChild(createHome.section),
  document.getElementById("content").appendChild(createHome.footer)
);

document.querySelector("#Menu").addEventListener("click", createMenu);
