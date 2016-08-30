var a = 7;
//a = [1,2,3];

function logType(type) {
    if (isNaN(type))
{
        console.log("not a number!");
    }
    else if (type === null)
    {
        console.log("null!");
    }
    else if (typeof type === 'boolean')
    {
        console.log("boolean!");
    }
    else if (typeof type === 'string')
    {
        console.log("string!");
    }
    else if (typeof type === 'function')
    {
        console.log("function!");
    }
    else if (typeof type === 'object')
    {
        if (type instanceof Array){
            console.log("Array!");
        }
        else {
            console.log("object!");
        }
    }
    else if (typeof type === 'undefined')
    {
        console.log("undefined!");
    }

    else if (typeof type ==='number')
    {
        console.log("number!");
    }
    else {
        console.log("I have no idea");
    }
}
//console.log(a);
logType(a);
