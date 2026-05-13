var colors = ["Red", "Green", "Blue", "Orange", "Red", "Maroon", "Yellow", "Pink", "Green"];

var array = document.getElementById("arrayResult");

array.innerHTML = colors.join(", ");

function onclickLastIndexOf() {

    var input = document.getElementById("txtLastIndexOf").value.trim();

    var result = colors
    
    
        .map(color => color.toLowerCase())

        .lastIndexOf(input.toLowerCase());

    document.getElementById("pResult").innerHTML =
        "Last Index : " + result;
}