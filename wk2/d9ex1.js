function search(classname) {

    var flatlist= document.getElementsByTagName("class");
    //flatlist.toString();
    var occurrence= [];

    for (var i=0; i<flatlist.length; i++)
    {
        if (flatlist[i].includes(classname)) {
            occurrence.push(flatlist[i]);
        }

    }
    console.log(occurrence[0]);
    return occurrence ;
}

search();
