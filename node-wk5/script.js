var readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question("What\'s your birthday?\n", (answer)=>{
//     console.log("OK, on " + answer + " I will wish you a happy birthday!")
//     //rl.close()
// })



    var result = [];

    rl.question("Enter a noun\n", (answer)=>{
        var myNoun = answer;
        // result.append(answer);
        rl.question("Enter a verb\n", (answer)=>{
            var myVerb = answer;
            // result.append(answer)
            rl.question("Enter an adjective\n", (answer)=>{
                var myAdj = answer;
                console.log(myNoun + " " + myAdj + " " + myVerb + " " );
                rl.close();
                // result.append(answer)
            })
        })
    });

    return result;
