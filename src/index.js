import { createHeader } from "./modules/header";

document.addEventListener(
  "DOMContentLoaded",
  document.getElementById("content").appendChild(createHeader.header)
);
