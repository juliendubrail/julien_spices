var input = document.getElementById('input');
var button = document.getElementById('validate');

console.log("input" + input.value);

function validator(){
    var parsed = JSON.parse(input.value);
    console.log(parsed);
    if (parsed){
        var success = alert("Correct JSON");
        console.log(success);
    }
    else {
        throw new Error("not a valid JSON");
    }
}


function validateButton(){
    button.addEventListener('click', function(){
        try{
            validator();
            console.log("HELLI");
        } catch(Error){
            console.log(Error);
        }
    });
}

validateButton();
