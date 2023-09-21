let descMessage =
  "Self taught developer with Knowledge of HTML, CSS, Javascript, MySQL, Bubble.io and other technologies. Feel free to browse through my projects :)";
let aboutMeText = "Home";
let projectsText = "Projects";
let servicesText = "Services";
let contactMeText = "Contact Me";

let descParagraphWrap = document.getElementById("description-paragraph-wrap");
let aboutMeDiv = document.getElementById("About");
let projectsDiv = document.getElementById("Projects");
let servicesDiv = document.getElementById("Services");
let contactMeDiv = document.getElementById("Contact Me");

let navigationMainWrap = document.getElementById("navigation-main-wrap");

let loadNextAnim = () => {
  const script = document.createElement("script");
  script.src = "./scripts/navAnimations.js";
  document.head.prepend(script);
};

let textScrambler = (message, parentDiv, descrambleTime, descrambleTimeout) => {
  let generateSpans = (string, div) => {
    for (let i = 0; i < string.length + 1; i++) {
      const newSpan = document.createElement("span");
      div.appendChild(newSpan);
      newSpan.setAttribute("class", "span");
    }
  };
  generateSpans(message, parentDiv);

  let scramble = () => {
    let span = parentDiv.getElementsByTagName("span");
    let spanElements = parentDiv.getElementsByTagName("span");
    for (let i = 0; i < spanElements.length; i++) {
      spanElements[i].style.backgroundColor = "transparent";
    }
    let scrambleSpans = () => {
      let codeletters = "01";

      for (let i = 0; i < message.length; i++) {
        if (message.charAt(i) == " ") {
          span[i].textContent = " ";
        } else if (
          span[i].textContent == "0" ||
          span[i].textContent == "1" ||
          span[i].textContent == ""
        ) {
          span[i].textContent = codeletters.charAt(
            Math.floor(Math.random() * 2)
          );
        }
      }
    };
    setInterval(scrambleSpans, 100);
  };

  scramble(message);

  let iterator = Math.floor(Math.random() * message.length);
  let changeSpans = (message, iterator) => {
    let span = parentDiv.getElementsByTagName("span");
    setInterval(function () {
      iterator = Math.floor(Math.random() * message.length);
      span[iterator].textContent = message.charAt(iterator);

      if (
        span[iterator].textContent !== "0" ||
        span[iterator].textContent !== "1"
      ) {
        if (iterator > Math.floor(message.length / 2)) {
          for (let i = iterator; i >= 0; i--) {
            if (span[i].textContent == "0" || span[i].textContent == "1") {
              span[i].textContent = message.charAt(i);
              break;
            }
          }
        } else if (iterator < Math.floor(message.length / 2)) {
          for (let i = iterator; i < message.length; i++) {
            if (span[i].textContent == "0" || span[i].textContent == "1") {
              span[i].textContent = message.charAt(i);
              break;
            }
          }
        }
      }
    }, descrambleTime);
  };

  let newTime = setTimeout(function () {
    changeSpans(message, iterator);
  }, descrambleTimeout);
};

textScrambler(descMessage, descParagraphWrap, 30, 3000);
textScrambler(aboutMeText, aboutMeDiv, 100, 5000);
textScrambler(projectsText, projectsDiv, 100, 5000);
textScrambler(servicesText, servicesDiv, 100, 5000);
textScrambler(contactMeText, contactMeDiv, 100, 5000);

setTimeout(loadNextAnim, 6000);
