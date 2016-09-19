var array = [];

// function multiply(array,number){
//     var a =[];
//     for (var i=0; i<=number; i++){
//         a[i]=array[i]*number;
//     }
//     return a;
// }

// function simpleMultiply(b){
//     for (var i=0; i<array.length; i++){
//         array[i]*b;
//     }
//     return array;
// }

function getMultipliers(number){
    for (var i= 0;i<=number;i++){
        array.push(function(n){
            return n *i;
        });
    }
    return array;
}

var multipliers = getMultipliers(4);

multipliers[0](1);
