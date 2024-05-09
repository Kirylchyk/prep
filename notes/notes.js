// replace(/s/g, "") will remove all whitespace characters from the string.

// a "stack" refers to a specific data structure
// that operates on the principle of "Last In, First Out" (LIFO).


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
stack.push(8);
console.log(stack); //1,5,8


//let arrayFromString = string.split(" "); // Split string by spaces
//let stringFromArray = array.join(" "); // Join array elements with a space

//Keu-Value pair
// for (let user in userMap) {
//     console.log(user);            // Prints the key
//     console.log(userMap[user]);   // Prints the value associated with the key
// }


//Hash map
// associative array, a model that can store data
// in key-value pairs, where each unique key is associated with a specific value

console.log(typeof stack);

// number % 2  > 0 => odd number
// number % 2 == 0 => even

//&& logical AND
// || logical OR
//>=
//<=
