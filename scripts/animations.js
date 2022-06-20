
/*let displayClickAnywhereTextcounter = 0;*/
let firstAnimComplete = false;

/*
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
*/
let loadNextAnim = () => {
    const script = document.createElement('script');
    script.src = './scripts/linesanimations.js';
    document.head.prepend(script);
    }

    /*
let hideClickAnywhereText = () => {
    let clickAnywhereText = document.getElementById("click-anywhere-text");
    clickAnywhereText.style.display = "none";
}
*/

/*
let showNameWrap = () => {
    let mainBodyWrap = document.getElementById("main-body-wrap");
    mainBodyWrap.style.display = "grid";
}
*/

let pulsateUnderscoreInitial = (letters, letterIndex) => {
    let count = 0;
    let editText = () => {
        if(count==4){        
            clearInterval(timer);
        }
       if(count%2==0){
        letters[letterIndex].style.opacity = "1";
            letters[letterIndex].textContent = "";
        }
        else{
            letters[letterIndex].style.opacity = "1";
            letters[letterIndex].textContent = "_"}

        count++;

    }
    let timer = setInterval(editText, 800)
}

let pulsateUnderscoreFinal = (letters, letterIndex) => {
    /*let keyboardsound = new Audio('./sound files/mechanicalkey.wav');*/
    
    let count = 0
    let editText = () => {
        let nameWrap = document.getElementById("name-wrap");
        let nameSpans = nameWrap.children;
        count++;
        if(count==4){
            console.log(count);
            /*keyboardsound.play();*/
            for(let i=0; i<nameSpans.length; i++){
            nameSpans[i].style.color = "#00FF41";
            }
            clearInterval(timer);
            firstAnimComplete = true;
        }
        if(count%2==0){
            letters[letterIndex].textContent = " ";
        }else{letters[letterIndex].textContent = "_"}
    }
    let timer = setInterval(editText, 800);
}

let generateSpans = (string, divid) => {
    const div = document.getElementById(divid);
    for(let i=0; i<string.length+1; i++){
    const newSpan = document.createElement("span");
    div.appendChild(newSpan);
    newSpan.setAttribute("id", "name-spans");
    }
}


let textAnimMain = (string, wrapDivName, timeout) => {

    /* let keyboardsound = new Audio('./sound files/mechanicalkey.wav');*/
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
            /*keyboardsound.play();*/
            letters[i+1].style.opacity = "1";
            letters[i+1].textContent = "_";
            letters[i+1].style.display = "inline";
            
            i++
            if(i == text.length){
                console.log("i is " + i);
                clearInterval(timer);
                pulsateUnderscoreFinal(letters, i);
            }
        }
        let timer =  setInterval(changeText, 400);
    }

    setTimeout(function() {
        generateTextAnim(letters, text);
    }, timeout);

}

/*let clickCount = 0;

document.onclick = function(){
   
clickCount++;

    if (clickCount == 1){
        hideClickAnywhereText();
        showNameWrap();
        textAnimMain("Fernando Marturet", "name-wrap", 4800);
    }
    else {return;}
}
*/
textAnimMain("Fernando Marturet", "name-wrap", 4800);

let triggerSecondAnim = () => {
    if(firstAnimComplete == true){
        clearInterval(waitForFirstAnimTimer);
        loadNextAnim();
    }
}

let waitForFirstAnimTimer = setInterval(triggerSecondAnim, 100);




