var myIndex = 4;
carousel();

function carousel() {
    var x = document.getElementsByClassName("kit");
    //for (var i = 0; i < x.length; i++) {
    //    x[myIndex].style.display = "none";
    // }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1;}
    x[myIndex-1].classList.add('horizTranslate');
    setTimeout(carousel, 2000);
}
