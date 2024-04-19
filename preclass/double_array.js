/*
  Write a function that takes an array of numbers and returns an array with each number doubled. 

  Ex:
  Input: [1,2,3]
  Output: [2,4,6]

  Input: [-1,-2,-3]
  Output: [-2, -4, -6]

*/

function doubleDouble(array) {
    return array.map((element) => {
        return element * 2;
    });
}

const doubleDouble2 = array => array.map(element => element*2);

console.log(doubleDouble([1,2,3]));
console.log(doubleDouble([-1, -2, -3]));
console.log(doubleDouble2([1,2,3]));
console.log(doubleDouble2([-1, -2, -3]));