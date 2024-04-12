/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false

{[()]}

{[}]

()[]{}
([]){}
([()]{})

([)]{} - no

([]

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

function parentheses(string) {
    const stack = [];
    const compareMap = {
        "(": ")",
        "[": "]",
        "{": "}",
        "<": ">",
    };
    const allowedKeys = Object.keys(compareMap);

    for (const char of string) {
        if (allowedKeys.includes(char)) {
            stack.push(char);
        } else {
            const compareElement = stack.pop();
            const expectedClose = compareMap[compareElement];

            if (expectedClose !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(parentheses("()[]{}<>"));
console.log(parentheses("([()]{})"));
console.log(parentheses("([)]{}"));