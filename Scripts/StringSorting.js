var alphabeticalOrder= [];

function OnclickStringSorting() {
   var content="";
    var inputWord= document.getElementById("txtInputWord").value;
    alphabeticalOrder.push(inputWord);
    for (i=0; i<alphabeticalOrder.length; i++){
        content =content+"<p>" + (i+1) +"." +alphabeticalOrder [i] +"</p><br>";
    }

    document.getElementById("pResult").innerHTML= content;

    document.getElementById("txtInputWord").value="";  
}



function sortAlphabeticalOrder(){

    
    var content="";
    alphabeticalOrder.sort();
    for (i=0; i<alphabeticalOrder.length; i++){
        content =content+"<p>" + (i+1) +"." +alphabeticalOrder [i] +"</p><br>";
    }
    document.getElementById("pResult").innerHTML= content;
}