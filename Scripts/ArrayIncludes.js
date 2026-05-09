let birds = ["Parrot", "Pigeon", "Sparrow", "Crow", "Peacock", "Hen", "Cock", "Duck", "Swan", "Eagle"];

let arrayResult = document.getElementById("birdsArrayDisplay");

for (let i = 0; i < birds.length - 1; i++) {
    arrayResult.innerHTML += birds[i] + ", ";
}

function checkBirdAvailability() {

    let enteredBirdName = document.getElementById("txtBirdName").value;

    let isBirdAvailable = birds.includes(enteredBirdName);

    document.getElementById("pIncludesResult").innerHTML =
        "Bird Exists : " + isBirdAvailable;
}