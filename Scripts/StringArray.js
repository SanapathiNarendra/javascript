function OnclickStringArray(){
debugger;
    var name= document.getElementById("txtName").value
    document.getElementById("pResult").innerHTML=name[1];
    document.getElementById("pLength").innerHTML=name.length;
    document.getElementById("pLastLetter").innerHTML=name[name.length-1];
    document.getElementById("result").innerHTML=name[0]+ "," +name[1]+","+name[2]+","+name[3]+"."

    
};