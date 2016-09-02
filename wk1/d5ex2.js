function invertCase(string){
    var sliced = [].slice.call(string);
    var newstring = [];
    for (var i = 0; i < sliced.length; i++) {
        if (sliced[i] == sliced[i].toLowerCase()) {
            newstring.push(sliced[i].toUpperCase());
        } else if (sliced[i] == sliced[i].toUpperCase()) {
            newstring.push(sliced[i].toLowerCase());
        }
    }
    return newstring.join("");
}

var test = "Crypto-Currency";
console.log(invertCase(test));
