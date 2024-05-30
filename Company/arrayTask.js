// create an algorithm to pass through an array of letters and
// return a certain metric regarding the array.

function countLetterFrequency(letters) {
    const frequency = {};
    // Loop through each letter in the array
    for (let letter of letters) {
        if (frequency[letter]) {
            frequency[letter]++;  // Increment count if the letter is already in the object
        } else {
            frequency[letter] = 1;  // Initialize count if the letter is not yet in the object
        }
    }
    return frequency;
}

// Example usage
const lettersArray = ['a', 'b', 'a', 'c', 'b', 'b', 'a'];
const result = countLetterFrequency(lettersArray);
console.log(result);

function countFrequency(arr) {
    const frequency = {};
    // Use forEach to iterate over each letter in the array
    arr.forEach(element => {
        if (frequency[element]) {
            frequency[element]++;  // Increment count if the letter is already in the object
        } else {
            frequency[element] = 1;  // Initialize count if the letter is not yet in the object
        }
    });

    return frequency;
}

console.log(countFrequency([1,1,1,2,3,4,4,4]))

//Generic one
const tokens = [1,2,3,4,1,1,1,1];
const hash = {};

for (let token of tokens) {
    if (hash[token]){
        hash[token]++
    } else {
        hash[token] = 1;
    }
}

console.log(hash);

//________________________________________________________________
function doThat(n) {
    let result = [];

    for (let i = 0; i < n; i++) {
        let a = i % 3;

        if (a === 0) {
            result.push(i);
        }
    }
    return result;
}

console.log(doThat(10));