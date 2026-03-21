function OnclickFiniteChecker(){
   debugger;
   var inputfirstvalue =(document.getElementById("txtfirstValue").value); 
   var inputsecondvalue=document.getElementById("txtsecondValue").value;
   var numericvalue=parseInt(inputfirstvalue);
    var numericvalue=parseInt(inputsecondvalue);
    var divisionResult=1/numericvalue;

    var result = isFinite(divisionResult);
    document.getElementById("pResult").innerHTML =result;

}