document.getElementById("btnArray").addEventListener("click",function(){
    debugger;
    var indexNumber=Number(document.getElementById("txtStringNumber").value);
    var cars=["Benz","BMW","Audi","Lamborghini","Ferrari",];
    document.getElementById("pResult").innerHTML=cars[indexNumber];
 });
document.getElementById("btnFirstElement").addEventListener("click",function(){
    debugger;
    var indexNumber=Number(document.getElementById("txtStringNumber").value);
    var cars=["Benz","BMW","Audi","Lamborghini","Ferrari",];
    document.getElementById("pResult").innerHTML=cars["0"];

 });
document.getElementById("btnLastElement").addEventListener("click",function(){
    debugger;
      var indexNumber=Number(document.getElementById("txtStringNumber").value);
    var cars=["Benz","BMW","Audi","Lamborghini","Ferrari",];
    document.getElementById("pResult").innerHTML=cars[cars.length-1];

 });