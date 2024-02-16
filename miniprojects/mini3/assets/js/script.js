var wins = 0;
var losses = 0;
var ties = 0;

function gameOn() {
    var finishGame = function() {
        alert("Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties);

        // 4) Ask if user wants to play again
        var playAgain = confirm("Do you want to play again?");
        return playAgain;
    }

    // 1) User inputs guess
    var userInput = prompt("Input guess (R, P, S, L, SP)");
    if (!userInput) {
        return false;
    }

    userInput = userInput.toUpperCase();
    // 2) Calculate computer guess
    var validGuesses = [
        'R',
        'P',
        'S',
        'L',
        'SP',
    ];

    if (!validGuesses.includes(userInput)) {
        alert("Please enter a valid response!");
        return true;
    }

    var randomNumber = Math.floor(Math.random() * validGuesses.length);
    //console.log(randomNumber);

    var computerGuess = validGuesses[randomNumber];

    alert("The computer guessed " + computerGuess);
    // 3) Determine winner

    if (userInput === computerGuess) {
        alert("It's a tie!");
        ties++;

        return finishGame();
    }

    var winsByEntry = {
        R: ["L", "S"],
        P: ["SP", "R"],
        S: ["L", "P"],
        L: ["SP", "P"],
        SP: ["S", "R"],
    };

    var winsArray = winsByEntry[userInput];

    //console.log(winsArray);

    if (winsArray.includes(computerGuess)) {
        alert("You win!");
        wins ++;
    } else {
        alert("You lose!");
        losses ++;
    }

    return finishGame();
}

for (;;) {
    var playAgain = gameOn();

    if (!playAgain) {
        break;
    }
}