let navOption = document.getElementsByClassName('nav-option');
let underliner = document.getElementById("underliner");

let moveUnderlineOne = () => {
        underliner.style.left = "9%";
}

let moveUnderlineTwo = () => {
    underliner.style.left = "34%";
    underliner.style.width = "88px";
}

let moveUnderlineThree = () => {
    underliner.style.left = "59.2%";
    underliner.style.width = "85px";
}

let moveUnderlineFour = () => {
    underliner.style.left = "83.3%";
    underliner.style.width = "105px";
}

navOption[0].addEventListener("mouseover", moveUnderlineOne, false);
navOption[1].addEventListener("mouseover", moveUnderlineTwo, false);
navOption[2].addEventListener("mouseover", moveUnderlineThree, false);
navOption[3].addEventListener("mouseover", moveUnderlineFour, false);
