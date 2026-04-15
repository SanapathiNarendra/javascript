 var bikes=[];
document.getElementById("btnBike").addEventListener("click",function(){
    debugger;
  var bike=document.getElementById("txtBike").value;
  bikes.push(bike)
  document.getElementById("pResult").innerHTML=bikes;
});