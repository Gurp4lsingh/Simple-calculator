const display = document.getElementById("display");

function appendToDisplay(input){
   if(validInput(input)){
    display.value += input;
   }
    else{
        display.value="Error";
    }
}


function clearDisplay(){
    display.value = "";

}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }   
}

function validInput(input){
    let lastvalue = display.value.slice(-1);
    let char = ["+", "-", "*", "/", "."];

    if (char.includes(input)&& char.includes(lastvalue)){
        return false;
    }
    return true;
}
