
var box = document.getElementById('target');
var box2 = document.getElementById('target2');

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


box2.addEventListener('mousedown',function(e){
    var newColor = randomColor();
    e.stopPropagation();
    console.log(newColor);
    box2.style.backgroundColor = newColor;
});
