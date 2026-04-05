function onClickCalculate() {
    var value1 = parseInt(document.getElementById("txtValue1").value);
    var value2 = parseInt(document.getElementById("txtValue2").value);
    var value3 = parseInt(document.getElementById("txtValue3").value);

    var average = (value1 + value2 + value3) / 3;
    document.getElementById("pResult").innerHTML = "Average: " + average.toFixed(2);
    
}