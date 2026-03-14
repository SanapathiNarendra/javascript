function onClickCheck() {
    debugger;
    var value = parseInt(document.getElementById("txtValue").value);
    if (value % 2 == 0) {
        document.getElementById("pResult").innerHTML = "Result: Even Number";
    }  
     else 
    {
        document.getElementById("pResult").innerHTML = "Result: Odd Number";
    } 
    else if (value % 2 != 0)
    {
        document.getElementById("pResult").innerHTML = "Result: Odd Number";
    }    
}