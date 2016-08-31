function sum() {
    var sum = 0;
    for (var i=0;i<arguments.length;i++)
    {
        sum += arguments[i];
    }
    console.log(sum);
    return sum;
}

console.log(sum(1,2,3,4,5,6));


setTimeout(function() {
    console.log('hello');
}, 1000);

setTimeout(function(){
    sum(1,2,3,4);
}, 1500);

function waitThenrun(fn)
{
    setTimeout(fn,1500);
}

waitThenrun(sum);

function millionDollarBaby(num)
{
    if (num <= 0 || isNaN(num))
    {
        return("error");
    }
    else if (num >= 1000000)
    {
        return(num);
    }
    else {
        while(num < 1000000)
        {
            num = num * 10;
        }
        return(num);
    }
}

millionDollarBaby(300);
