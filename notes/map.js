//It is used to transform elements in an array using a specified function and then returns
// a new array containing the transformed elements. The original array remains unchanged.

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(function(number) {
    return number * 2;
});

console.log(doubled); // Output: [2, 4, 6, 8, 10]
