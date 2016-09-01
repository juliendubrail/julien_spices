function getLessThanZero(arr) {
    function lessThanZero(num)
    {
        return num <= 0;
    }
    arr = arr.filter(lessThanZero);
    return arr;
}

var b = getLessThanZero([1, 2]);

console.log(b);
