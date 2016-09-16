
var mouseX = 0;
var mouseY = 0;
var box = document.getElementById('target');

function getMousePosition(e){
    mouseX = e.clientX;
    mouseY = e.clientY;
    console.log(mouseX , mouseY);
    box.style.left = (e.clientX - 50) + "px";
    box.style.top =  (e.clientY - 50) + "px";
}

document.documentElement.addEventListener('mousemove',getMousePosition);
