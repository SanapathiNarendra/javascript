function OnclickSighChecker(){
    debugger;
    let number = Number(document.getElementById("txtsignChecker").value);

    document.getElementById("pResult").innerHTML = Math.sign(number);
}


