let Numbers = [];

function ShowArray() {

    var inputValue = Number(document.getElementById("txtNumber").value);

    let content = " ";

    Numbers.shift(inputValue);
    for (let i = 0; i < Numbers.length; i++) {

        content = content + "<p>" + (i + 1) + "." + Numbers[i] + "</P>";

    }
    document.getElementById("arrayResult").innerHTML = content;
}

function ArraySum() {

    var sum = 0;
    debugger;
    for (let i = 0; i < Numbers.length; i++) {

        sum = sum + Numbers[i];

    }
    document.getElementById("arraySum").innerHTML = sum;
}