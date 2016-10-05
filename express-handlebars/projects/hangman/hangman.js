// var rando = document.getElementById('rando');
var button = document.getElementById('start');
var again = document.getElementById('again');
var resolve  = document.getElementById("resolve");
var charInput = document.getElementById('input');
var outputField = document.getElementById('result');
var showGuess = document.getElementById('showGuess');
var fullWord = document.getElementById('fullword');


var a = document.getElementById('a');
var b = document.getElementById('b');
var c = document.getElementById('c');
var d = document.getElementById('d');
var e = document.getElementById('e');
var f = document.getElementById('f');
var g = document.getElementById('g');
var h = document.getElementById('h');
var i = document.getElementById('i');
var j = document.getElementById('j');
var k = document.getElementById('k');
var l = document.getElementById('l');
var m = document.getElementById('m');
var n = document.getElementById('n');
var o = document.getElementById('o');
var p = document.getElementById('p');
var q = document.getElementById('q');
var r = document.getElementById('r');
var s = document.getElementById('s');
var t = document.getElementById('t');
var u = document.getElementById('u');
var v = document.getElementById('v');
var w = document.getElementById('w');
var x = document.getElementById('x');
var y = document.getElementById('y');
var z = document.getElementById('z');
var one = document.getElementById('1');
var two = document.getElementById('2');
var three = document.getElementById('3');
var four = document.getElementById('4');
var five = document.getElementById('5');
var six = document.getElementById('6');
var seven = document.getElementById('7');
var eight = document.getElementById('8');
var nine = document.getElementById('9');
var zero = document.getElementById('0');


var canvas = document.getElementById('my_canvas');
var context = canvas.getContext('2d');

var img1 = new Image();
var img2 = new Image();
var img3 = new Image();
var img4 = new Image();
var img5 = new Image();
var img6 = new Image();

img1.src = 'img/tete.jpg';
img2.src = 'img/corsp.jpg';
img3.src = 'img/brasgauche.jpg';
img4.src = 'img/brasdroit.jpg';
img5.src = 'img/jambegauche.jpg';
img6.src = 'img/jambedroite.jpg';

img1.onload = function(){
    canvas.width = img1.width;
    canvas.height = img1.height;
    context.globalAlpha = 0.2;
};



again.addEventListener('click', function(){
    location.reload();
    getRandomWord();
});



var lives = 6;


function makeUnderscores(randomWord){
    var under = [];
    for (var i=0;i<randomWord.length;i++){
        under = under + '_ ';
    }
    return under;
}



button.addEventListener('click', function(){
    getRandomWord();
});

function getRandomWord(){

    var randomNumber =  Math.floor(Math.random()*88);

    var requestStr = new XMLHttpRequest;
    requestStr.open('GET', 'http://swapi.co/api/people/' + randomNumber);
    requestStr.send();
    requestStr.addEventListener('readystatechange', function() {
        if (requestStr.readyState == XMLHttpRequest.DONE) {
            var result = JSON.parse(requestStr.responseText);
            var word = result.name.toLowerCase();
            word = word.replace(/ /g,"-");
            // rando.value = word;
            var underscores = makeUnderscores(word);

            outputField.value = underscores;

            resolve.addEventListener('click', function(){
                outputField.value = word;
            });

            a.addEventListener('click', function(){
                console.log("hi");
                var letter = "a";
                var reveal = outputField.value.split(' ');
                for (var i=0; i < word.length; i++){
                    if (letter == word[i]){
                        reveal[i] = letter;
                        a.className = "lettersSelected" ;
                    }
                    outputField.value = reveal.join(' ');
                }
                if (word.indexOf(letter) == -1)
                {
                    console.log("guess is not in solution");
                    lives --;
                    a.className = "wrongLetter" ;
                }
                if (lives == 5){
                    context.drawImage(img1, 0, 0);}
                if (lives == 4){
                    context.drawImage(img2, 0, 0);}
                if (lives == 3){
                    context.drawImage(img3, 0, 0);
                }
                if (lives == 2){
                    context.drawImage(img4, 0, 0);
                }
                if (lives == 1){
                    context.drawImage(img5, 0, 0);
                }
                if (lives == 0){
                    alert("You lose!");
                    context.drawImage(img6, 0, 0);
                }
                if(outputField.value.indexOf("_") == -1){
                    alert("You got it! You sure know your Star Wars, ... nerd.");
                    if(lives == 6){
                        alert("The Force is Strong in this one");
                    }
                }
            });

            b.addEventListener('click', function(){
                var letter = "b";
                var reveal = outputField.value.split(' ');
                for (var i=0; i < word.length; i++){
                    if (letter == word[i]){
                        reveal[i] = letter;
                        b.className = "lettersSelected" ;
                    }
                    outputField.value = reveal.join(' ');
                }
                if (word.indexOf(letter) == -1)
                {
                    console.log("guess is not in solution");
                    lives --;
                    b.className = "wrongLetter" ;}
                if (lives == 5){
                    context.drawImage(img1, 0, 0);}
                if (lives == 4){
                    context.drawImage(img2, 0, 0);}
                if (lives == 3){
                    context.drawImage(img3, 0, 0);
                }
                if (lives == 2){
                    context.drawImage(img4, 0, 0);
                }
                if (lives == 1){
                    context.drawImage(img5, 0, 0);
                }
                if (lives == 0){
                    alert("You lose!");
                    context.drawImage(img6, 0, 0);
                }
                if(outputField.value.indexOf("_") == -1){
                    alert("You got it! You sure know your Star Wars, ... nerd.");
                    if(lives == 6){
                        alert("The Force is Strong in this one");
                    }
                }
            });

            c.addEventListener('click', function(){
                console.log("hi");
                var letter = "c";
                var reveal = outputField.value.split(' ');
                for (var i=0; i < word.length; i++){
                    if (letter == word[i]){
                        reveal[i] = letter;
                        c.className = "lettersSelected" ;
                    }
                    outputField.value = reveal.join(' ');

                }
                if (word.indexOf(letter) == -1)
                {
                    console.log("guess is not in solution");
                    lives --;
                    c.className = "wrongLetter" ;
                }
                if (lives == 5){
                    context.drawImage(img1, 0, 0);}
                if (lives == 4){
                    context.drawImage(img2, 0, 0);}
                if (lives == 3){
                    context.drawImage(img3, 0, 0);
                }
                if (lives == 2){
                    context.drawImage(img4, 0, 0);
                }
                if (lives == 1){
                    context.drawImage(img5, 0, 0);
                }
                if (lives == 0){
                    alert("You lose!");
                    context.drawImage(img6, 0, 0);
                }
                if(outputField.value.indexOf("_") == -1){
                    alert("You got it! You sure know your Star Wars, ... nerd.");
                    if(lives == 6){
                        alert("The Force is Strong in this one");
                    }
                }
            });

            d.addEventListener('click', function(){
                console.log("hi");
                var letter = "d";
                var reveal = outputField.value.split(' ');
                for (var i=0; i < word.length; i++){
                    if (letter == word[i]){
                        reveal[i] = letter;
                        d.className = "lettersSelected" ;
                    }
                    outputField.value = reveal.join(' ');
                }
                if (word.indexOf(letter) == -1)
                {
                    console.log("guess is not in solution");
                    lives --;
                    d.className = "wrongLetter" ;

                }
                if (lives == 5){
                    context.drawImage(img1, 0, 0);}
                if (lives == 4){
                    context.drawImage(img2, 0, 0);}
                if (lives == 3){
                    context.drawImage(img3, 0, 0);
                }
                if (lives == 2){
                    context.drawImage(img4, 0, 0);
                }
                if (lives == 1){
                    context.drawImage(img5, 0, 0);
                }
                if (lives == 0){
                    alert("You lose!");
                    context.drawImage(img6, 0, 0);
                }
                if(outputField.value.indexOf("_") == -1){
                    alert("You got it! You sure know your Star Wars, ... nerd.");
                    if(lives == 6){
                        alert("The Force is Strong in this one");
                    }
                }
            });

            e.addEventListener('click', function(){
                console.log("hi");
                var letter = "e";
                var reveal = outputField.value.split(' ');
                for (var i=0; i < word.length; i++){
                    if (letter == word[i]){
                        reveal[i] = letter;
                        e.className = "lettersSelected" ;
                    }
                    outputField.value = reveal.join(' ');

                }
                if (word.indexOf(letter) == -1)
                {
                    console.log("guess is not in solution");
                    lives --;
                    e.className = "wrongLetter" ;
                }
                if (lives == 5){
                    context.drawImage(img1, 0, 0);}
                if (lives == 4){
                    context.drawImage(img2, 0, 0);}
                if (lives == 3){
                    context.drawImage(img3, 0, 0);
                }
                if (lives == 2){
                    context.drawImage(img4, 0, 0);
                }
                if (lives == 1){
                    context.drawImage(img5, 0, 0);
                }
                if (lives == 0){
                    alert("You lose!");
                    context.drawImage(img6, 0, 0);
                }
                if(outputField.value.indexOf("_") == -1){
                    alert("You got it! You sure know your Star Wars, ... nerd.");
                    if(lives == 6){
                        alert("The Force is Strong in this one");
                    }
                }
            });

            f.addEventListener('click', function(){
                console.log("hi");
                var letter = "f";
                var reveal = outputField.value.split(' ');
                for (var i=0; i < word.length; i++){
                    if (letter == word[i]){
                        reveal[i] = letter;
                        f.className = "lettersSelected" ;
                    }
                    outputField.value = reveal.join(' ');

                }
                if (word.indexOf(letter) == -1)
                {
                    console.log("guess is not in solution");
                    lives --;
                    f.className = "wrongLetter" ;

                }
                if (lives == 5){
                    context.drawImage(img1, 0, 0);}
                if (lives == 4){
                    context.drawImage(img2, 0, 0);}
                if (lives == 3){
                    context.drawImage(img3, 0, 0);
                }
                if (lives == 2){
                    context.drawImage(img4, 0, 0);
                }
                if (lives == 1){
                    context.drawImage(img5, 0, 0);
                }
                if (lives == 0){
                    alert("You lose!");
                    context.drawImage(img6, 0, 0);
                }
                if(outputField.value.indexOf("_") == -1){
                    alert("You got it! You sure know your Star Wars, ... nerd.");
                    if(lives == 6){
                        alert("The Force is Strong in this one");
                    }
                }
            });

            g.addEventListener('click', function(){
                console.log("hi");
                var letter = "g";
                var reveal = outputField.value.split(' ');
                for (var i=0; i < word.length; i++){
                    if (letter == word[i]){
                        reveal[i] = letter;
                        g.className = "lettersSelected" ;
                    }
                    outputField.value = reveal.join(' ');

                }
                if (word.indexOf(letter) == -1)
                {
                    console.log("guess is not in solution");
                    lives --;
                    g.className = "wrongLetter" ;

                }
                if (lives == 5){
                    context.drawImage(img1, 0, 0);}
                if (lives == 4){
                    context.drawImage(img2, 0, 0);}
                if (lives == 3){
                    context.drawImage(img3, 0, 0);
                }
                if (lives == 2){
                    context.drawImage(img4, 0, 0);
                }
                if (lives == 1){
                    context.drawImage(img5, 0, 0);
                }
                if (lives == 0){
                    alert("You lose!");
                    context.drawImage(img6, 0, 0);
                }
                if(outputField.value.indexOf("_") == -1){
                    alert("You got it! You sure know your Star Wars, ... nerd.");
                    if(lives == 6){
                        alert("The Force is Strong in this one");
                    }
                }
            });

            h.addEventListener('click', function(){
                console.log("hi");
                var letter = "h";
                var reveal = outputField.value.split(' ');
                for (var i=0; i < word.length; i++){
                    if (letter == word[i]){
                        reveal[i] = letter;
                        h.className = "lettersSelected" ;
                    }
                    outputField.value = reveal.join(' ');

                }
                if (word.indexOf(letter) == -1)
                {
                    console.log("guess is not in solution");
                    lives --;
                    h.className = "wrongLetter" ;

                }
                if (lives == 5){
                    context.drawImage(img1, 0, 0);}
                if (lives == 4){
                    context.drawImage(img2, 0, 0);}
                if (lives == 3){
                    context.drawImage(img3, 0, 0);
                }
                if (lives == 2){
                    context.drawImage(img4, 0, 0);
                }
                if (lives == 1){
                    context.drawImage(img5, 0, 0);
                }
                if (lives == 0){
                    alert("You lose!");
                    context.drawImage(img6, 0, 0);
                }
                if(outputField.value.indexOf("_") == -1){
                    alert("You got it! You sure know your Star Wars, ... nerd.");
                    if(lives == 6){
                        alert("The Force is Strong in this one");
                    }
                }
            });

            i.addEventListener('click', function(){
                console.log("hi");
                var letter = "i";
                var reveal = outputField.value.split(' ');
                for (var i=0; i < word.length; i++){
                    if (letter == word[i]){
                        reveal[i] = letter;
                        i.className = "lettersSelected" ;
                    }
                    outputField.value = reveal.join(' ');

                }
                if (word.indexOf(letter) == -1)
                {
                    console.log("guess is not in solution");
                    lives --;
                    i.className = "wrongLetter" ;
                }
                if (lives == 5){
                    context.drawImage(img1, 0, 0);}
                if (lives == 4){
                    context.drawImage(img2, 0, 0);}
                if (lives == 3){
                    context.drawImage(img3, 0, 0);
                }
                if (lives == 2){
                    context.drawImage(img4, 0, 0);
                }
                if (lives == 1){
                    context.drawImage(img5, 0, 0);
                }
                if (lives == 0){
                    alert("You lose!");
                    context.drawImage(img6, 0, 0);
                }
                if(outputField.value.indexOf("_") == -1){
                    alert("You got it! You sure know your Star Wars, ... nerd.");
                    if(lives == 6){
                        alert("The Force is Strong in this one");
                    }
                }
            });

            j.addEventListener('click', function(){
                console.log("hi");
                var letter = "j";
                var reveal = outputField.value.split(' ');
                for (var i=0; i < word.length; i++){
                    if (letter == word[i]){
                        reveal[i] = letter;
                        j.className = "lettersSelected" ;
                    }
                    outputField.value = reveal.join(' ');

                }
                if (word.indexOf(letter) == -1)
                {
                    console.log("guess is not in solution");
                    lives --;
                    j.className = "wrongLetter" ;

                }
                if (lives == 5){
                    context.drawImage(img1, 0, 0);}
                if (lives == 4){
                    context.drawImage(img2, 0, 0);}
                if (lives == 3){
                    context.drawImage(img3, 0, 0);
                }
                if (lives == 2){
                    context.drawImage(img4, 0, 0);
                }
                if (lives == 1){
                    context.drawImage(img5, 0, 0);
                }
                if (lives == 0){
                    alert("You lose!");
                    context.drawImage(img6, 0, 0);
                }
                if(outputField.value.indexOf("_") == -1){
                    alert("You got it! You sure know your Star Wars, ... nerd.");
                    if(lives == 6){
                        alert("The Force is Strong in this one");
                    }
                }
            });

            k.addEventListener('click', function(){
                console.log("hi");
                var letter = "k";
                var reveal = outputField.value.split(' ');
                for (var i=0; i < word.length; i++){
                    if (letter == word[i]){
                        reveal[i] = letter;
                        k.className = "lettersSelected" ;
                    }
                    outputField.value = reveal.join(' ');

                }
                if (word.indexOf(letter) == -1)
                {
                    console.log("guess is not in solution");
                    lives --;
                    k.className = "wrongLetter" ;

                }
                if (lives == 5){
                    context.drawImage(img1, 0, 0);}
                if (lives == 4){
                    context.drawImage(img2, 0, 0);}
                if (lives == 3){
                    context.drawImage(img3, 0, 0);
                }
                if (lives == 2){
                    context.drawImage(img4, 0, 0);
                }
                if (lives == 1){
                    context.drawImage(img5, 0, 0);
                }
                if (lives == 0){
                    alert("You lose!");
                    context.drawImage(img6, 0, 0);
                }
                if(outputField.value.indexOf("_") == -1){
                    alert("You got it! You sure know your Star Wars, ... nerd.");
                    if(lives == 6){
                        alert("The Force is Strong in this one");
                    }
                }
            });

            l.addEventListener('click', function(){
                console.log("hi");
                var letter = "l";
                var reveal = outputField.value.split(' ');
                for (var i=0; i < word.length; i++){
                    if (letter == word[i]){
                        reveal[i] = letter;
                        l.className = "lettersSelected" ;
                    }
                    outputField.value = reveal.join(' ');

                }
                if (word.indexOf(letter) == -1)
                {
                    console.log("guess is not in solution");
                    lives --;
                    l.className = "wrongLetter" ;

                }
                if (lives == 5){
                    context.drawImage(img1, 0, 0);}
                if (lives == 4){
                    context.drawImage(img2, 0, 0);}
                if (lives == 3){
                    context.drawImage(img3, 0, 0);
                }
                if (lives == 2){
                    context.drawImage(img4, 0, 0);
                }
                if (lives == 1){
                    context.drawImage(img5, 0, 0);
                }
                if (lives == 0){
                    alert("You lose!");
                    context.drawImage(img6, 0, 0);
                }
                if(outputField.value.indexOf("_") == -1){
                    alert("You got it! You sure know your Star Wars, ... nerd.");
                    if(lives == 6){
                        alert("The Force is Strong in this one");
                    }
                }
            });

            m.addEventListener('click', function(){
                console.log("hi");
                var letter = "m";
                var reveal = outputField.value.split(' ');
                for (var i=0; i < word.length; i++){
                    if (letter == word[i]){
                        reveal[i] = letter;
                        m.className = "lettersSelected" ;
                    }
                    outputField.value = reveal.join(' ');
                }
                if (word.indexOf(letter) == -1)
                {
                    console.log("guess is not in solution");
                    lives --;
                    m.className = "wrongLetter" ;

                }
                if (lives == 5){
                    context.drawImage(img1, 0, 0);}
                if (lives == 4){
                    context.drawImage(img2, 0, 0);}
                if (lives == 3){
                    context.drawImage(img3, 0, 0);
                }
                if (lives == 2){
                    context.drawImage(img4, 0, 0);
                }
                if (lives == 1){
                    context.drawImage(img5, 0, 0);
                }
                if (lives == 0){
                    alert("You lose!");
                    context.drawImage(img6, 0, 0);
                }
                if(outputField.value.indexOf("_") == -1){
                    alert("You got it! You sure know your Star Wars, ... nerd.");
                    if(lives == 6){
                        alert("The Force is Strong in this one");
                    }
                }
            });

            n.addEventListener('click', function(){
                console.log("hi");
                var letter = "n";
                var reveal = outputField.value.split(' ');
                for (var i=0; i < word.length; i++){
                    if (letter == word[i]){
                        reveal[i] = letter;
                        n.className = "lettersSelected" ;
                    }
                    outputField.value = reveal.join(' ');
                }
                if (word.indexOf(letter) == -1)
                {
                    console.log("guess is not in solution");
                    lives --;
                    n.className = "wrongLetter" ;
                }
                if (lives == 5){
                    context.drawImage(img1, 0, 0);}
                if (lives == 4){
                    context.drawImage(img2, 0, 0);}
                if (lives == 3){
                    context.drawImage(img3, 0, 0);
                }
                if (lives == 2){
                    context.drawImage(img4, 0, 0);
                }
                if (lives == 1){
                    context.drawImage(img5, 0, 0);
                }
                if (lives == 0){
                    alert("You lose!");
                    context.drawImage(img6, 0, 0);
                }
                if(outputField.value.indexOf("_") == -1){
                    alert("You got it! You sure know your Star Wars, ... nerd.");
                    if(lives == 6){
                        alert("The Force is Strong in this one");
                    }
                }
            });

            o.addEventListener('click', function(){
                console.log("hi");
                var letter = "o";
                var reveal = outputField.value.split(' ');
                for (var i=0; i < word.length; i++){
                    if (letter == word[i]){
                        reveal[i] = letter;
                        o.className = "lettersSelected" ;
                    }
                    outputField.value = reveal.join(' ');
                }
                if (word.indexOf(letter) == -1)
                {
                    console.log("guess is not in solution");
                    lives --;
                    o.className = "wrongLetter" ;

                }
                if (lives == 5){
                    context.drawImage(img1, 0, 0);}
                if (lives == 4){
                    context.drawImage(img2, 0, 0);}
                if (lives == 3){
                    context.drawImage(img3, 0, 0);
                }
                if (lives == 2){
                    context.drawImage(img4, 0, 0);
                }
                if (lives == 1){
                    context.drawImage(img5, 0, 0);
                }
                if (lives == 0){
                    alert("You lose!");
                    context.drawImage(img6, 0, 0);
                }
                if(outputField.value.indexOf("_") == -1){
                    alert("You got it! You sure know your Star Wars, ... nerd.");
                    if(lives == 6){
                        alert("The Force is Strong in this one");
                    }
                }
            });

            p.addEventListener('click', function(){
                console.log("hi");
                var letter = "p";
                var reveal = outputField.value.split(' ');
                for (var i=0; i < word.length; i++){
                    if (letter == word[i]){
                        reveal[i] = letter;
                        p.className = "lettersSelected" ;
                    }
                    outputField.value = reveal.join(' ');

                }
                if (word.indexOf(letter) == -1)
                {
                    console.log("guess is not in solution");
                    lives --;
                    p.className = "wrongLetter" ;

                }
                if (lives == 5){
                    context.drawImage(img1, 0, 0);}
                if (lives == 4){
                    context.drawImage(img2, 0, 0);}
                if (lives == 3){
                    context.drawImage(img3, 0, 0);
                }
                if (lives == 2){
                    context.drawImage(img4, 0, 0);
                }
                if (lives == 1){
                    context.drawImage(img5, 0, 0);
                }
                if (lives == 0){
                    alert("You lose!");
                    context.drawImage(img6, 0, 0);
                }
                if(outputField.value.indexOf("_") == -1){
                    alert("You got it! You sure know your Star Wars, ... nerd.");
                    if(lives == 6){
                        alert("The Force is Strong in this one");
                    }
                }
            });

            q.addEventListener('click', function(){
                console.log("hi");
                var letter = "q";
                var reveal = outputField.value.split(' ');
                for (var i=0; i < word.length; i++){
                    if (letter == word[i]){
                        reveal[i] = letter;
                        q.className = "lettersSelected" ;
                    }
                    outputField.value = reveal.join(' ');

                }
                if (word.indexOf(letter) == -1)
                {
                    console.log("guess is not in solution");
                    lives --;
                    q.className = "wrongLetter" ;

                }
                if (lives == 5){
                    context.drawImage(img1, 0, 0);}
                if (lives == 4){
                    context.drawImage(img2, 0, 0);}
                if (lives == 3){
                    context.drawImage(img3, 0, 0);
                }
                if (lives == 2){
                    context.drawImage(img4, 0, 0);
                }
                if (lives == 1){
                    context.drawImage(img5, 0, 0);
                }
                if (lives == 0){
                    alert("You lose!");
                    context.drawImage(img6, 0, 0);
                }
                if(outputField.value.indexOf("_") == -1){
                    alert("You got it! You sure know your Star Wars, ... nerd.");
                    if(lives == 6){
                        alert("The Force is Strong in this one");
                    }
                }
            });

            r.addEventListener('click', function(){
                console.log("hi");
                var letter = "r";
                var reveal = outputField.value.split(' ');
                for (var i=0; i < word.length; i++){
                    if (letter == word[i]){
                        reveal[i] = letter;
                        r.className = "lettersSelected" ;
                    }
                    outputField.value = reveal.join(' ');

                }
                if (word.indexOf(letter) == -1)
                {
                    console.log("guess is not in solution");
                    lives --;
                    r.className = "wrongLetter" ;

                }
                if (lives == 5){
                    context.drawImage(img1, 0, 0);}
                if (lives == 4){
                    context.drawImage(img2, 0, 0);}
                if (lives == 3){
                    context.drawImage(img3, 0, 0);
                }
                if (lives == 2){
                    context.drawImage(img4, 0, 0);
                }
                if (lives == 1){
                    context.drawImage(img5, 0, 0);
                }
                if (lives == 0){
                    alert("You lose!");
                    context.drawImage(img6, 0, 0);
                }
                if(outputField.value.indexOf("_") == -1){
                    alert("You got it! You sure know your Star Wars, ... nerd.");
                    if(lives == 6){
                        alert("The Force is Strong in this one");
                    }
                }
            });

            s.addEventListener('click', function(){
                console.log("hi");
                var letter = "s";
                var reveal = outputField.value.split(' ');
                for (var i=0; i < word.length; i++){
                    if (letter == word[i]){
                        reveal[i] = letter;
                        s.className = "lettersSelected" ;
                    }
                    outputField.value = reveal.join(' ');

                }
                if (word.indexOf(letter) == -1)
                {
                    console.log("guess is not in solution");
                    lives --;
                    s.className = "wrongLetter" ;

                }
                if (lives == 5){
                    context.drawImage(img1, 0, 0);}
                if (lives == 4){
                    context.drawImage(img2, 0, 0);}
                if (lives == 3){
                    context.drawImage(img3, 0, 0);
                }
                if (lives == 2){
                    context.drawImage(img4, 0, 0);
                }
                if (lives == 1){
                    context.drawImage(img5, 0, 0);
                }
                if (lives == 0){
                    alert("You lose!");
                    context.drawImage(img6, 0, 0);
                }
                if(outputField.value.indexOf("_") == -1){
                    alert("You got it! You sure know your Star Wars, ... nerd.");
                    if(lives == 6){
                        alert("The Force is Strong in this one");
                    }
                }
            });

            t.addEventListener('click', function(){
                console.log("hi");
                var letter = "t";
                var reveal = outputField.value.split(' ');
                for (var i=0; i < word.length; i++){
                    if (letter == word[i]){
                        reveal[i] = letter;
                        t.className = "lettersSelected" ;
                    }
                    outputField.value = reveal.join(' ');

                }
                if (word.indexOf(letter) == -1)
                {
                    console.log("guess is not in solution");
                    lives --;
                    t.className = "wrongLetter" ;
                }
                if (lives == 5){
                    context.drawImage(img1, 0, 0);}
                if (lives == 4){
                    context.drawImage(img2, 0, 0);}
                if (lives == 3){
                    context.drawImage(img3, 0, 0);
                }
                if (lives == 2){
                    context.drawImage(img4, 0, 0);
                }
                if (lives == 1){
                    context.drawImage(img5, 0, 0);
                }
                if (lives == 0){
                    alert("You lose!");
                    context.drawImage(img6, 0, 0);
                }
                if(outputField.value.indexOf("_") == -1){
                    alert("You got it! You sure know your Star Wars, ... nerd.");
                    if(lives == 6){
                        alert("The Force is Strong in this one");
                    }
                }
            });

            u.addEventListener('click', function(){
                console.log("hi");
                var letter = "u";
                var reveal = outputField.value.split(' ');
                for (var i=0; i < word.length; i++){
                    if (letter == word[i]){
                        reveal[i] = letter;
                        u.className = "lettersSelected" ;
                    }
                    outputField.value = reveal.join(' ');

                }
                if (word.indexOf(letter) == -1)
                {
                    console.log("guess is not in solution");
                    lives --;
                    u.className = "wrongLetter" ;
                }
                if (lives == 5){
                    context.drawImage(img1, 0, 0);}
                if (lives == 4){
                    context.drawImage(img2, 0, 0);}
                if (lives == 3){
                    context.drawImage(img3, 0, 0);
                }
                if (lives == 2){
                    context.drawImage(img4, 0, 0);
                }
                if (lives == 1){
                    context.drawImage(img5, 0, 0);
                }
                if (lives == 0){
                    alert("You lose!");
                    context.drawImage(img6, 0, 0);
                }
                if(outputField.value.indexOf("_") == -1){
                    alert("You got it! You sure know your Star Wars, ... nerd.");
                    if(lives == 6){
                        alert("The Force is Strong in this one");
                    }
                }
            });

            v.addEventListener('click', function(){
                console.log("hi");
                var letter = "v";
                var reveal = outputField.value.split(' ');
                for (var i=0; i < word.length; i++){
                    if (letter == word[i]){
                        reveal[i] = letter;
                        v.className = "lettersSelected" ;
                    }
                    outputField.value = reveal.join(' ');

                }
                if (word.indexOf(letter) == -1)
                {
                    console.log("guess is not in solution");
                    lives --;
                    v.className = "wrongLetter" ;
                }
                if (lives == 5){
                    context.drawImage(img1, 0, 0);}
                if (lives == 4){
                    context.drawImage(img2, 0, 0);}
                if (lives == 3){
                    context.drawImage(img3, 0, 0);
                }
                if (lives == 2){
                    context.drawImage(img4, 0, 0);
                }
                if (lives == 1){
                    context.drawImage(img5, 0, 0);
                }
                if (lives == 0){
                    alert("You lose!");
                    context.drawImage(img6, 0, 0);
                }
                if(outputField.value.indexOf("_") == -1){
                    alert("You got it! You sure know your Star Wars, ... nerd.");
                    if(lives == 6){
                        alert("The Force is Strong in this one");
                    }
                }
            });

            w.addEventListener('click', function(){
                console.log("hi");
                var letter = "w";
                var reveal = outputField.value.split(' ');
                for (var i=0; i < word.length; i++){
                    if (letter == word[i]){
                        reveal[i] = letter;
                        w.className = "lettersSelected" ;
                    }
                    outputField.value = reveal.join(' ');

                }
                if (word.indexOf(letter) == -1)
                {
                    console.log("guess is not in solution");
                    lives --;
                    w.className = "wrongLetter" ;

                }
                if (lives == 5){
                    context.drawImage(img1, 0, 0);}
                if (lives == 4){
                    context.drawImage(img2, 0, 0);}
                if (lives == 3){
                    context.drawImage(img3, 0, 0);
                }
                if (lives == 2){
                    context.drawImage(img4, 0, 0);
                }
                if (lives == 1){
                    context.drawImage(img5, 0, 0);
                }
                if (lives == 0){
                    alert("You lose!");
                    context.drawImage(img6, 0, 0);
                }
                if(outputField.value.indexOf("_") == -1){
                    alert("You got it! You sure know your Star Wars, ... nerd.");
                    if(lives == 6){
                        alert("The Force is Strong in this one");
                    }
                }
            });

            x.addEventListener('click', function(){
                console.log("hi");
                var letter = "x";
                var reveal = outputField.value.split(' ');
                for (var i=0; i < word.length; i++){
                    if (letter == word[i]){
                        reveal[i] = letter;
                        x.className = "lettersSelected" ;
                    }
                    outputField.value = reveal.join(' ');

                }
                if (word.indexOf(letter) == -1)
                {
                    console.log("guess is not in solution");
                    lives --;
                    x.className = "wrongLetter" ;
                }
                if (lives == 5){
                    context.drawImage(img1, 0, 0);}
                if (lives == 4){
                    context.drawImage(img2, 0, 0);}
                if (lives == 3){
                    context.drawImage(img3, 0, 0);
                }
                if (lives == 2){
                    context.drawImage(img4, 0, 0);
                }
                if (lives == 1){
                    context.drawImage(img5, 0, 0);
                }
                if (lives == 0){
                    alert("You lose!");
                    context.drawImage(img6, 0, 0);
                }
                if(outputField.value.indexOf("_") == -1){
                    alert("You got it! You sure know your Star Wars, ... nerd.");
                    if(lives == 6){
                        alert("The Force is Strong in this one");
                    }
                }
            });

            y.addEventListener('click', function(){
                console.log("hi");
                var letter = "y";
                var reveal = outputField.value.split(' ');
                for (var i=0; i < word.length; i++){
                    if (letter == word[i]){
                        reveal[i] = letter;
                        y.className = "lettersSelected" ;
                    }
                    outputField.value = reveal.join(' ');
                }
                if (word.indexOf(letter) == -1)
                {
                    console.log("guess is not in solution");
                    lives --;
                    y.className = "wrongLetter" ;
                }
                if (lives == 5){
                    context.drawImage(img1, 0, 0);}
                if (lives == 4){
                    context.drawImage(img2, 0, 0);}
                if (lives == 3){
                    context.drawImage(img3, 0, 0);
                }
                if (lives == 2){
                    context.drawImage(img4, 0, 0);
                }
                if (lives == 1){
                    context.drawImage(img5, 0, 0);
                }
                if (lives == 0){
                    alert("You lose!");
                    context.drawImage(img6, 0, 0);
                }
                if(outputField.value.indexOf("_") == -1){
                    alert("You got it! You sure know your Star Wars, ... nerd.");
                    if(lives == 6){
                        alert("The Force is Strong in this one");
                    }
                }
            });

            z.addEventListener('click', function(){
                console.log("hi");
                var letter = "z";
                var reveal = outputField.value.split(' ');
                for (var i=0; i < word.length; i++){
                    if (letter == word[i]){
                        reveal[i] = letter;
                        z.className = "lettersSelected" ;
                    }
                    outputField.value = reveal.join(' ');
                }
                if (word.indexOf(letter) == -1)
                {
                    console.log("guess is not in solution");
                    lives --;
                    z.className = "wrongLetter" ;
                }
                if (lives == 5){
                    context.drawImage(img1, 0, 0);}
                if (lives == 4){
                    context.drawImage(img2, 0, 0);}
                if (lives == 3){
                    context.drawImage(img3, 0, 0);
                }
                if (lives == 2){
                    context.drawImage(img4, 0, 0);
                }
                if (lives == 1){
                    context.drawImage(img5, 0, 0);
                }
                if (lives == 0){
                    alert("You lose!");
                    context.drawImage(img6, 0, 0);
                }
                if(outputField.value.indexOf("_") == -1){
                    alert("You got it! You sure know your Star Wars, ... nerd.");
                    if(lives == 6){
                        alert("The Force is Strong in this one");
                    }
                }
            });

            one.addEventListener('click', function(){
                console.log("hi");
                var letter = "1";
                var reveal = outputField.value.split(' ');
                for (var i=0; i < word.length; i++){
                    if (letter == word[i]){
                        reveal[i] = letter;
                        one.className = "lettersSelected" ;
                    }
                    outputField.value = reveal.join(' ');

                }
                if (word.indexOf(letter) == -1)
                {
                    console.log("guess is not in solution");
                    lives --;
                    one.className = "wrongLetter" ;
                }
                if (lives == 5){
                    context.drawImage(img1, 0, 0);}
                if (lives == 4){
                    context.drawImage(img2, 0, 0);}
                if (lives == 3){
                    context.drawImage(img3, 0, 0);
                }
                if (lives == 2){
                    context.drawImage(img4, 0, 0);
                }
                if (lives == 1){
                    context.drawImage(img5, 0, 0);
                }
                if (lives == 0){
                    alert("You lose!");
                    context.drawImage(img6, 0, 0);
                }
                if(outputField.value.indexOf("_") == -1){
                    alert("You got it! You sure know your Star Wars, ... nerd.");
                    if(lives == 6){
                        alert("The Force is Strong in this one");
                    }
                }
            });

            two.addEventListener('click', function(){
                console.log("hi");
                var letter = "2";
                var reveal = outputField.value.split(' ');
                for (var i=0; i < word.length; i++){
                    if (letter == word[i]){
                        reveal[i] = letter;
                        two.className = "lettersSelected" ;
                    }
                    outputField.value = reveal.join(' ');
                }
                if (word.indexOf(letter) == -1)
                {
                    console.log("guess is not in solution");
                    lives --;
                    two.className = "wrongLetter" ;
                }
                if (lives == 5){
                    context.drawImage(img1, 0, 0);}
                if (lives == 4){
                    context.drawImage(img2, 0, 0);}
                if (lives == 3){
                    context.drawImage(img3, 0, 0);
                }
                if (lives == 2){
                    context.drawImage(img4, 0, 0);
                }
                if (lives == 1){
                    context.drawImage(img5, 0, 0);
                }
                if (lives == 0){
                    alert("You lose!");
                    context.drawImage(img6, 0, 0);
                }
                if(outputField.value.indexOf("_") == -1){
                    alert("You got it! You sure know your Star Wars, ... nerd.");
                    if(lives == 6){
                        alert("The Force is Strong in this one");
                    }
                }
            });

            three.addEventListener('click', function(){
                console.log("hi");
                var letter = "3";
                var reveal = outputField.value.split(' ');
                for (var i=0; i < word.length; i++){
                    if (letter == word[i]){
                        reveal[i] = letter;
                        three.className = "lettersSelected" ;
                    }
                    outputField.value = reveal.join(' ');
                }
                if (word.indexOf(letter) == -1)
                {
                    console.log("guess is not in solution");
                    lives --;
                    three.className = "wrongLetter" ;
                }
                if (lives == 5){
                    context.drawImage(img1, 0, 0);}
                if (lives == 4){
                    context.drawImage(img2, 0, 0);}
                if (lives == 3){
                    context.drawImage(img3, 0, 0);
                }
                if (lives == 2){
                    context.drawImage(img4, 0, 0);
                }
                if (lives == 1){
                    context.drawImage(img5, 0, 0);
                }
                if (lives == 0){
                    alert("You lose!");
                    context.drawImage(img6, 0, 0);
                }
                if(outputField.value.indexOf("_") == -1){
                    alert("You got it! You sure know your Star Wars, ... nerd.");
                    if(lives == 6){
                        alert("The Force is Strong in this one");
                    }
                }
            });

            four.addEventListener('click', function(){
                console.log("hi");
                var letter = "4";
                var reveal = outputField.value.split(' ');
                for (var i=0; i < word.length; i++){
                    if (letter == word[i]){
                        reveal[i] = letter;
                        four.className = "lettersSelected" ;
                    }
                    outputField.value = reveal.join(' ');

                }
                if (word.indexOf(letter) == -1)
                {
                    console.log("guess is not in solution");
                    lives --;
                    four.className = "wrongLetter" ;
                }
                if (lives == 5){
                    context.drawImage(img1, 0, 0);}
                if (lives == 4){
                    context.drawImage(img2, 0, 0);}
                if (lives == 3){
                    context.drawImage(img3, 0, 0);
                }
                if (lives == 2){
                    context.drawImage(img4, 0, 0);
                }
                if (lives == 1){
                    context.drawImage(img5, 0, 0);
                }
                if (lives == 0){
                    alert("You lose!");
                    context.drawImage(img6, 0, 0);
                }
                if(outputField.value.indexOf("_") == -1){
                    alert("You got it! You sure know your Star Wars, ... nerd.");
                    if(lives == 6){
                        alert("The Force is Strong in this one");
                    }
                }
            });

            five.addEventListener('click', function(){
                console.log("hi");
                var letter = "5";
                var reveal = outputField.value.split(' ');
                for (var i=0; i < word.length; i++){
                    if (letter == word[i]){
                        reveal[i] = letter;
                        five.className = "lettersSelected" ;
                    }
                    outputField.value = reveal.join(' ');
                }
                if (word.indexOf(letter) == -1)
                {
                    console.log("guess is not in solution");
                    lives --;
                    five.className = "wrongLetter" ;
                }
                if (lives == 5){
                    context.drawImage(img1, 0, 0);}
                if (lives == 4){
                    context.drawImage(img2, 0, 0);}
                if (lives == 3){
                    context.drawImage(img3, 0, 0);
                }
                if (lives == 2){
                    context.drawImage(img4, 0, 0);
                }
                if (lives == 1){
                    context.drawImage(img5, 0, 0);
                }
                if (lives == 0){
                    alert("You lose!");

                    context.drawImage(img6, 0, 0);
                }
                if(outputField.value.indexOf("_") == -1){
                    alert("You got it! You sure know your Star Wars, ... nerd.");
                    if(lives == 6){
                        alert("The Force is Strong in this one");
                    }
                }
            });

            six.addEventListener('click', function(){
                console.log("hi");
                var letter = "6";
                var reveal = outputField.value.split(' ');
                for (var i=0; i < word.length; i++){
                    if (letter == word[i]){
                        reveal[i] = letter;
                        six.className = "lettersSelected" ;
                    }
                    outputField.value = reveal.join(' ');

                }
                if (word.indexOf(letter) == -1)
                {
                    console.log("guess is not in solution");
                    lives --;
                    six.className = "wrongLetter" ;

                }
                if (lives == 5){
                    context.drawImage(img1, 0, 0);}
                if (lives == 4){
                    context.drawImage(img2, 0, 0);}
                if (lives == 3){
                    context.drawImage(img3, 0, 0);
                }
                if (lives == 2){
                    context.drawImage(img4, 0, 0);
                }
                if (lives == 1){
                    context.drawImage(img5, 0, 0);
                }
                if (lives == 0){
                    alert("You lose!");
                    context.drawImage(img6, 0, 0);
                }
                if(outputField.value.indexOf("_") == -1){
                    alert("You got it! You sure know your Star Wars, ... nerd.");
                    if(lives == 6){
                        alert("The Force is Strong in this one");
                    }
                }
            });

            seven.addEventListener('click', function(){
                console.log("hi");
                var letter = "7";
                var reveal = outputField.value.split(' ');
                for (var i=0; i < word.length; i++){
                    if (letter == word[i]){
                        reveal[i] = letter;
                        seven.className = "lettersSelected" ;
                    }
                    outputField.value = reveal.join(' ');

                }
                if (word.indexOf(letter) == -1)
                {
                    console.log("guess is not in solution");
                    lives --;
                    seven.className = "wrongLetter" ;

                }
                if (lives == 5){
                    context.drawImage(img1, 0, 0);}
                if (lives == 4){
                    context.drawImage(img2, 0, 0);}
                if (lives == 3){
                    context.drawImage(img3, 0, 0);
                }
                if (lives == 2){
                    context.drawImage(img4, 0, 0);
                }
                if (lives == 1){
                    context.drawImage(img5, 0, 0);
                }
                if (lives == 0){
                    alert("You lose!");
                    context.drawImage(img6, 0, 0);
                }
                if(outputField.value.indexOf("_") == -1){
                    alert("You got it! You sure know your Star Wars, ... nerd.");
                    if(lives == 6){
                        alert("The Force is Strong in this one");
                    }
                }
            });

            eight.addEventListener('click', function(){
                console.log("hi");
                var letter = "8";
                var reveal = outputField.value.split(' ');
                for (var i=0; i < word.length; i++){
                    if (letter == word[i]){
                        reveal[i] = letter;
                        eight.className = "lettersSelected" ;
                    }
                    outputField.value = reveal.join(' ');

                }
                if (word.indexOf(letter) == -1)
                {
                    console.log("guess is not in solution");
                    lives --;
                    eight.className = "wrongLetter" ;
                }

                if (lives == 5){
                    context.drawImage(img1, 0, 0);}
                if (lives == 4){
                    context.drawImage(img2, 0, 0);}
                if (lives == 3){
                    context.drawImage(img3, 0, 0);
                }
                if (lives == 2){
                    context.drawImage(img4, 0, 0);
                }
                if (lives == 1){
                    context.drawImage(img5, 0, 0);
                }
                if (lives == 0){
                    alert("You lose!");
                    context.drawImage(img6, 0, 0);
                }
                if(outputField.value.indexOf("_") == -1){
                    alert("You got it! You sure know your Star Wars, ... nerd.");
                    if(lives == 6){
                        alert("The Force is Strong in this one");
                    }
                }

            });

            nine.addEventListener('click', function(){
                console.log("hi");
                var letter = "9";
                var reveal = outputField.value.split(' ');
                for (var i=0; i < word.length; i++){
                    if (letter == word[i]){
                        reveal[i] = letter;
                        nine.className = "lettersSelected" ;
                    }
                    outputField.value = reveal.join(' ');
                }
                if (word.indexOf(letter) == -1)
                {
                    console.log("guess is not in solution");
                    lives --;
                    nine.className = "wrongLetter" ;
                }
                if (lives == 5){
                    context.drawImage(img1, 0, 0);}
                if (lives == 4){
                    context.drawImage(img2, 0, 0);}
                if (lives == 3){
                    context.drawImage(img3, 0, 0);
                }
                if (lives == 2){
                    context.drawImage(img4, 0, 0);
                }
                if (lives == 1){
                    context.drawImage(img5, 0, 0);
                }
                if (lives == 0){
                    alert("You lose!");
                    context.drawImage(img6, 0, 0);
                }
                if(outputField.value.indexOf("_") == -1){
                    alert("You got it! You sure know your Star Wars, ... nerd.");
                    if(lives == 6){
                        alert("The Force is Strong in this one");
                    }
                }
            });

            zero.addEventListener('click', function(){
                console.log("hi");
                var letter = "0";
                var reveal = outputField.value.split(' ');
                for (var i=0; i < word.length; i++){
                    if (letter == word[i]){
                        reveal[i] = letter;
                        zero.className = "lettersSelected" ;
                    }
                    outputField.value = reveal.join(' ');
                }
                if (word.indexOf(letter) == -1)
                {
                    console.log("guess is not in solution");
                    lives --;
                    zero.className = "wrongLetter" ;
                }

                if (lives == 5){
                    context.drawImage(img1, 0, 0);}
                if (lives == 4){
                    context.drawImage(img2, 0, 0);}
                if (lives == 3){
                    context.drawImage(img3, 0, 0);
                }
                if (lives == 2){
                    context.drawImage(img4, 0, 0);
                }
                if (lives == 1){
                    context.drawImage(img5, 0, 0);
                }
                if (lives == 0){
                    alert("You lose!");
                    context.drawImage(img6, 0, 0);
                }
                if(outputField.value.indexOf("_") == -1){
                    alert("You got it! You sure know your Star Wars, ... nerd.");
                    if(lives == 6){
                        alert("The Force is Strong in this one");
                    }
                }
            });

            charInput.addEventListener('keyup', function(e){
                var letter = e.key.toLowerCase();
                var reveal = outputField.value.split(' ');
                for (var i=0; i < word.length; i++){
                    if (letter == word[i]){
                        reveal[i] = letter;
                    }
                    outputField.value = reveal.join(' ');
                }
                if (word.indexOf(letter) == -1)
                {
                    console.log("guess is not in solution");
                    lives --;
                    showGuess.innerHTML = letter;
                    console.log("lives left " + lives);
                }
                if (word.indexOf(letter) != -1){
                    console.log("correct guess !");
                }
                if (lives == 0){
                    alert("You lose!");
                }

                if(outputField.value.indexOf("_") == -1){
                    alert("You got it! You sure know your Star Wars, ... nerd.");
                    if(lives == 6){
                        alert("The Force is Strong in this one");
                    }
                }
                charInput.value = '';
            });


            fullWord.addEventListener('keyup', function(e){
                var fullWordInput = fullWord.value;
                if (fullWordInput.length == word.length) {
                    // pressEnter.style.display = 'inline-block';
                    if (e.keyCode === 13 && fullWord.value == word) {
                        outputField.value = word;
                        alert("You got it! You sure know your Star Wars, ... nerd.");
                    } else if (e.keyCode === 13 && fullWord.value != word) {
                        alert("You lose!");
                    }
                }else if (fullWordInput.length != word.length) {
    //  pressEnter.style.display = 'none';
                }
            });

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
