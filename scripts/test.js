/* Web developer. Knowledge of HTML, CSS, Javascript, MySQL, Bubble.io and other technologies. Feel free to browse through my projects :)*/

/*let textScrambler = (message) => {
    let newPElement = document.createElement("p");
    let parentDiv = document.getElementById("description-paragraph-wrap");
    parentDiv.appendChild(newPElement);

    let time = 0;
    let scramble = () => {

    if (time == 1000){
        newPElement.textContent = message;
        return;
    }   
    let codeletters = "01";
    let codedMessage = "";

    for(let i=0; i<message.length; i++){
        if(message.charAt(i) !== " "){
        codedMessage += codeletters[Math.floor(Math.random()*2)];
        }
        else {codedMessage += " ";}
    }

    newPElement.textContent = codedMessage;
    time += 20;
    }

    setInterval(scramble, 100);
}

let rearrange = () => {
     
}


textScrambler("test message");
*/
let message1 = "test message";
let message = "Web developer. Knowledge of HTML, CSS, Javascript, MySQL, Bubble.io and other technologies. Feel free to browse through my projects :)";
let parentDiv = document.getElementById("description-paragraph-wrap");
let generateSpans = (string) => {

    for(let i=0; i<string.length+1; i++){
    const newSpan = document.createElement("span");
    parentDiv.appendChild(newSpan);
    newSpan.setAttribute("class", "span")
        }
    }
    generateSpans(message);

    
let textScrambler = (message) => {
    console.log(message.length/2);
    let parentDiv = document.getElementById("description-paragraph-wrap");

 
    let span = parentDiv.getElementsByTagName('span');
    let time = 0;

   

    let scrambleSpans = () => {
        
        let codeletters = "01";

    
      for (let i=0; i<message.length; i++){
        if(message.charAt(i) == " "){span[i].textContent = " ";}
          else if(span[i].textContent == "0" || span[i].textContent == "1" || span[i].textContent == ""){
        span[i].textContent = codeletters.charAt(Math.floor(Math.random()*2));}
            
      }
      time += 100;
    }
    setInterval(scrambleSpans, 100);

}

textScrambler(message); 

let iterator = Math.floor(Math.random()*message.length);
let changeSpans = (message, iterator) => {
    let parentDiv = document.getElementById("description-paragraph-wrap");
    let span = parentDiv.getElementsByTagName('span');
    setInterval(function(){ 
        iterator = Math.floor(Math.random()*message.length);
    span[iterator].textContent = message.charAt(iterator);
    if(span[iterator].textContent !== "0" || span[iterator].textContent !== "1"){
        if(iterator>Math.floor(message.length/2)){
        for(let i=iterator; i>=0; i--){
            if(span[i].textContent == "0" || span[i].textContent == "1"){
            span[i].textContent = message.charAt(i);
            break;
            }
        }
    }
        else if (iterator<Math.floor(message.length/2)){
            for(let i=iterator; i<message.length; i++){
                if(span[i].textContent == "0" || span[i].textContent == "1"){
                span[i].textContent = message.charAt(i);
                break;
                }
            }
    }
}

    
    }, 20);

   
}

let newTime = setTimeout(function(){changeSpans(message, iterator)}, 1000);

/*let textScrambler = (message) => {
    let newPElement = document.createElement("p");
    let parentDiv = document.getElementById("description-paragraph-wrap");
    parentDiv.appendChild(newPElement);

    let time = 0;
    let scramble = () => {

    if (time == 1000){
        newPElement.textContent = message;
        return;
    }   
    let codeletters = "01";
    let codedMessage = "";

    for(let i=0; i<message.length; i++){
        codedMessage += codeletters[Math.floor(Math.random()*2)];
    }

    newPElement.textContent = codedMessage;
    time += 100;
    }

    setInterval(scramble, 100);
}

let rearrange = () => {
     
}


textScrambler("test message");
*/