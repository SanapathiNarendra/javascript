function onClickNaNnumber() {
    debugger;
    let decimalValue = document.getElementById("txtDecimalValue").value;
    let fixNumber = document.getElementById("txtFixnumber").value;
    decimalValue = parseFloat(decimalValue);
    if (isNaN(decimalValue)) {
        document.getElementById("pResult").innerText = "The value is NOT a number (NaN)";
    } else {
        let result = decimalValue.toFixed(fixNumber); 
        document.getElementById("pResult").innerText = "Result: " + result;
    }
}