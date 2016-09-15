function askForNumber(){
    var number = prompt("Please enter a Number between 1 and 10");
    number = parseInt(number);
    if (number <=10 && number >=1) {
        return number;
    }else {
        throw new Error("not a valid number");
    }
}

function translateNumberToGerman(){
    var translations = ["Ein","Zwei","Drei","Vier","Fünf","Sechs","Sieben","Acht","Neun","Zehn"];
    try {
        var number = askForNumber();
        number = number -1;
        var correctTranslation = translations[number];
        console.log(correctTranslation);

    }catch (Error){
        console.log(Error);
        askForNumber();
    }
}

translateNumberToGerman()

//try {
//    var number = askForNumber();
//    console.log("try " + number);


//} catch (Error) {
//console.log(Error);
//}

// }
//}
