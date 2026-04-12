function OnclickStringFind(){
    debugger;
    var Value1=document.getElementById("txtStringName").value;
     var Value2=document.getElementById("txtSearch").value;
    document.getElementById("pResult").innerHTML= Value1.indexOf(Value2);



}
