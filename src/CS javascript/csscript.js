// Define a variable with an iteger value
var myNumber = 5;

// Send the value of the variable to the output console
console.log(myNumber);
console.log(typeof myNumber); 

// Create the game 
let myScore;

// Setup and change the game score
init(1000);
changeScore(100);
changeScore(50);
changeScore(-250);
changeScore(125);

// function to initialize the game score in the game
function init(newScore){

    console.log("Setting the score to " + newScore);
    myScore = newScore;
    displayScore();
}

// function to change the score of the game
function changeScore(scoreDelta) {

    console.log("Changing the score by " + scoreDelta);
    myScore = myScore + scoreDelta;
    displayScore();
}

function displayScore(){
    console.log("Player score: " + myScore);
}

