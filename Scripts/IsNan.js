
function OnClickIsNaNnumber(){
  debugger;
  var firstValue= document.getElementById("txtFirstvalue").value;
  var secondValue=document.getElementById("txtSecondvalue").value;
var firstValueIsNan=isNaN(firstValue);
var secondValueIsNan=isNaN(secondValue);
 console.log(firstValueIsNan);
 console.log(secondValueIsNan);

 if(!firstValueIsNan && !secondValueIsNan){
    document.getElementById("pResult").innerHTML = parseInt(firstValue)+parseInt(secondValue);

 }
 else{
      document.getElementById("pResult").innerHTML= firstValue +" ,"+ secondValue;
 }
}
 

