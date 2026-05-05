
document.getElementById("btnMatrix").addEventListener("click", function () {
    debugger;
    var matrix = [[1, 2, 3],
         [4, 5, 6],
         [7, 8, 9]];

      var input = Number(document.getElementById("inputNumber").value);
      
    var result = " ";

    for (var i = 0; i < matrix.length; i++) {

        for (var j = 0; j < matrix[i].length; j++) {
            result += matrix[i][j] * input + " "
        }
        result += "<br>"


    }
    document.getElementById("pResult").innerHTML = result;

});