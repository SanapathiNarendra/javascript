var ColorNames = ["Black", "Red", "Green", "Blue", "Yellow","Gray"];

document.getElementById("btnForLoop").addEventListener("click", function () {
    debugger;

    var content = "";

    for (var i = 0; i < ColorNames.length; i++) {
      {
            content = content + "<p>"+ (i+1) +" " + ColorNames[i] + "</p>";
        }
    }

    document.getElementById("divResult").innerHTML = content;
});