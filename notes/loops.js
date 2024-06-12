const array = ['apple', 'banana', 'cherry'];
const object = {apple: 1, banana: 2, cherry: 3};

// Using for...in on an array
for (const index in array) {
    console.log(index); // Outputs "0", "1", "2" - the indices
}

// Using for...of on an array
for (const fruit of array) {
    console.log(fruit); // Outputs "apple", "banana", "cherry" - the elements
}

// Using for...in on an object
for (const key in object) {
    console.log(key, object[key]); // Outputs "apple 1", "banana 2", "cherry 3" - key-value pairs
}

// for...of would cause an error if used directly on object because it's not iterable.
