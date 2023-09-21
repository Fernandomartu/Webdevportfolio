let gitButtonOne = document.getElementById("git-button-one");

let isGitHovered = false;

let projects = document.getElementsByClassName("project");

projects[0].onclick = function () {
  if (window.innerWidth <= 800 && !isGitHovered) {
    window.open(
      "https://mern-social-media-frontend-15rx.onrender.com/",
      "_blank"
    );
  } else return;
};

projects[1].onclick = function () {
  if (window.innerWidth <= 800) {
    window.open("https://github.com/Fernandomartu/Python-Projects", "_blank");
  } else return;
};

projects[2].onclick = function () {
  if (window.innerWidth <= 800) {
    window.open("https://epicprint.com", "_blank");
  } else return;
};

gitButtonOne.addEventListener("mouseover", () => {
  isGitHovered = true; // Change the background color to blue on hover
});

// Add a "mouseout" event listener to revert the changes when the mouse leaves the button
gitButtonOne.addEventListener("mouseout", () => {
  // Code to execute when the mouse leaves the button
  isGitHovered = false; // Revert the background color to its original state
});
