function onclickMathPower(){

  var Value=document.getElementById("txtmathValue").value;
  var Power=document.getElementById("txtmathPower").value;
    document.getElementById("pResult").innerHTML=Math.pow(Power , Value);
}
