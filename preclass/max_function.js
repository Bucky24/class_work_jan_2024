/*
Write a function that takes in two numbers and outputs the max (the greater of the two numbers).

Ex: 
Input: 1, 2
Output: 2

Input: 6, -4
Output: 6

Input: 3.4, 2
Output: 3.4
*/

function getMax(num1, num2) {
    /*if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }*/

    return Math.max(num1, num2);
}

console.log(getMax(1, 2));
console.log(getMax(6 ,-40));
console.log(getMax(3.4,2));