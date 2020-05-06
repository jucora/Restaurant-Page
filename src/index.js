import { createHome } from "./modules/home";
require("./css/style.css");

document.addEventListener(
  "DOMContentLoaded",
  document.getElementById("content").appendChild(createHome.header),
  document.getElementById("content").appendChild(createHome.slide)
);
