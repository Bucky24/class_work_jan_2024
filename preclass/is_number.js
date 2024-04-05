/*
Write a function that takes in a string and if the string is a string representation of a number, return the negative version of that number otherwise throw an Error.

Ex:
Input: '1'
Output: -1

Input: '4'
Output: -4

Input: 'cow'
Error
*/

function negativeNumberStrict(string) {
    const numberOrNaN = parseFloat(string);
    if (`${numberOrNaN}` !== `${string}` || Number.isNaN(numberOrNaN)) {
        throw new Error("Bad things");
    }

    return numberOrNaN * -1;
}

console.log(negativeNumberStrict(1));
console.log(negativeNumberStrict(4));
console.log(negativeNumberStrict(-4));
console.log(negativeNumberStrict("1"));
console.log(negativeNumberStrict("4"));
console.log(negativeNumberStrict("-4"));
console.log(negativeNumberStrict("23432432lkjkljflkjlk234j2342"));
console.log(negativeNumberStrict("cow"));