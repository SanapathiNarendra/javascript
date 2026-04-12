var counter=0;
   document.getElementById("Hoverme").addEventListener("mouseover", function() {
       counter=counter+1;
    document.getElementById("pResult").innerHTML = counter;
   });

   document.getElementById("resetButton").addEventListener("mouseout", function() {
    counter=0;
    document.getElementById("pResult").innerHTML = counter;
   });
   