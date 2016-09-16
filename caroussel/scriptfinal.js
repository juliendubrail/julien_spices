var imgKitties = document.getElementsByClassName('kit');

setTimeout(caroussel,3000);

var i=0;

function caroussel(){
    var current=i;

    var next = current + 1;

    if (next >= imgKitties.length){
        next=0;
    }

    imgKitties[current].classList.add('farleftposition');
    imgKitties[current].classList.remove('horizTranslate');
    imgKitties[next].classList.add('horizTranslate');
    imgKitties[current].addEventListener("transitionend", movetoRight);

    function movetoRight(){
        imgKitties[current].classList.remove('farleftposition');
    }

    i = next;

    setTimeout(caroussel,3000);
}
