//The "Reverse Polish Notation" (RPN), also known as postfix notation,
// is a mathematical notation in which every operator follows all of its operands.

function evalRPN(tokens) {
    const stack = [];

    for (let token of tokens) {
        if (token === "+") {
            const a = stack.pop();
            const b = stack.pop();
            stack.push(b + a);
        } else if (token === "-") {
            const a = stack.pop();
            const b = stack.pop();
            stack.push(b - a);
        } else if (token === "*") {
            const a = stack.pop();
            const b = stack.pop();
            stack.push(b * a);
        } else if (token === "/") {
            const a = stack.pop();
            const b = stack.pop();
            // Note: Division in integer context (floor the result if negative)
            stack.push(parseInt(b / a));
        } else {
            // Token is a number
            stack.push(parseInt(token));
        }
    }

    return stack.pop();
}

const expression = ["2", "1", "+", "3", "*"];
console.log(evalRPN(expression));  // Outputs 9

const expression2 = ["4", "13", "5", "/", "+"];
console.log(evalRPN(expression2)); // Outputs 6
