/*
Write a function that takes in a number and reverses the order of the digits.

Ex:
Input: 1234
Output:4321

1234 => 123.4 => 123 => 1230

1234 - 1230 = 4

Input: 1201
Output:1021

Input: 4
Output: 4
*/

function reverseNumber(num) {
    //return parseInt(`${num}`.split("").reverse().join(""));

    const newDigits = [];
    for (const digit of `${num}`) {
        newDigits.unshift(digit);
    }

    const joinedString = newDigits.join("");

    return parseInt(joinedString);
}

console.log(reverseNumber(1234));
console.log(reverseNumber(1201));
console.log(reverseNumber(4));