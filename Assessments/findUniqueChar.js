//To find the first unique character in a string and return its position using 1-based indexing,
// you can utilize a JavaScript function that maps character frequencies and
// then iterates through the string to find the first character that appears only once.
// Here's how you can implement this:

function getUniqueCharacter(s) {
    const charFrequency = {};

    // Count the frequency of each character
    for (const char of s) {
        if (charFrequency[char]) {
            charFrequency[char]++;
        } else {
            charFrequency[char] = 1;
        }
    }

    // Find the first unique character
    for (let i = 0; i < s.length; i++) {
        if (charFrequency[s[i]] === 1) {
            return i + 1; // Return 1-based index
        }
    }

    // Return -1 if there is no unique character
    return -1;
}

// Example usage
const inputString = "statistics";
console.log(getUniqueCharacter(inputString)); // Output will be 3