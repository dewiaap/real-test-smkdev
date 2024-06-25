function isBalanced(string) {
    const stack = [];
    const bracketPairs = {
        '}': '{',
        ']': '[',
        ')': '('
    };

    for (const char of string) {
        if (char === '{' || char === '[' || char === '(') {
            stack.push(char);
        } else if (char === '}' || char === ']' || char === ')') {
            if (stack.length === 0 || stack[stack.length - 1] !== bracketPairs[char]) {
                return "NO";
            }
            stack.pop();
        }
    }

    return stack.length === 0 ? "YES" : "NO";
}

console.log(isBalanced("{ [ ( ) ] }"));
console.log(isBalanced("{ [ ( ] ) }"));
console.log(isBalanced("{ ( ( [ ] ) [ ] ) [ ] }"));
