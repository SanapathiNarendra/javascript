document.getElementById("btnAndOperation").addEventListener("click",function()
{
    

debugger;

   var inputNumber=Number(document.getElementById("txtInputNumber").value);<br>
if ((inputNumber %3 == 0) || (inputNumber %5 == 0)){
        document.getElementById("pResult").innerHTML="The Number is divisible by 3 and 5.";
        console.log("The Number is divisible by 3 and 5.")
    }
  
});







