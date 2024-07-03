/*
create a function that takes a positive integer and returns true if the integer is an armstrong number, else return false. To find out if a number is an armstrong number, take each individual digit and raise it to the power of the length of the entire number and add the digits. If the sum equals the original number, the number is an armstrong number.

Input: 153 
Output: true (1^3) + (5^3) + (3^3) === 153

Input: 370
Output: true (3^3) + (5^3) + 0 === 370

Input: 11
Output: false (1^2) + (1^2) !== 11
*/

function getDigits(num) {
    const digits = [];
    let curNum = num;

    while (curNum >= 10) {
        const temp = Math.floor(curNum / 10) * 10;
        const digit = curNum - temp;
        curNum = temp / 10;
        digits.push(digit);
    }

    digits.push(curNum);

    return digits;
}

function isArmstrong(num) {
    const digits = getDigits(num);

    let sum = 0;
    for (const digit of digits) {
        const digitSum = Math.pow(digit, digits.length);
        // 2^3 => Math.pow(2, 3);
        sum += digitSum;
    }

    const sum = digits.reduce((sum, digit) => {
        return sum + Math.pow(digit, digits.length);
    }, 0);

    const sum = digits.map((digit) => {
        return Math.pow(digit, digits.length);
    }).reduce((sum, num) => sum + num, 0);

    return sum === num;
}

console.log(isArmstrong(153));
console.log(isArmstrong(360));
console.log(isArmstrong(370));
console.log(isArmstrong(11));
