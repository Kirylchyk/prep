//Find the longest substring with max 2 distinct characters.


function longestSubstringWith2Distinct(s) {
    let maxLen = 0;
    let start = 0; // Start index of the sliding window
    let charMap = {}; // Object to count occurrences of each character within the window
    let maxSubstrStart = 0; // Start of the longest substring

    for (let end = 0; end < s.length; end++) {
        const char = s[end];

        // If the character is not in the map, add it.
        if (!(char in charMap)) {
            charMap[char] = 0;
        }
        charMap[char]++;

        // When we have more than 2 distinct characters, move the start up to reduce the window size
        while (Object.keys(charMap).length > 2) {
            const startChar = s[start];
            charMap[startChar]--;
            if (charMap[startChar] === 0) {
                delete charMap[startChar];
            }
            start++;
        }

        // Calculate the length of the current valid substring and update maximum length
        const currentLen = end - start + 1;
        if (currentLen > maxLen) {
            maxLen = currentLen;
            maxSubstrStart = start;
        }
    }

    // Return the longest substring with at most 2 distinct characters
    return s.substring(maxSubstrStart, maxSubstrStart + maxLen);
}

// Example usage
const input = "eceba";
const input2 = "ecomonics";
console.log(longestSubstringWith2Distinct(input));  // Output: "ece"
console.log(longestSubstringWith2Distinct(input2));
