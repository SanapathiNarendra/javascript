function onClickFindMaxValue(){
    debugger;
    var digits=Number(document.getElementById("txtDigits").value);
    var value1=Math.pow(10,digits) * Math.random();
    var value2=Math.pow(10,digits)* Math.random();
    var value3=Math.pow(10,digits)* Math.random();
    var value4=Math.pow(10,digits)* Math.random();
    var value5=Math.pow(10,digits)* Math.random();
    var maxNumber = Math.max(value1,value2,value3,value4,value5);
    document.getElementById("pResult").innerHTML=maxNumber;

}