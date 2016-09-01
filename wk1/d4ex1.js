function each (arrObj,fn) {
    if ( typeof arrObj === 'object' && Array.isArray(arrObj))
    {
        for (var prop in arrObj)
        {
            fn(prop,arrObj[prop]);
        }
    }
    else if (typeof arrObj === 'object')
    {
        for (var i in arrObj)
        {
            fn(arrObj[i],i);
        }
    }
}


function writeItem (val, idx) {
    console.log('The value of item ' + idx + ' is ' + val);
}
var mammal = {
    age: 0,
    warmBlooded: true,
    haveHair: true
};

var animals = [ 'cat', 'dog', 'mouse' ];


each(mammal,writeItem);

each(animals,writeItem);
