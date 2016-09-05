function selector(select){
    var selectlist = document.querySelectorAll(select);
    var selectArray = [].slice.call(selectlist);
    return selectArray;
}
