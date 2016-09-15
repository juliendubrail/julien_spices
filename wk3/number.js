function askForNumber(){
    var number = prompt("Please enter a Number between 1 and 10");
    if (number <=10 && number >=1) {
        return number;
    }else {
        throw new Error("not a valid number");
    }
}

try {
    var number = askForNumber();
    console.log(number);

} catch (Error) {
    console.log(Error);
}
