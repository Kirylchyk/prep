// Рассмотрим задачу проверки корректности расстановки скобок в строке с использованием JavaScript. М
// ы хотим проверить, правильно ли расставлены скобки трех типов:
// круглые (), квадратные [] и фигурные {}
function areBracketsClosed(str) {
    let stack = [];
    let bracketsMap = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    let openBrackets = ['(', '[', '{'];

    for (let char of str) {
        if (openBrackets.includes(char)) {
            stack.push(char);
        } else {
            let last = stack.pop();
            if (bracketsMap[char] !== last) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(areBracketsClosed("()")); // true
console.log(areBracketsClosed("([)]"));   // false
console.log(areBracketsClosed("({[]}[])")); // true