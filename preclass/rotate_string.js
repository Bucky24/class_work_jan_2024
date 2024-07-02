/*
Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

A shift on s consists of moving the leftmost character of s to the rightmost position.

For example, if s = "abcde", then it will be "bcdea" after one shift.
 
Example 1:

Input: s = "abcde", goal = "cdeab"
Output: true
Example 2:

Input: s = "abcde", goal = "abced"
Output: false
 
Constraints:

1 <= s.length, goal.length <= 100
s and goal consist of lowercase English letters.
*/

function shift(str) {
    const firstChar = str.substring(0, 1);
    const restOfString = str.substring(1);
    return restOfString + firstChar;
}

function checkRotated(s, goal) {
    let currentString = s;
    do {
        currentString = shift(currentString);

        if (currentString === goal) {
            return true;
        }
    } while (currentString !== s);

    return false;
}

console.log(checkRotated("abcde", "cdeab"));
console.log(checkRotated("abcde", "abced"));
console.log(checkRotated("blah", "blah"));