/*
Write a Node.js function wordCount(sentence) that takes a string sentence as input and returns an object containing the count of each word in the sentence. Ignore case sensitivity (treat "Hello" and "hello" as the same word) and punctuation (treat "word" and "word," as the same word).

console.log(wordCount("Hello, world hello")); 
// Output: { hello: 2, world: 1 }

console.log(wordCount("The quick brown fox! jumps over. the lazy? dog.")); 

Output: {
  the: 2,
  quick: 1,
  brown: 1,
  fox: 1,
  jumps: 1,
  over: 1,
  lazy: 1,
  dog: 1
}

*/

function wordCount(sentence) {
    const words = sentence.split(" ").map((word) => {
        word = word.toLowerCase();
        word = word.replace(/[,.?!]+/g, "");

        return word;
    });

    return words.reduce((acc, word) => {
        if (!acc[word]) {
            acc[word] = 0;
        }

        acc[word] += 1;

        return acc;
    }, {});
}

console.log(wordCount("Hello, world hello")); 
console.log(wordCount("The quick brown fox jumps over the lazy dog."));