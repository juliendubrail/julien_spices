
var canvas = document.getElementById('my_canvas');
var context = canvas.getContext('2d');

var anim = document.getElementById("anim_canvas").getContext("2d");


context.strokeStyle = 'black';
context.beginPath();
context.arc(150, 150, 50, 0, 2 * Math.PI);
context.moveTo(150, 200);
context.lineTo(150,325);
context.moveTo(150,325);
context.lineTo(200,400);
context.moveTo(150,325);
context.lineTo(100,400);
context.moveTo(150,250);
context.lineTo(100,200);
context.moveTo(150,250);
context.lineTo(200,200);
context.stroke();

var image = document.getElementById('my_canvas');
anim.drawImage(image, 150, 150);

function clearCanvas(){
    anim.clearRect(0,0,1000,1000);
}

var moveRight = 0;
var moveUp = 0;


document.addEventListener("keydown", function(e){
    if (e.keyCode===37) {
        clearCanvas();
        anim.drawImage(image, moveRight-=5, 0);
    }
    if (e.keyCode===38){
        clearCanvas();
        anim.drawImage(image, 0, moveUp-=5);
    }
    if (e.keyCode===39){
        clearCanvas();
        anim.drawImage(image, moveRight+=5, 0);

    }
    if (e.keyCode===40){
        clearCanvas();
        anim.drawImage(image, moveUp+=5, 0);

    }
});



// function convertCanvasToImage(canvas) {
//     var image = new Image();
//     image.src = canvas.toDataURL("image/png");
//     return image;
// }
//
// convertCanvasToImage(context);
