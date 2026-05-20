let fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya", "Kiwi", "Grapes"];

displayArray();

function displayArray() {
    document.getElementById("result").innerHTML = "[" + fruits + "]";
}

function arrayLength() {
    document.getElementById("pResult").innerHTML =
        "Array Length : " + fruits.length;
}

function arrayToString() {
    document.getElementById("pResult").innerHTML =
        "toString() : " + fruits.toString();
}

function arrayAt() {
    document.getElementById("pResult").innerHTML =
        "at(1) : " + fruits.at(1);
}