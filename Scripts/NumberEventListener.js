document.getElementById("btnNumber").addEventListener("Click",function(){
    debugger;
    var result= Number(document.getElementById("txtValue").value);
      document.getElementById("pResult").innerHTML=result;
});

 document.getElementById("pDemo").innerHTML =
  Number("-10") + "<br>" +
  Number("-10.33") + "<br>" +
  Number("10") + "<br>" +
  Number("10.33") + "<br>" +
  Number("10 6") + "<br>" +  
  Number("10 years") + "<br>" +   
  Number("years 10") + "<br>" +
  Number (true) +  "<br>"  + 
  Number (false);