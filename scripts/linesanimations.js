
let nameWrap = document.getElementById("name-wrap");
let mainBodyWrap = document.getElementById("main-body-wrap");
let nameDescWrap = document.getElementById("name-desc-wrap");
let testWrap = document.getElementById("test-wrap");
let nameSpans = nameWrap.children;
console.log(nameSpans);
/*let song = new Audio('./sound files/fightagainst.m4a');*/



let loadNextAnim = () => {
    const script = document.createElement('script');
    script.src = './scripts/test.js';
    document.head.prepend(script);
    }

loadNextAnim();
