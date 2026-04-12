function OnclickStringIncludes(){
debugger;
    var StringIncludes=document.getElementById("txtStringIncludes").value;
     var Search=document.getElementById("txtSearch").value;
    document.getElementById("pResult").innerHTML= StringIncludes.includes(Search);

}
