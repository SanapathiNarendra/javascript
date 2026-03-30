
 function onClickCheckNumber(){
    debugger;
    var number=parseInt(document.getElementById("txtNumber").value);
    if(number>=0){
        document.getElementById("pResult").innerHTML="The number is Positive.";
        console.log("The number is positive. ");
    }
     if(Number<=0){
        document.getElementById("pResult").innerHTML="The number is negative.";
        console.log("The number is negative. ");

 }
  if(Number==0){
        document.getElementById("pResult").innerHTML="The number is zero.";
        console.log("The number is zero. ");
        
  }
   if(Number!=0){
        document.getElementById("pResult").innerHTML="The number is not zero.";
        console.log(" The  number is not zero. ");
}
 if(Number==0){
        document.getElementById("pResult").innerHTML="Zero.";
        console.log("Zero. ");
 }
  if((Number>0) && (Number%2==0)){
        document.getElementById("pResult").innerHTML="The number is Positive and even.";
        console.log("The number is positive and even. ");
  }
   if((Number<0) || (Number%2!=0)){
        document.getElementById("pResult").innerHTML="The number is negative and odd.";
        console.log("The number is negative and odd. ");
 }
 }
