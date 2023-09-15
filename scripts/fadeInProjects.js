let projectHeader = document.getElementById("projects-header-wrap");
let projectColumnRight = document.getElementById("project-column-right");
let projectColumnLeft = document.getElementById("project-column-left");
let inverseProjectColumnLeft = document.getElementById(
  "inverse-project-column-left"
);
let inverseProjectColumnRight = document.getElementById(
  "inverse-project-column-right"
);
let linkElement = document.getElementById("css-link-first");

let nameWrap = document.getElementById("name-wrap");
let descPara = document.getElementById("description-paragraph-wrap");
let aboutNav = document.getElementById("About");
let projectsNav = document.getElementById("Projects");
let servicesNav = document.getElementById("Services");
let contactNav = document.getElementById("Contact Me");

let loadNextAnim = () => {
  const script = document.createElement("script");
  script.src = "./scripts/navAnimations.js";
  document.head.prepend(script);
};

let fadeInElements = () => {
  if (localStorage.getItem("hasCodeRunBefore") === null) {
    setTimeout(function () {
      projectHeader.style.transition = "opacity 1s ease-in-out";
      projectHeader.style.opacity = 1;
    }, 12000); // Adjust the delay (in milliseconds) as needed
    setTimeout(function () {
      projectColumnRight.style.animation = "fade-in-right 1s ease forwards";
    }, 13000); // Adjust the delay (in milliseconds) as needed
    setTimeout(function () {
      projectColumnLeft.style.animation = "fade-in-left 1s ease forwards";
    }, 14000); // Adjust the delay (in milliseconds) as needed
    setTimeout(function () {
      inverseProjectColumnLeft.style.animation =
        "fade-in-left 1s ease forwards";
    }, 15000); // Adjust the delay (in milliseconds) as needed
    setTimeout(function () {
      inverseProjectColumnRight.style.animation =
        "fade-in-right 1s ease forwards";
    }, 16000); // Adjust the delay (in milliseconds) as needed
  } else {
    // Check if the <link> element was found
    // linkElement.href = "./css/style-two.css";
    projectHeader.style.opacity = 1;
    projectColumnRight.style.opacity = 1;
    projectColumnLeft.style.opacity = 1;
    inverseProjectColumnLeft.style.opacity = 1;
    inverseProjectColumnRight.style.opacity = 1;
    nameWrap.innerHTML = "Fernando Marturet";
    descPara.innerHTML =
      "Self taught developer with Knowledge of HTML, CSS, Javascript, MySQL, Bubble.io and other technologies. Feel free to browse through my projects :)";
    aboutNav.innerHTML = "About Me";
    projectsNav.innerHTML = "Projects";
    servicesNav.innerHTML = "Services";
    contactNav.innerHTML = "Contact Me";
    loadNextAnim();
  }
};

fadeInElements();
