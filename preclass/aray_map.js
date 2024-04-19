/*
Write a function that takes an array of numbers and a function as parameters. The function parameter should do something to a numbers (increment, double, decrement, etc) and return the result. Your function should return the array that results from applying the function parameter to each element in the number array. 

Ex:
Input: [1,2,3]  function(num){return num * 2*}
Output: [2,4,6]

Input: [1,2,3]  function(num){return num + 1}
Output: [2,3,4]

Input: [1,2,3] function(num) {return num /2}
Output: [.5, 1. 1.5]

Input: [1,2,3] function(num) {return num - 2}
Output: [-1, 0, 1]
*/

function a_ray_map(array, cb) {
    const allResults = [];
    for (const element of array) {
        const result = cb(element);
        allResults.push(result);
    }

    return allResults;
}

console.log(a_ray_map([1,2,3], function(num){return num * 2}));
console.log(a_ray_map([1,2,3], function(num){return num + 1}));