/*
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.

Constraints:
    1 <= haystack.length, needle.length <= 10^4
    haystack and needle consist of only lowercase English characters.
*/

function findString(needle, haystack) {
    for (let i=0;i<haystack.length;i++) {
        const sub = haystack.substring(i, i+needle.length);
        if (sub === needle) {
            return i;
        }
    }

    return -1;
}

// more efficient doens't work
function findString2(needle, haystack) {
    const buffer = [];
    for (let i=0;i<haystack.length;i++) {
        const char = haystack[i];
        buffer.push(char);
        if (buffer.length > needle.length) {
            buffer.shift();
        }

        if (buffer.join("") === needle) {
            return i-buffer.length-1;
        }
    }

    return -1;
}

console.log(findString("sad", "sadbutsad"));
console.log(findString("leeto", "leetcode"));
console.log(findString("fun", "this was fun"));