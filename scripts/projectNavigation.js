let projects = document.getElementsByClassName("project");

projects[0].onclick = function () {
  if (window.innerWidth <= 800) {
    window.open(
      "https://github.com/Fernandomartu/MERN-portfolio-project",
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
