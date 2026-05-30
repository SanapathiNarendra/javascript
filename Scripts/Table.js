function ShowTable() {

    var number = Number(document.getElementById("txtNumber").value);
                                                                    
    var output = "";

    for (let i = 1; i <= 20; i++) {

        output = output + number + " * " + i + " = " + (number * i) + "<br>";
    
    }

    document.getElementById("result").innerHTML = output;
    
}
