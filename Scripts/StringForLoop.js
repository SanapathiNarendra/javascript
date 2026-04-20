var wordsOfA = [];
var words = [];
document.getElementById("btnFind").addEventListener("click", function () {
    debugger;

    var ContentA = "";
    var ContentOfWord = "";
    var input = document.getElementById("txtWord").value;

    if (input.toLowerCase().startsWith("a")) {

        wordsOfA.push(input);

    }
    
    else {
        words.push(input);

    }
    for (var i = 0; i < wordsOfA.length; i++) {

        ContentA = ContentA + "<p>" + (i + 1) + "" + wordsOfA[i] + "<p><br>"

    }
    for (var j = 0; j < words.length; j++) {

        ContentOfWord = ContentOfWord + "<p>" + (j + 1) + "" + words[j] + "<p><br>"
    }
    document.getElementById("ResultA").innerHTML = ContentA;
    document.getElementById("ResultO").innerHTML = ContentOfWord;
});