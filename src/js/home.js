const createHome = (() => {
  /* SLIDE 1*/
  const home = () => {
    const slide = document.createElement("div");
    slide.classList.add("slide", "row");
    slide.setAttribute("id", "slide1");
    let slideCol = document.createElement("div");
    slideCol.classList.add("col-lg-12");
    let h3 = document.createElement("h3");
    h3.textContent = "The Best Tasting Experience";
    slideCol.appendChild(h3);
    slideCol.innerHTML += "<br>";
    let p = document.createElement("p");
    p.textContent =
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
    slideCol.appendChild(p);
    slideCol.innerHTML += "<br>";
    let button = document.createElement("button");
    button.textContent = "Contact us!";
    slide.appendChild(slideCol);

    /*SECTION1*/
    let section = document.createElement("section");
    section.setAttribute("id", "section1");
    section.classList.add("row");
    const div = document.createElement("div");
    div.classList.add("col-lg-7", "col-md-12", "col-sm-12", "col-xs-12");
    div.innerHTML += "<br>";
    const h2 = document.createElement("h2");
    h2.textContent = "A very special place!";
    div.appendChild(h2);
    div.innerHTML += "<br>";
    const p2 = document.createElement("p");
    p2.textContent = "Discover Delicious Greek Dishes and Desserts";
    div.appendChild(p2);
    div.innerHTML += "<br><br>";
    const p3 = document.createElement("p");
    p3.textContent =
      "“...once you walk in past the mouth watering pastries you'll find yourself thinking you've teleported to a Greek island!”";
    div.appendChild(p3);
    div.innerHTML += "<br>";
    const p4 = document.createElement("p");
    p4.textContent =
      "“I came here during the day so I can imagine how romantic it feels during the evening. The decor simply stunning.”";
    div.appendChild(p4);
    section.appendChild(div);
    const div2 = document.createElement("div");
    div2.classList.add("col-lg-5", "col-md-12", "col-sm-12", "col-xs-12");
    const img = document.createElement("img");
    img.setAttribute("src", "../src/images/couple.jpeg");
    img.setAttribute("alt", "couple picture");
    div2.appendChild(img);
    section.appendChild(div2);
    document.getElementById("content").appendChild(slide);
    document.getElementById("content").appendChild(section);
  };
  return {
    home,
  };
})();

export default createHome;
