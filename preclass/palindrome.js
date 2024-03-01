/*
Write a function that takes in a single word as a string and returns true if it's a palindrome and false otherwise (a palindrome is spelled the same way forwards and backwards).

 Ex:
 Input: "noon"
 Output: true

 Input: "horse"
 Output: false

 Input: "racecar"
 Output: true
 */

 function detectPalindrome(string) {
    for (var i=0;i<string.length/2;i++) {
        var char = string[i];
        var otherChar = string[string.length-i-1];

        if (char != otherChar) {
            return false;
        }
    }

    return true;
 }

 console.log(detectPalindrome("noon"));
 console.log(detectPalindrome("horse"));
 console.log(detectPalindrome("racecar"));