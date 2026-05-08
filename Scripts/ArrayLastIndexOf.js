    var colors=["Red","Green","Blue","orange","Red","Maroon","Yellow","Pink","Purple"];

    var array = document.getElementById("arrayResult");

    for(let  i=0;i<=colors.length-1;i++){
          array.innerHTML += colors[i] + ",";
    }

function onclickLastIndexOf(){
  
    var input=document.getElementById("txtLastIndexOf").value;

    var result=colors.lastIndexOf(input);
  
    document.getElementById("pResult").innerHTML=result;

    
}