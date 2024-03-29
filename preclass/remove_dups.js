/*
Write a function that takes in an array of integers and outputs the array with duplicates removed

Ex:
Input: [1,2,2,3]
Output: [1,2,3]

Input: [4,5,4,4,7,5]
Output: [4,5,7]

Input: [1,2,3,5]
Output: [1,2,3,5]
*/

function removeDups(array) {
    return Array.from(new Set(array));
}

function removeDups2(array) {
    const result = [];
    for (const item of array) {
        if (!result.includes(item)) {
            result.push(item);
        }
    }

    return result;
}

console.log(removeDups2([1,2,2,3]));
console.log(removeDups2([4,5,4,4,7,5]));
console.log(removeDups2([1,2,3,5]));