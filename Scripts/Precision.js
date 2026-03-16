function OnClickPrecision(){
    debugger;
    var decimalValue =  Number(document.getElementById("txtDecimalValue").value);
    var fixedValue = Number (document.getElementById("txtPrecisionValue").value);
    document.getElementById("pResult").innerHTML= decimalValue.toPrecision(fixedValue);

    
}