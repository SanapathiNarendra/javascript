var wordsOfA = [];
var words = [];
var wordsOfB = [];
var wordsOfC = [];
document.getElementById("btnFind").addEventListener("click", function () {
    debugger;

    var ContentA = "";
    var ContentOfWord = "";
    var ContentB = "";
    var ContentC = "";
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

    for (var k = 0; k < words.length; k++) {

        ContentB = ContentB + "<p>" + (k + 1) + "" + words[k] + "<p><br>"
    }
    for (var l = 0; l < words.length; l++) {
        ContentC = ContentC + "<p>" + (l + 1) + "" + words[l] + "<p><br>"
    }

    document.getElementById("ResultA").innerHTML = ContentA;
    document.getElementById("ResultO").innerHTML = ContentOfWord;
    document.getElementById("ResultB").innerHTML = ContentB;
    document.getElementById("ResultC").innerHTML = ContentC;
    

});