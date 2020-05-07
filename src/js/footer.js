export const createFooter = () => {
  let footer = document.createElement("footer");
  footer.classList.add("row");
  footer.textContent =
    "Created by Julian Belmonte | @copyright - All rights reserved";
  document.getElementById("content").appendChild(footer);
};
