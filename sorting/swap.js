//swap without temp variable
let a = 5;
let b = 3;

// Swap process
a = a + b;  // a becomes 8 (5 + 3)
b = a - b;  // b becomes 5 (8 - 3) -> a
a = a - b;  // a becomes 3 (8 - 5) -> b

console.log("a:", a);  // Output: a: 3
console.log("b:", b);  // Output: b: 5

//classic
function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

