/*
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

Example 1:

Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

2 * 2 = 4 < 8
3 * 3 = 9 > 8

11

3 * 3 = 9 < 11
4 * 4 = 16 > 11

Constraints:

0 <= x <= 231 - 1
*/

function sqrt(num) {
    for (let i=0;i<num;i++) {
        if (i * i === num) {
            return i;
        }

        if (i * i > num) {
            return i - 1;
        }
    }
}

console.log(sqrt(4));
console.log(sqrt(8));
console.log(sqrt(99));