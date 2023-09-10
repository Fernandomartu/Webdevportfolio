let projectHeader = document.getElementById("projects-header-wrap");
let projectColumnRight = document.getElementById("project-column-right");
let projectColumnLeft = document.getElementById("project-column-left");
let inverseProjectColumnLeft = document.getElementById(
  "inverse-project-column-left"
);
let inverseProjectColumnRight = document.getElementById(
  "inverse-project-column-right"
);

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    projectHeader.style.opacity = 1;
  }, 12000); // Adjust the delay (in milliseconds) as needed
  setTimeout(function () {
    projectColumnRight.style.animation = "fade-in-right 1s ease forwards";
  }, 13000); // Adjust the delay (in milliseconds) as needed
  setTimeout(function () {
    projectColumnLeft.style.animation = "fade-in-left 1s ease forwards";
  }, 14000); // Adjust the delay (in milliseconds) as needed
  setTimeout(function () {
    inverseProjectColumnLeft.style.animation = "fade-in-left 1s ease forwards";
  }, 15000); // Adjust the delay (in milliseconds) as needed
  setTimeout(function () {
    inverseProjectColumnRight.style.animation =
      "fade-in-right 1s ease forwards";
  }, 16000); // Adjust the delay (in milliseconds) as needed
});
