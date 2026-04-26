  var andGate=[[0,0,0],[0,1,0],[1,0,0],[1,1,1,]];
document.getElementById("btnArrayToArray").addEventListener("click", function () {
    debugger;
    var indexInput=document.getElementById("txtInputIndex").value;
    document.getElementById("pResult").innerHTML=andGate[indexInput];

});