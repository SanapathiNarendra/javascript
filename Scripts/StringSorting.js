var alphabeticalOrder = [];

function OnclickStringSorting() {

    var inputWord = document.getElementById("txtInputWord").value;

    if (inputWord !== "") {
        alphabeticalOrder.push(inputWord);
    }

    displayWords();

    document.getElementById("txtInputWord").value = "";
}

function sortAlphabeticalOrder() {

    alphabeticalOrder.sort();

    displayWords();
}

function displayWords() {

    var content = "";

    for (let i = 0; i < alphabeticalOrder.length; i++) {

        content += "<p>" + (i + 1) + ". " + alphabeticalOrder[i] + "</p>";
    }

    document.getElementById("pResult").innerHTML = content;
}