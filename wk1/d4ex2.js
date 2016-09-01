function reverseArr (arr) {
    var rev = [];
    for (i = arr.length-1; i > -1 ;i -- ){
        rev.push(arr[i]);
    }

    return rev;
}

var a = [1,2];
var b = reverseArr(a);

console.log(a);
console.log(b);
