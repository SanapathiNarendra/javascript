function onClickToFixed (){
   
   var decimalValue = Number(document.getElementById("txtDecimalValue").value);
   var fixedValue = Number(document.getElementById("txtFixedValue").value);

   document.getElementById("pResult").innerHTML = decimalValue.toFixed(fixedValue);
}
