function ShowTable() {

    var number = Number(document.getElementById("txtNumber").value);

    var output = "";

    for (let i = 1; i <= 10; i++) {

        output = output + number + " x " + i + " = " + (number * i) + "<br>";

    }


    document.getElementById("result").innerHTML = output;
}