function onclickIfelseif(){
   debugger; 
   var inputNumber=Number(document.getElementById("txtIfelseif").value);
   if ((inputNumber %3 == 0) && (inputNumber %7 == 0)){
         document.getElementById("pResult").innerHTML="Number is divisible by 3 and 7" ;
         console.log("Number is divisible by 3 and 7")
    }
    else  if((inputNumber %3==0) ||(inputNumber %7==0)){
     document.getElementById("pResult").innerHTML= "This Number is divisible by 3 or 7";
        console.log("Number is divisible by 3 or 7")
    }  
   else {
    document.getElementById("pResult").innerHTML= "This Number is not divisible by 3 or 7";
    console.log("This Number is not divisible by 3 or 7")
}  

}