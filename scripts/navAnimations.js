let navOption = document.getElementsByClassName("nav-option");
let underliner = document.getElementById("underliner");
let mainBodyWrap = document.getElementById("main-body-wrap");
// let navMainWrap = document.getElementById("navigation-main-wrap");
// let viewWidth = navMainWrap.clientWidth;

let aboutMeTab = true;
let projectsTab = false;
let contactTab = false;
let servicesTab = false;

underlineOffset = 3;

let disableAnimation = () => {
  underliner.style.transition = "";
};

let generateUnderliner = () => {
  underliner.style.transition = "all 600ms ease-in";
  underliner.style.left = navOption[0].getBoundingClientRect().left + 37 + "px";
  setTimeout(function () {
    underliner.style.width =
      navOption[0].getBoundingClientRect().width + 5 + "px";
    underliner.style.left = underliner.getBoundingClientRect().left - 40 + "px";
  }, 200);
  underliner.style.transition = "";
};

let moveUnderlineOne = () => {
  underliner.style.transition = "all 600ms ease-in";
  underliner.style.left =
    navOption[0].getBoundingClientRect().left - underlineOffset + "px";
  underliner.style.width =
    navOption[0].getBoundingClientRect().width + 5 + "px";
  mainBodyWrap.style.right = "0vw";
  console.log("running this");
  aboutMeTab = true;
  servicesTab = false;
  contactTab = false;
  projectsTab = false;
  setTimeout(function () {
    disableAnimation();
  }, 600);
  return aboutMeTab, projectsTab, servicesTab, contactTab;
};
let moveUnderlineTwo = () => {
  underliner.style.transition = "all 600ms ease-in";
  underliner.style.left =
    navOption[1].getBoundingClientRect().left - underlineOffset + "px";
  underliner.style.width =
    navOption[1].getBoundingClientRect().width + 5 + "px";
  mainBodyWrap.style.right = "100vw";
  projectsTab = true;
  contactTab = false;
  aboutMeTab = false;
  servicesTab = false;
  setTimeout(function () {
    disableAnimation();
  }, 600);
  console.log(aboutMeTab, projectsTab, servicesTab, contactTab);
  return aboutMeTab, projectsTab, servicesTab, contactTab;
};

let moveUnderlineThree = () => {
  underliner.style.transition = "all 600ms ease-in";
  underliner.style.left =
    navOption[2].getBoundingClientRect().left - underlineOffset + "px";
  underliner.style.width =
    navOption[2].getBoundingClientRect().width + 5 + "px";
  mainBodyWrap.style.right = "200vw";
  servicesTab = true;
  contactTab = false;
  projectsTab = false;
  aboutMeTab = false;
  setTimeout(function () {
    disableAnimation();
  }, 600);
  console.log(aboutMeTab, projectsTab, servicesTab, contactTab);
  return aboutMeTab, projectsTab, servicesTab, contactTab;
};

let moveUnderlineFour = () => {
  underliner.style.transition = "all 600ms ease-in";
  underliner.style.left =
    navOption[3].getBoundingClientRect().left - underlineOffset + "px";
  underliner.style.width =
    navOption[3].getBoundingClientRect().width + 5 + "px";
  mainBodyWrap.style.right = "300vw";
  contactTab = true;
  servicesTab = false;
  projectsTab = false;
  aboutMeTab = false;
  setTimeout(function () {
    disableAnimation();
  }, 600);
  console.log(aboutMeTab, projectsTab, servicesTab, contactTab);
  return aboutMeTab, projectsTab, servicesTab, contactTab;
};

navOption[0].addEventListener("click", moveUnderlineOne, false);
navOption[1].addEventListener("click", moveUnderlineTwo, false);
navOption[2].addEventListener("click", moveUnderlineThree, false);
navOption[3].addEventListener("click", moveUnderlineFour, false);

let test = document.getElementById("Contact Me");

let adjustUnderlineToWindow = () => {
  if (aboutMeTab == true) {
    moveUnderlineOne();
  } else if (projectsTab == true) {
    moveUnderlineTwo();
  } else if (contactTab == true) {
    moveUnderlineFour();
  } else if (servicesTab == true) {
    moveUnderlineThree();
  }
};

window.onresize = adjustUnderlineToWindow;

generateUnderliner();
