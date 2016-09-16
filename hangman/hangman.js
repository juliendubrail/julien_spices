// define the list of guess words
var words = ['paris','rome','madrid','berlin','london'];
var rando = document.getElementById('rando');

// split the letters

var alphabet='abcdefghijklmnopqrstuvwxyz'.split('');
console.log(alphabet); // test the split

// choose a random word
//console.log(randomWord);

var randomWord = words[Math.floor(Math.random()*words.length)]; // choose a random word
console.log(randomWord);

function RandomWord(){
    var requestStr = new XMLHttpRequest;
    requestStr.open('GET', 'http://www.setgetgo.com/randomword/get.php?len=8');
    requestStr.send();
    requestStr.addEventListener('readystatechange', function() {
        if (requestStr.readyState == XMLHttpRequest.DONE) {
            var word = requestStr.responseText;
            console.log(word);
            rando.value = word;

            //return word;
        }
        var status;
        try{
            status = requestStr.status;
        }catch(e){
            console.log("not ready");
            return;
        }
        if (status !=200) {
            return;
        }

    });

}

RandomWord();



// REPLACE THE LETTERS BY UNDERSCORES

function underscores(randomWord){
    var under = [];

    for (var i=0;i<randomWord.length;i++){
        under = under + '_ ';
    }
    //console.log(under);
    return under;
}


// INPUT LETTER
var input = document.getElementById('input');
var result = document.getElementById('result');

under = underscores(randomWord);
console.log(typeof(under));

input.addEventListener('keyup',function(e){

    under = under.split(' ');

    for (var i=0; i<randomWord.length;i++)
  {
        if(e.key.toLowerCase() == randomWord[i]) {
            under[i] = e.key;
            result[i] = e.key;
            //document.getElementById('result').value=e.key;
        }

    }
    under = under.join(' ');
    console.log(under);
    return under;
});


// BUTTON START TO CHOOSE word

var button = document.getElementById('start');
//var result = document.getElementById('result');

button.addEventListener('click', function(){
    result.value = underscores(randomWord);
});


// function getLetter() {
//     //console.log(document.getElementById("letter").value);
//     var letter = document.getElementById("input").value;
//     return letter;
// }
//
// var letter = getLetter();



var under = underscores(randomWord);

console.log(randomWord);

input.addEventListener('keyup', function(e){
    var letter = e.key.toLowerCase();
    var wordToArr = result.value.split(' ');
    for (var i=0; i < randomWord.length; i++){
        if (letter == randomWord[i]){
            wordToArr[i] = letter;
        }
        result.value = wordToArr.join(' ');
    }
    input.value = '';
});








var canvas = document.getElementById('my_canvas');
var context = canvas.getContext('2d');

var anim = document.getElementById("anim_canvas").getContext("2d");


context.strokeStyle = 'black';
context.beginPath();
context.arc(150, 150, 50, 0, 2 * Math.PI);
context.moveTo(150,0);
context.lineTo(150,100);
context.moveTo(150,0);
context.lineTo(0,0);
context.moveTo(150,200);
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





function myfunction(){
    console.log("Hello!");
}

function chooseWord(){
    return randomWord;
}

underscores(randomWord);
myfunction();
