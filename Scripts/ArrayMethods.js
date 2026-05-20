let fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya", "Kiwi", "Jack fruit"];

displayArray();

function displayArray() {
    document.getElementById("result").innerHTML = fruits;
}

function arrayLength() {
    document.getElementById("pResult").innerHTML =
        "Array Length : " + fruits.length;
}