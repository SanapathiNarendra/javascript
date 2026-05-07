var cars=[];
var content="";
function OnclickArrayOfIndex(){
    debugger;
    var input=document.getElementById("txtInput").value;

    cars.push(input);
    for(i=0;i<cars.length;i++){
        content= content+"<p>"+(i+1)+"."+cars[i]+"</p><br>"  
      }
      document.getElementById("pResult").innerHTML=content;
      content="";
    document.getElementById("txtInput").value="";
}
function onClickSearch(){
    debugger;
    var inputBox=document.getElementById("txtSearch").value;
    document.getElementById("pSearch").innerHTML=
    `${inputBox} is at ${cars.indexOf(inputBox)}index`;
}