/*
Write a function that takes in a string and returns true if it's a pangram or false otherwise.
Pangram: a sentence that contains every letter in the alphabet.

Ex:
Input: "Watch Jeopardy, Alex Trebek's fun TV quiz game"
Output: true

Input: "Five hexing wizard bots jump quickly"
Output: true

Input: "JavaScript is the best"
Output: false
*/

function isPangram(string) {
    var allCharactersFound = new Set();
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    for (var i=0;i<string.length;i++) {
        var char = string[i].toLowerCase();

        if (!alphabet.includes(char)) {
            continue;
        }

        allCharactersFound.add(char);
    }

    return allCharactersFound.size === alphabet.length;
}

console.log(isPangram("Watch Jeopardy, Alex Trebek's fun TV quiz game"));
console.log(isPangram("Five hexing wizard bots jump quickly"));
console.log(isPangram("JavaScript is the best"));