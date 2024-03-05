/*
Write a function that takes in a string and outputs the first occurrence of a character that does not repeat itself in that string.

	Ex:
	Input: "the quick brown fox jumps over the calm kitten quietly"
	Output: "b"

	Input: "this hat is the greatest!"
	Output: "g"

	Input: "what a wonderful day it has been!"
	Output: "o"
*/

function noRepeateCharacter(string) {
    for (var i=0;i<string.length;i++) {
        var foundCharacter = false;
        for (var j=0;j<string.length;j++) {
            if (string[i] === string[j] && i !== j) {
                foundCharacter = true;
                break;
            }
        }

        if (!foundCharacter) {
            return string[i];
        }
    }
}

console.log(noRepeateCharacter("the quick brown fox jumps over the calm kitten quietly"));
console.log(noRepeateCharacter("this hat is the greatest!"));
console.log(noRepeateCharacter("what a wonderful day it has been!"));