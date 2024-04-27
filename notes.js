//In JavaScript, replace(/s/g, "") is a regular expression pattern that
// matches all occurrences of whitespace characters (spaces, tabs, line breaks, etc.),
// and g is the global flag that indicates to replace all matches,
// not just the first one. Therefore, replace(/s/g, "") will remove all whitespace characters from the string.

// a "stack" refers to a specific data structure that operates on the principle of "Last In, First Out" (LIFO).
//

class Stack {
    constructor() {
        this.items = [];
    }

    // Push item to the stack
    push(item) {
        this.items.push(item);
    }
}

let stack = new Stack();
stack.push(1);
stack.push(5);
console.log(stack); //1,5




