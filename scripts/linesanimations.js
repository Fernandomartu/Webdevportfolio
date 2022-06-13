
let nameWrap = document.getElementById("name-wrap");
let descriptionParagraph = document.getElementById("description-paragraph-wrap");
let leftColumnWrap = document.getElementById("left-column-wrap");


let moveNameWrap = () => {
    leftColumnWrap.style.left = '150px';
    nameWrap.style.fontSize = "50px";
    descriptionParagraph.style.display = "inline";
}

moveNameWrap();