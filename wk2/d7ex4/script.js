var box = document.getElementById('target');

function randomColor(){

    var color = "";
    for (var i=0;i<6;i++){
        var rando = Math.floor(Math.random() * 10);
        rando = rando.toString();
        //console.log(rando);
        color += rando;
        //console.log(color);
    }
    return color;
}


//function changeColor(){
//    box.style.backgroundColor = randomColor();
//}

box.addEventListener('mousedown',function(){
    var newColor = randomColor();
    console.log(newColor);
    box.style.backgroundColor = newColor;
});

box.addEventListener('mouseup',function(){
    var newColor = randomColor();
    console.log(newColor);
    box.style.backgroundColor = newColor;
});
