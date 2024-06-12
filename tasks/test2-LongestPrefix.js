//Find longest common prefix

function longestCommonPrefix(str) {
    if (str.length === 0) {
        return "No prefixes"; // More informative to return "No prefixes" instead of an empty string.
    }

    let result = [];

    // Outer loop goes character by character of the first string
    for (let j = 0; j < str[0].length; j++) {
        const char = str[0][j]; // Character from the first word

        // Inner loop compares the character with the corresponding character in each string
        for (let i = 1; i < str.length; i++) {
            // Check if the character doesn't match or if we reach the end of any word
            if (j >= str[i].length || str[i][j] !== char) {
                if (result.length === 0) {
                    return "No prefixes";  // Immediately return "No prefixes" if no common prefix found
                }
                return result.join(''); // Return the accumulated result if mismatch or end of a word is found
            }
        }
        // If the character matches all words at position j, add it to result
        result.push(char);
    }

    // After the loop, check if we found any common prefix
    if (result.length === 0) {
        return "No prefixes";  // If no common prefix was found at all, return "No prefixes"
    } else {
        return result.join('');  // Otherwise, join the result and return the common prefix
    }
}

// Testing the function
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Should output "fl"
console.log(longestCommonPrefix(["dog", "race", "car"])); // Should output "No prefixes"


