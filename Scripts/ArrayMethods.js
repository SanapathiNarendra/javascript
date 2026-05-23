let fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya", "Kiwi", "Grapes"];

displayArray();

function displayArray() {
    document.getElementById("result").innerHTML = "[" + fruits + "]";
}

function arrayLength() {`   `
    document.getElementById("pResult").innerHTML =
        "Array Length : " + fruits.length;
}

function arrayToString() {
    document.getElementById("pResult").innerHTML =
        "toString() : " + fruits.toString();
}

function arrayAt() {

    let index = document.getElementById("txtIndex").value;

    document.getElementById("pResult").innerHTML =
        "at index(" + index + ") : " + fruits.at(index);
}

function arrayJoin() {

    let input = document.getElementById("txtValue").value;

    document.getElementById("pResult").innerHTML =
        "join() : " + fruits.join(input);
}

function arrayPop() {
    let removed = fruits.pop();

    document.getElementById("pResult").innerHTML =
        "Removed : " + removed +
        "<br>Array : " + fruits;
}

function arrayPush() {
    let value = document.getElementById("txtValue").value;

    fruits.push(value);

    document.getElementById("pResult").innerHTML =
        "Added : " + value +
        "<br>Array : " + fruits;

    document.getElementById("txtValue").value = "";
}

function arrayShift() {
    let removed = fruits.shift();

    document.getElementById("pResult").innerHTML =
        "Removed First : " + removed +
        "<br>Array : " + fruits;
}