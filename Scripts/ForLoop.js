numbers=[10,20,30,40,50,60]
document.getElementById("btnForLoop").addEventListener("click",function(){
 debugger;


 var content="";
for (var i=0; i<numbers.length; i++)
    {
   if (numbers[i]%5==0);{
  content=content + "<p>"+numbers[i] +"<p></br>"
 }
}
 document.getElementById("divResult").innerHTML=content;

});