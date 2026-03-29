function onClickCheckNumber(){
    debugger;
    var inputNumber=Number(document.getElementById("txtInputNumber").value);
    if(inputNumber > 0){
        document.getElementById("pResult").innerHTML="The Number is Positive.";
        console.log("The number is Positive.")
    }
    if (inputNumber < 0){
        document.getElementById("pResult").innerHTML="The Number is Negitive.";
        console.log("The Number is Negitive.")
    } 
    
    }