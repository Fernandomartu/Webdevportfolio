/* Titles slow type animation */
/*
let generateSpans = (string, divid) => {
    const div = document.getElementById(divid);
    for(let i=0; i<string.length+1; i++){
    const newSpan = document.createElement("span");
    div.appendChild(newSpan);
    }
}



let projectWrapDiv = document.getElementById("projects-wrap");
let projectLetters = projectWrapDiv.getElementsByTagName('span');
let projectText = "Projects";


let resumeWrapDiv = document.getElementById("resume-wrap");
let resumeLetters = resumeWrapDiv.getElementsByTagName('span');
let resumeText = "Resume";

let orderNowWrapDiv = document.getElementById("ordernow-wrap");
let orderNowLetters = orderNowWrapDiv.getElementsByTagName('span');
let orderNowText = "Order Now";


generateSpans(resumeText, "resume-wrap");
generateSpans(projectText, "projects-wrap");
generateSpans(orderNowText, "ordernow-wrap");

let generateTextAnim = (letters, text) => {
    let i = 0;
    letters[i].textContent = "_"
let changeText = setInterval(function(){
    
        console.log(i);
        console.log(text.length);
        letters[i].style.display = "inline";
        letters[i].textContent = text[i];
        letters[i+1].textContent = "_";
        letters[i+1].style.display = "inline";
        i++
        if(i == text.length){
            letters[i].textContent = text[i];
            console.log("i is " + i);
            clearInterval(changeText);
        }
    
    }, 200);
}



setTimeout(function() {
    generateTextAnim(projectLetters, projectText);
}, 1000);

setTimeout(function() {
    generateTextAnim(resumeLetters, resumeText);
}, 3000);

setTimeout(function() {
    generateTextAnim(orderNowLetters, orderNowText);
}, 5000);


*/
let displayClickAnywhereTextcounter = 0;
let firstAnimComplete = false;

let displayClickAnywhereText = () => {
    let clickAnywhereText = document.getElementById("click-anywhere-text");
    displayClickAnywhereTextcounter++;
    if (displayClickAnywhereTextcounter%2==0){
        clickAnywhereText.style.opacity = "100%";
    }
    else {
        clickAnywhereText.style.opacity = "0%";
    }
}

let timer = setInterval(displayClickAnywhereText, 1000);


let hideClickAnywhereText = () => {
    let clickAnywhereText = document.getElementById("click-anywhere-text");
    clickAnywhereText.style.display = "none";
}



let showNameWrap = () => {
   let nameWrap = document.getElementById("name-wrap");
    nameWrap.style.display = "inline";
}


let pulsateUnderscoreInitial = (letters, letterIndex) => {
    let count = 0;
    let editText = () => {
        if(count==4){        
            clearInterval(timer);
        }
       if(count%2==0){
            letters[letterIndex].textContent = "";
        }
        else{letters[letterIndex].textContent = "_"}

        count++;

    }
    let timer = setInterval(editText, 800)
}

let pulsateUnderscoreFinal = (letters, letterIndex) => {
    let keyboardsound = new Audio('./sound files/mechanicalkey.wav');
    let count = 0
    let editText = () => {
        count++;
        if(count==4){
            console.log(count);
            keyboardsound.play();
            clearInterval(timer);
            firstAnimComplete = true;
        }
        if(count%2==0){
            letters[letterIndex].textContent = "";
        }else{letters[letterIndex].textContent = "_"}
    }
    let timer = setInterval(editText, 600);
}

let generateSpans = (string, divid) => {
    const div = document.getElementById(divid);
    for(let i=0; i<string.length+1; i++){
    const newSpan = document.createElement("span");
    div.appendChild(newSpan);
    }
}


let textAnimMain = (string, wrapDivName, timeout) => {

    let keyboardsound = new Audio('./sound files/mechanicalkey.wav');
    let wrapDiv = document.getElementById(wrapDivName);

    generateSpans(string, wrapDivName);

    let letters = wrapDiv.getElementsByTagName('span');
    let text = string;

    pulsateUnderscoreInitial(letters, 0);

    let generateTextAnim = (letters, text) => {
        let i = 0;
        letters[i].textContent = "_"
    let changeText = () => {

            console.log(i);
            console.log(text.length);
            letters[i].style.display = "inline";
            letters[i].textContent = text[i];
            keyboardsound.play();
            letters[i+1].textContent = "_";
            letters[i+1].style.display = "inline";
            i++
            if(i == text.length){
                console.log("i is " + i);
                clearInterval(timer);
                pulsateUnderscoreFinal(letters, i);
            }
        }
        let timer =  setInterval(changeText, 500);
    }

    setTimeout(function() {
        generateTextAnim(letters, text);
    }, timeout);

}


/*
window.onload = function () {
    if (localStorage.getItem("hasCodeRunBefore") === null) {
        document.onmousemove = function(){
            clickCount++
        if (clickCount == 1){
        textAnimMain("Fernando Marturet", "name-wrap", "name-wrap", 500);
        }
        else{return;}
        }
        localStorage.setItem("hasCodeRunBefore", true);
    }
}*/


let clickCount = 0;

document.onclick = function(){
   
clickCount++;

    if (clickCount == 1){
        hideClickAnywhereText();
        showNameWrap();
        textAnimMain("Fernando Marturet", "name-wrap", 4800);
    }
    else {return;}
}

let triggerSecondAnim = () => {
    if(firstAnimComplete == true){
        console.log("whoo");
        clearInterval(waitForFirstAnimTimer);
        
    }
}

let waitForFirstAnimTimer = setInterval(triggerSecondAnim, 100);

let moveNameText = () => {
    let nameText = document.getElementById('name-wrap');
    nameText
}


/*
textAnimMain("Projects", "projects-wrap", "projects-wrap", 1000);
textAnimMain("Resume", "resume-wrap", "resume-wrap", 3000);
textAnimMain("Order Now", "ordernow-wrap", "ordernow-wrap", 5000);
*/


