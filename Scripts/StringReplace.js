function OnclickReplace() {
    debugger;
    var stringSentence = document.getElementById("txtStringSentence").value;
    var stringWord=document.getElementById("txtStringWord").value;
    var stringWordReplace=document.getElementById("txtStringReplace").value;

    var outputString=stringSentence.replace(stringWord,stringWordReplace);
    document.getElementById("pResult").innerHTML = outputString;

}