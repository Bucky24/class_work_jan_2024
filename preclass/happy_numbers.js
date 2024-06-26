/*
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

Example 1:

Input: n = 19
Output: true
Explanation:
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1

Example 2:
Input: n = 2
Output: false
 
Constraints:

1 <= n <= 231 - 1
*/

function isHappy(num) {
    let currentNum = num;

    const numbersFound = new Set();
    numbersFound.add(currentNum);

    while (true) {
        // const digits = `${currentNum}`.split('').map(digit => parseInt(digit));

        const numAsString = `${currentNum}`; // '19'
        const digitsAsStrings = numAsString.split(''); // ['1', '9'];
        const digits = digitsAsStrings.map(Number);

        let sum = 0;
        for (const digit of digits) {
            sum += Math.pow(digit, 2);
        }
        currentNum = sum;

        if (currentNum === 1) {
            return true;
        }

        if (numbersFound.has(currentNum)) {
            return false;
        }
        numbersFound.add(currentNum);
    }
}

console.log(isHappy(19));
console.log(isHappy(2));