 let Numbers=[12,13,26,27,29,30,31,32,33,34,35]
 displayArray();
function  SumOfArray(){
   debugger;

       var content = "";

    for (var i = 0; i < Numbers.length; i++) {
      {
            content = content + "<p>"+ (i+1) +" " + Numbers[i] + "</p>";
        }
    }

    document.getElementById("pResult").innerHTML = content;
}