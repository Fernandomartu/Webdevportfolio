let textScrambler = (message) => {
    let newPElement = document.createElement("p");
    let parentDiv = document.getElementById("description-paragraph-wrap");
    
    let codeletters = "01";
    let codedMessage = "";

    for(let i=0; i<message.length; i++){
        codedMessage += codeletters[Math.floor(Math.random()*2)];
    }

    parentDiv.appendChild(newPElement);
    



}

setInterval(textScrambler("test message"), 200);