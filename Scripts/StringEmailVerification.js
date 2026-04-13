function onclickStringEmailVerification() {
    debugger;
    var email = document.getElementById("txtEmail").value;
    if (email.includes("@") && email.includes(".") && email.indexOf("@") < email.indexOf(".")) {
        

        document.getElementById("pResult").innerHTML = "Valid Email";
    } 
    else
         {
        document.getElementById("pResult").innerHTML = "Invalid Email";
    }
}




