function onClickCheckNumber(){
    debugger;
    var inputNumber=Number(document.getElementById("txtInputNumber").value);
    if(inputNumber > 0){
        document.getElementById("pResult").innerHTML="The Number is Positive.";
        console.log("The number is Positive.")
    }
    if (inputNumber < 0){
        document.getElementById("pResult").innerHTML="The Number is Negative.";
        console.log("The Number is Negative.")
    } 
    if (inputNumber == 0) { 
         document.getElementById("pResult").innerHTML="The Number is Zero.";
        console.log("The Number is Zero.")
    }
    if (inputNumber !=0){
         document.getElementById("pResult").innerHTML="The Number is not Zero.";
        console.log("The Number is not Zero.")
    }
    if (inputNumber == 0){
         document.getElementById("pResult").innerHTML=" Zero.";
        console.log(" Zero.")
    }
    if ((inputNumber > 0) && (inputNumber %2 == 0)){
         document.getElementById("pResult").innerHTML="The Number is Positive and even.";
        console.log("The Number is Positive and even.")
    }
    if ((inputNumber < 0) && (inputNumber %2 != 0)){
         document.getElementById("pResult").innerHTML="The Number is Negative and odd.";
        console.log("The Number is Negative and odd.")
    }
    }