
let nameWrap = document.getElementById("name-wrap");
let descriptionParagraph = document.getElementById("description-paragraph-wrap");
let mainBodyWrap = document.getElementById("main-body-wrap");
let nameDescWrap = document.getElementById("name-desc-wrap");
let testWrap = document.getElementById("test-wrap");
let song = new Audio('./sound files/fightagainst.m4a');

let moveNameWrap = () => {
    song.play();
    nameDescWrap.style.width = "50%";
    nameWrap.style.fontSize = "50px";

}

moveNameWrap();