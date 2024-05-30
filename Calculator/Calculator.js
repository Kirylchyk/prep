//Given a string s which represents an expression, evaluate this expression and return its value.
// The integer division should truncate toward zero.
// You may assume that the given expression is always valid.
// All intermediate results will be in the range of [-231, 231 - 1].

const calculate = function(s) {

    const stack = [];

    let accumulatedNumber = '';
    let prevOperator = null;

    for (let i = 0; i <= s.length; i++) {

        if (s[i] === ' ') {
            continue;
        }

        //will return true if i IS number
        if (!isNaN(s[i])) {
            accumulatedNumber += s[i];
            continue;
        }

        accumulatedNumber = Number(accumulatedNumber);

        switch(prevOperator) {

            case '+':
            case null:
                stack.push(accumulatedNumber);
                break;
            case '-':
                stack.push(-accumulatedNumber);
                break;
            case '*':
                stack.push(stack.pop() * accumulatedNumber);
                break;
            case '/':
                stack.push(Math.trunc(stack.pop() / accumulatedNumber));
                break;
        }

        prevOperator = s[i];
        accumulatedNumber = '';

    }
    //Sum all value on the stack
    return stack.reduce((a, b) => a + b);

};

const testCases = [
    { input: "3 + 5", expected: 8 },
    { input: "12 - 5", expected: 7 },
    { input: "10 * 2", expected: 20 },
    { input: "8 / 4", expected: 2 },
    { input: "11 + 2 * 3", expected: 17 }, // Checking order of operations
    { input: "8 / 4 * 2", expected: 4 }, // Division and multiplication
    { input: "100 - 50 + 25", expected: 75 }, // Multiple operations
    { input: "3 + 5 * 6 - 7 / 1", expected: 32 } // Mixed operations
];

function runTests() {
    testCases.forEach(test => {
        const result = calculate(test.input);
        console.log(`Test Input: ${test.input}`);
        console.log(`Expected Output: ${test.expected}, Actual Output: ${result}`);
        console.log(result === test.expected ? "Test Passed" : "Test Failed");
        console.log('-----------------------');
    });
}

runTests();
