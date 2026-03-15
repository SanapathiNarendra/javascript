function onClickSellingprice(){
    debugger;
    price=(document.getElementById ("txtprice").value);
    discountPercentage=(document.getElementById("txtdiscount").value);
    discount=( discountPercentage/100)*price;
    sellingprice=price-discount;
    document.getElementById("pResult").innerHTML=sellingprice;

}