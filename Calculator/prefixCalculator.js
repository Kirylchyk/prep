 function doThat (expression) {

    const elements = expression.split(' ').reverse();
    const stack = [];

    for (const element of elements) {
        if (!isNaN(parseFloat(element))) {
            stack.push(parseFloat(element));
        } else {
            const num01 = stack.pop();
            const num02 = stack.pop();

            switch (element) {
                case '+':
                    stack.push(num01 + num02);
                    break;
                case '-':
                    stack.push(num01 - num02);
                    break;
                case '*':
                    stack.push(num01 * num02);
                    break;
                case '/':
                    stack.push(num01 / num02);
                    break;
                default:
                    throw new Error("Operator is not in the list");
            }
        }
    }

    if (stack.length !== 1) {
        throw new Error("Input should be at least one element");
    }

    return stack.pop();
}

let expression = '/ 6 2'
console.log(doThat(expression));