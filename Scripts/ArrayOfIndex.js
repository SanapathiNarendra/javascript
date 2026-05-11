var cars = [];

function OnclickArrayOfIndex() {

    var input = document.getElementById("txtInput").value.trim();

    if (input === "") {
        return;
    }

    
    cars.push(input);

    let content = "";

    for (let i = 0; i < cars.length; i++) {
        content += `<p>${i + 1}. ${cars[i]}</p>`;
    }

    document.getElementById("pResult").innerHTML = content;

    document.getElementById("txtInput").value = "";
}

function onClickSearch() {

    var inputBox = document.getElementById("txtSearch").value.trim();

    var index = cars
        .map(car => car.toLowerCase())
        .indexOf(inputBox.toLowerCase());

    document.getElementById("pSearch").innerHTML =
        index === -1
            ? `${inputBox} not found`
            : `${inputBox} is at index ${index}`;
}