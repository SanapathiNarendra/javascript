document.getElementById("btnFind").addEventListener("click", function (){
debugger;
    var stringName = document.getElementById("txtStringName").value;
    var search = document.getElementById("txtSearch").value;
    document.getElementById("pResult").innerHTML = stringName.endsWith(search);
});