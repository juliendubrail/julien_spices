var headlines = document.getElementsByClassName('list');
var container = document.getElementById('container');
var moveLeft = 1000;

function moveHeadLines() {
    moveLeft = moveLeft - 2;
    container.style.left = moveLeft + "px";


    if (container.style.left <= 0 + "px") {
        //headlines[0].style.color = "red";
        var firstChild = container.headlines[0];
        //container.removeChild(firstChild);
        container.appendChild(firstChild);
    }



    window.requestAnimationFrame(moveHeadLines);
}

window.requestAnimationFrame(moveHeadLines);
