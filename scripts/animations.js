let firstAnimComplete = false;

let loadNextAnim = () => {
  const script = document.createElement("script");
  script.src = "./scripts/textScrambler.js";
  document.head.prepend(script);
};

let pulsateUnderscoreInitial = (letters, letterIndex) => {
  let count = 0;
  let editText = () => {
    if (count == 4) {
      clearInterval(timer);
    }
    if (count % 2 == 0) {
      letters[letterIndex].style.opacity = "1";
      letters[letterIndex].textContent = "";
    } else {
      letters[letterIndex].style.opacity = "1";
      letters[letterIndex].textContent = "_";
    }

    count++;
  };
  let timer = setInterval(editText, 800);
};

let pulsateUnderscoreFinal = (letters, letterIndex) => {
  let count = 0;
  let editText = () => {
    let nameWrap = document.getElementById("name-wrap");
    let nameSpans = nameWrap.children;
    count++;
    if (count == 4) {
      console.log(count);
      for (let i = 0; i < nameSpans.length; i++) {
        nameSpans[i].style.color = "RGB(93, 238, 206)";
      }
      clearInterval(timer);
      firstAnimComplete = true;
    }
    if (count % 2 == 0) {
      letters[letterIndex].textContent = " ";
    } else {
      letters[letterIndex].textContent = "_";
    }
  };
  let timer = setInterval(editText, 800);
};

let generateSpans = (string, divid) => {
  const div = document.getElementById(divid);
  for (let i = 0; i < string.length + 1; i++) {
    const newSpan = document.createElement("span");
    div.appendChild(newSpan);
    newSpan.setAttribute("id", "name-spans");
  }
};

let textAnimMain = (string, wrapDivName, timeout) => {
  let wrapDiv = document.getElementById(wrapDivName);

  generateSpans(string, wrapDivName);

  let letters = wrapDiv.getElementsByTagName("span");
  let text = string;

  pulsateUnderscoreInitial(letters, 0);

  let generateTextAnim = (letters, text) => {
    let i = 0;
    letters[i].textContent = "_";
    let changeText = () => {
      console.log(text.length);
      letters[i].style.display = "inline";
      letters[i].textContent = text[i];
      /*keyboardsound.play();*/
      letters[i + 1].style.opacity = "1";
      letters[i + 1].textContent = "_";
      letters[i + 1].style.display = "inline";

      i++;
      if (i == text.length) {
        clearInterval(timer);
        pulsateUnderscoreFinal(letters, i);
      }
    };
    let timer = setInterval(changeText, 100);
  };

  setTimeout(function () {
    generateTextAnim(letters, text);
  }, timeout);
};

let triggerSecondAnim = () => {
  if (firstAnimComplete == true) {
    clearInterval(waitForFirstAnimTimer);
    loadNextAnim();
  }
};

let waitForFirstAnimTimer = setInterval(triggerSecondAnim, 100);

window.onload = function () {
  if (localStorage.getItem("hasCodeRunBefore") === null) {
    window.scrollTo(0, 0); // Scroll to the top-left corner of the page
    textAnimMain("Fernando Marturet", "name-wrap", 4800);
    localStorage.setItem("hasCodeRunBefore", true);
  }
};
