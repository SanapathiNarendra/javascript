function showEven(){
    var start = Number(document.getElementById("start").value);

    var end = Number(document.getElementById("end").value);
    
    content = "";

    for(i=start; i<=end; i++){
      if (i % 2 == 0){
        content = content + "<p>" + i +  "</P>" + " ";
      }
    }
 document.getElementById("pResult").innerHTML = "<b>Even Numbers:</b> " + content;
}

function showOdd(){
    var start = Number(document.getElementById("start").value);

    var end = Number(document.getElementById("end").value);
    
    content = "";

    for(i=start; i<=end; i++){
      if (i % 2 !== 0){
        content = content + "<p>" + i +  "</P>" + " ";
      }
    }
 document.getElementById("pResult").innerHTML = "<b>Odd Numbers:</b> " + content;


}