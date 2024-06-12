// .replace(/\s/g, "") will remove all whitespace characters from the string.

// a "stack" refers to a specific data structure
// that operates on the principle of "Last In, First Out" (LIFO).

//When you're asked to write an algorithm with "O(log n) runtime complexity,"
// it means that the execution time of your algorithm should increase logarithmically
// in relation to the size of the input data.


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
// number % 2 == 1 => prime

//&& logical AND
// || logical OR
//>=
//<=
// +- increase str
// ++ increase num

const numbers = [10, 5, 3, 8, 2, 6];
numbers.sort(function(a, b) {
    return a - b; // Ascending order
});

//selector-> function-> addEventListener
const button = document.querySelector("button");
button.addEventListener("click", function() {
    console.log("I am clicked!");
});

//Arrow vs regular function
function add(a, b) {
    return a + b;
}

const add2 = (a, b) => {
    return a + b;
};
