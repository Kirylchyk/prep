// Write the smallest missing integer in the array, bigger than 0 and not =1

function findSmallestMissingPositive(arr) {
    // Sort the array
    arr.sort((a, b) => a - b); //ASC order

    let smallestMissing = 1;

    // Iterate through the sorted array
    for (let i = 0; i < arr.length; i++) {
        // Ignore non-positive integers and duplicates
        if (arr[i] <= 0 || (i > 0 && arr[i] === arr[i - 1])) {
            continue;
        }

        // If the current element is not equal to the expected positive integer
        if (arr[i] !== smallestMissing) {
            // Return the smallest missing positive integer
            return smallestMissing;
        }

        // Increment the expected positive integer
        smallestMissing++;
    }

    // If no missing positive integer is found, return n + 1
    return smallestMissing;
}

// Example usage:
const arr = [1, 3, 6, 4, 1, 2];
console.log(findSmallestMissingPositive(arr)); // Output: 7
