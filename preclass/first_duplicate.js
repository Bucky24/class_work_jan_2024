/*
Write a function that takes an array of integers as an input and outputs the first duplicate.

Ex:
Input: [ 2, 5, 6, 3, 5 ]
Output: 5

start with 2
5, 6, 3, 5

go to 5

6, 3, 5

Input: [ 1, 3, 3, 4, 1, 3, 4 ]
Output: 1

Input: [ 2, 4, 5 ]
Output: undefined
*/

function firstDup(list) {
    for (var i=0;i<list.length-1;i++) {
        for (var j=i+1;j<list.length;j++) {
            if (list[i] === list[j]) {
                return list[i];
            }
        }
    }

    // get number of doubles
    var counts = {};
    for (var i=0;i<list.length;i++) {
        var num = list[i];

        if (!counts[num]) counts[num] = 0;
        counts[num] ++;
    }

    var totalDoubleCount = 0;
    for (var key in counts) {
        if (counts[key] > 1) {
            totalDoubleCount ++;
        }
    }

    return undefined;
}

console.log(firstDup([ 2, 5, 6, 3, 5 ]));
console.log(firstDup([ 1, 3, 3, 4, 1, 3, 4 ]));
console.log(firstDup([ 2, 4, 5 ]));