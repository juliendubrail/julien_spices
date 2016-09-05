function selector(select){
    var selectlist = document.querySelectorAll(select);

    for (var i = 0; i< selectlist.length; i++){
        selectlist[i].style.fontStyle='italic';
        selectlist[i].style.fontWeight='bold';
        selectlist[i].style.textDecoration='underline';
    }

}
