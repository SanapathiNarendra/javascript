let birds = ["Parrot", "Pigeon", "Sparrow", "Crow", "Peacock", "Hen", "Cock", "Duck", "Swan", "Eagle"];

let arrayResult = document.getElementById("showArray");

for(let i=0; i<birds.length-1; i++){
    arrayResult.innerHTML += birds[i] + ", ";
}