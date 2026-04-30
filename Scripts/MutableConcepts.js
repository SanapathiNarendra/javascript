

document.getElementById("btnCheckdigits").addEventListener("click", function () {

    debugger;
    
var numbers= [10,20,30,40,50]
  var index= document.getElementById("txtDigits").value;
  var changeNumber = document.getElementById("txtChangeNumber").value;

 numbers[index] = changeNumber ;
 document.getElementById("pResult").innerHTML= numbers;
});


