// Array to hold all letters
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// Gamestate
var gameOver = false;

// Score
var wins = 0
var losses = 0
var guessesLeft = 9

// Computer picks random letter
var computerChoice = letters[Math.floor(Math.random() * letters.length)];
console.log(computerChoice);

// Initialize Win/Loss/Guesses
document.getElementById('wins').innerHTML = "Wins: " + wins;
document.getElementById('losses').innerHTML = "Losses: " + losses;
document.getElementById('guesses-left').innerHTML = "Guesses left: " + guessesLeft;

// User guesses coumputer's choice
document.onkeyup = function (event) {
    // Grab the key that's pressed
    var userGuess = event.key;

    if (!gameOver) { // If the game is not won
        if (userGuess == computerChoice) {
            gameOver = true;
            wins++;
            alert("You win!! Play again?")
        } else {
            gameOver = false;
            guessesLeft--;
        }
        // Game Over
        if (guessesLeft == 0) {
            gameOver = true;
            losses++
            alert("So close! Try again?")
        }


    }
    if (gameOver) {  // If the game is won or no more guesses

        // Generate a new random letter
        computerChoice = letters[Math.floor(Math.random() * letters.length)];
        console.log(computerChoice)

        // Reset the gamestate
        gameOver = false;

        // Make sure the player has 9 guesses
        guessesLeft = 9;
    }

    // Update Wins/Loss/Guesses
    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "Losses: " + losses;
    document.getElementById('guesses-left').innerHTML = "Guesses left: " + guessesLeft;
}
