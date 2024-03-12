/*
Write a function that takes in an input and returns true if it's an integer and false otherwise.

Ex:
Input: "7"
Output: false

Input: 7
Output: true

Input: 4.3
Output: false
*/

function isInt(thing) {
    return (typeof thing === "number" && Math.floor(thing) === thing)
}

const isInt2 = thing => typeof thing === "number" && Math.floor(thing) === thing;

console.log(isInt("7"));
console.log(isInt(7));
console.log(isInt(4.3));