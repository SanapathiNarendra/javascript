function OnClickRepeat() {
    debugger;
    var stringName = document.getElementById("txtStringRepeat").value;
    var Search = stringName.repeat(3);
document.getElementById("pResult").innerHTML = Search;
}