/*
Write a function that takes in an array of numbers and outputs the maximum number.

Ex:
Input: [ 1, 2, 3 ]
Output: 3

Input: [ 3, 6, 4, 5, 2, 1 ]
Output: 6

Input: [ 3, 3, 3 ]
Output: 3
*/

function getMax(numbers) {
    var biggest = Number.NEGATIVE_INFINITY;
    for (var i=0;i<numbers.length;i++) {
        var number = numbers[i];

        // take 2
        biggest = Math.max(number, biggest);
        // take 1
        if (number > biggest) {
            biggest = number;
        }
    }

    return biggest;
}

console.log(getMax([ 1, 2, 3 ]));
console.log(getMax([ 3, 6, 4, 5, 2, 1 ]));
console.log(getMax([ 3, 3, 3 ]));