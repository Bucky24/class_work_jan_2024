/*
Write a function that takes in an array of numbers and outputs the average of all the numbers.

Ex:
Input: [ 1 , 4 , 7 ]
Output: 4

Input: [ 10, 5 ]
Output: 7.5

Input: [ 1.5, 3, 2.5, 1 ]
Output: 2
*/

function getAverage(numbers) {
    var sum = 0;
    for (var i=0;i<numbers.length;i++) {
        sum += numbers[i];
        //sum = sum + numbers[i];
    }

    return sum / numbers.length;
}

console.log(getAverage([ 1 , 4 , 7 ]))
console.log(getAverage([ 10, 5 ]))
console.log(getAverage([ 1.5, 3, 2.5, 1 ]))