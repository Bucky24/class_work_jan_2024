/*
Write a function that takes a string as an argument, and returns the string with the first letter of every word capitalized.

Ex:
Input: 'hello world'
Output: 'Hello World'
*/

function capitalEveryWord(string) {
    const words = string.split(" ");

    for (let i=0;i<words.length;i++) {
        let word = words[i];

        const firstLetter = word[0];
        const firstLetterCapital = firstLetter.toUpperCase();
        word = firstLetterCapital + word.substring(1);

        words[i] = word;
    }

    return words.join(' ');

    return str.split(' ').map(word => `${word[0].toUpperCase()}${word.slice(1)}`).join(' ')
}

console.log(capitalEveryWord("hello world"));