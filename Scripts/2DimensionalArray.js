var cars =[["BMW","X5","2021"],["Suzuki","Beleno","2022"],["Ferarri","G600","2020"],["Jaguar","e-Pace","2023"],
              ["Mahindra","XUV500","2024"]];


document.getElementById("btnArrayToArray").addEventListener("click", function () {
    debugger;
    var inputIndex=document.getElementById("txtCarName").value;
    var secondIndex=document.getElementById("txtModel").value;
var content = "";

    for (var i = 0; i < cars.length; i++) {
      {
            content = content + "<p>"+ (i+1) +" " + cars[i] + "</p>";
        }
    }

    document.getElementById("divResult").innerHTML = content;
    document.getElementById("pResult").innerHTML=cars[inputIndex][secondIndex];


});