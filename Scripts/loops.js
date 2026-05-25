function ShowNumbers() {

    var number = Number(document.getElementById("txtNumber").value);

    var output = "";

    for (let i = 1; i <= number; i++) {

        output = output + i + " ";

    }

    document.getElementById("result").innerHTML = output;
}