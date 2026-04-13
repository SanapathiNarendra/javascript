function OnClickPdfChecker() {
debugger;
    var pdfName = document.getElementById("txtPdfChecker").value;
    
    if (pdfName.endsWith(".pdf"))
         {
        document.getElementById("pResult").innerHTML = "Document is  valid.";

    }   

    else
        {

        document.getElementById("pResult").innerHTML = "Document is not valid.";
    }

}