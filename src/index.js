import { createHeader } from "./modules/header";
require("./css/style.css");

document.addEventListener(
  "DOMContentLoaded",
  document.getElementById("content").appendChild(createHeader.header)
);
