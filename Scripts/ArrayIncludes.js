let birds = ["Parrot", "Pigeon", "Sparrow", "Crow", "Peacock", "Hen", "Cock", "Duck", "Swan", "Eagle"];

let birdsArrayDisplay = document.getElementById("birdsArrayDisplay");

for (let i = 0; i < birds.length; i++) {
    birdsArrayDisplay.innerHTML += birds[i] + ", ";
}

function checkBirdAvailability() {

    let enteredBirdName = document.getElementById("txtBirdName").value;

    let isBirdAvailable = birds.includes(enteredBirdName);

    document.getElementById("pIncludesResult").innerHTML =
        "Bird Exists : " + isBirdAvailable;
}