function onClickNumberChecker (){
    debugger;
    var result= Number(document.getElementById("txtValue").value);
      document.getElementById("pResult").innerHTML=result;
}
 document.getElementById("demo").innerHTML = 
  Number("-10") + "<br>" +
  Number("-10.33") + "<br>" +
  Number("10") + "<br>" +
  Number("10.33") + "<br>" +
  Number("10 6") + "<br>" +  
  Number("10 years") + "<br>" +  
  Number("years 10");  