const createContact = (() => {
  const contact = () => {
    let section = document.createElement("section");
    section.setAttribute("id", "section3");
    const div = document.createElement("div");
    div.classList.add("col-lg-0", "col-md-0", "col-sm-0", "col-xs-0");
    section.appendChild(div);
    const div2 = document.createElement("div");
    div2.classList.add("col-lg-12", "col-md-12", "col-sm-12", "col-xs-12");
    const aside = document.createElement("aside");
    aside.setAttribute("id", "right");
    const form = document.createElement("form");
    const h1 = document.createElement("h1");
    h1.textContent = "Contact us!";
    form.appendChild(h1);
    const input1 = document.createElement("input");
    input1.setAttribute("type", "text");
    input1.setAttribute("placeholder", "User");
    form.appendChild(input1);
    const input2 = document.createElement("input");
    input2.setAttribute("type", "email");
    input2.setAttribute("placeholder", "Email");
    form.appendChild(input2);
    const input3 = document.createElement("input");
    input3.setAttribute("type", "submit");
    input3.setAttribute("value", "Send");
    form.appendChild(input3);
    aside.appendChild(form);
    div2.appendChild(aside);
    section.appendChild(div2);
    const div3 = document.createElement("div");
    div.classList.add("col-lg-0", "col-md-0", "col-sm-0", "col-xs-0");
    section.appendChild(div3);
    document.querySelector("#content").appendChild(section);
  };
  return {
    contact,
  };
})();

export default createContact;
