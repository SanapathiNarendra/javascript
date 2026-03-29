function onclickIfelseif(){
   debugger; 
   var inputNumber=Number(document.getElementById("txtIfelseif").value);
   if ((inputNumber %3 == 0) && (inputNumber %7 == 0)){
         document.getElementById("pResult").innerHTML=inputNumber+100;
    }
    



}