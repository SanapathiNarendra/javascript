document.getElementById("btnGenerate").addEventListener("click", function ()) {
    debugger;
    var sizeNumber = Number(document.getElementById("txtInput").value);
    var randomNumber = Math.round(Math.random() * Math.pow(10, sizeNumber));
    document.getElementById("pResult").innerHTML = "Random Number: " + randomNumber;
};
