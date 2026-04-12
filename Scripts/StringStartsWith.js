function OnclickStringStartsWith() {
    var stringName = document.getElementById("txtStringName").value;
    var search = document.getElementById("txtSearch").value;
    var result = stringName.startsWith(search);
    document.getElementById("pResult").innerHTML =stringName.startsWith(search);    
}