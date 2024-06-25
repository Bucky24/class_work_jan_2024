// Write code to create a function that accepts two arrays of numbers
// There will be one number common to both arrays
// Return the common number
// You may not use the `indexOf` or `includes` method

function commonElement(arrA, arrB) {
    for (const elem of arrA) {
        for (const elem2 of arrB) {
            if (elem === elem2) {
                return elem;
            }
        }
    }
};

const array1 = [1, 2, 9, 4, 5];
const array2 = [6, 7, 3, 8, 9];
console.log(commonElement(array1, array2));