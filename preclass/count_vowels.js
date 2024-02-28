/*
	Write a function that takes in a string and outputs the number of vowels (not counting y).

	Ex:
	Input: "hello"
	Output: 2

	Input: "you are great!"
	Output: 6

	Input: "why?"
	Output: 0
*/

function vowelCounter(string) {
    var count = 0;

    var vowels = ['a', 'e', 'i', 'o', 'u'];

    for (var i=0;i<string.length;i++) {
        //if (vowels.includes(string[i])) {

        //}
        //if (string[i] === 'a' || string[i] === 'e' || string[i] == 'i' ...);
        switch (string[i]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                count ++;
                break;
            default:
                break;
        }
    }

    return count;
}

console.log(vowelCounter("abba"));
console.log(vowelCounter("hello"));
console.log(vowelCounter("why?"));