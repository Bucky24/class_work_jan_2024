/*
given two SORTED arrays of integers (arr1 and arr2), write a function that returns a new array of sorted integers, combining the values from arr1 and arr2.  The length of the new array should be equal to: arr1.length + arr2.length

example 1:
arr1: [3, 4, 6, 9]
arr2: [-1, 2, 4, 5, 7]
result: [-1, 3, 4, 4, 5, 6, 7, 9]

example 2:
arr1: [2]
arr2: [50]
result: [2, 50]

example 3:
arr1: []
arr2: [1]
result: [1]
*/

function mergeArrays(arr1, arr2) {
    let arr1Pointer = 0;
    let arr2Pointer = 0;

    const result = [];

    while (arr1Pointer < arr1.length || arr2Pointer < arr2.length) {
        if (arr1Pointer >= arr1.length) {
            result.push(arr2[arr2Pointer]);
            arr2Pointer ++;
            continue;
        }

        if (arr2Pointer >= arr2.length) {
            result.push(arr1[arr1Pointer]);
            arr1Pointer ++;
            continue;
        }

        const val1 = arr1[arr1Pointer];
        const val2 = arr2[arr2Pointer];

        if (val1 < val2) {
            result.push(val1);
            arr1Pointer ++;
        } else {
            result.push(val2);
            arr2Pointer ++;
        }
    }

    return result;
}

console.log(mergeArrays([3, 4, 4, 6, 9], [-1, 2, 4, 5, 7]));
console.log(mergeArrays([2], [50]));
console.log(mergeArrays([],[1]));
console.log(mergeArrays([],[]));