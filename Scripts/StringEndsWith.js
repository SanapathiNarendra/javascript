function OnclickStringEndsWith() {
    debugger;
    var stringName = document.getElementById("txtStringName").value;
    var search = document.getElementById("txtSearch").value;
    document.getElementById("pResult").innerHTML = stringName.endsWith(search);
}