// Define a variable with an iteger value
var myNumber = 5;

// Send the value of the variable to the output console
console.log(myNumber);
console.log(typeof myNumber); 

// Create the game 
let myScore;

// Setup and change the game score
init();
changeScore();

// function to initialize the game score in the game
function init(){
}

// function to change the score of the game
function changeScore() {
    myScore = myScore + 100;
    console.log("Player score: " + myScore);
}

