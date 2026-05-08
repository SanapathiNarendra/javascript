

function onclickLastIndexOf(){
    debugger;
    var colors=["Red","Green","Blue","orange","Red","Maroon","Yellow","Pink","Purple"];
    var input=document.getElementById("txtLastIndexOf").value;

    var result=colors.lastIndexOf(input);
    document.getElementById("pResult").innerHTML=result;
}