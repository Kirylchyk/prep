//Stack: Last In, First Out (LIFO). The last element added is the first to be removed.
// Queue: First In, First Out (FIFO). The first element added is the first to be removed.


let queue = [];

// Adding elements to the queue
queue.push("apple");
queue.push("banana");
queue.push("cherry");


console.log(queue);  // Output: ["apple", "banana", "cherry"]

// Removing the front element (apple)
console.log(queue.shift());  // Output: "apple"
console.log(queue);  // Output: ["banana", "cherry"]

// Checking the front element (banana)
console.log(queue[0]);  // Output: "banana"
queue.unshift("pear"); //add to the beginning
console.log(queue);
