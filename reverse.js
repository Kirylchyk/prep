function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        // Swap elements at the start and end indices
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        // Move towards the center of the array
        start++;
        end--;
    }

    return arr;
}

// Example usage
const numbers = [1, 2, 3, 4, 5];
console.log(reverseArray(numbers)); // Outputs: [5, 4, 3, 2, 1]


function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString("hello")); // Выведет "olleh"
