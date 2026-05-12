let birds = ["Parrot", "Pigeon", "Sparrow", "Crow", "Peacock", "Hen", "Cock", "Duck", "Swan", "Eagle"];

let birdsArrayDisplay = document.getElementById("birdsArrayDisplay");

birdsArrayDisplay.innerHTML = birds.join(",");

function checkBirdAvailability() {
    

    let enteredBirdName = document.getElementById("txtBirdName").value.trim();

    let isBirdAvailable = birds.some(

        bird => bird.toLowerCase() === enteredBirdName.toLowerCase()
    );


    
    document.getElementById("pIncludesResult").innerHTML =
        "Bird Exists : " + isBirdAvailable;
}