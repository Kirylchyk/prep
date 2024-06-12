// given arr [1,1,4,6,2,3,2,4,2,2] print elements with largest occurrence

function doThat(arr) {

    const hash = {};
//check values, not index (for...in)
    for (let token of arr) {

        if (!hash[token]) {
            hash[token] = 1;
        }

        if (hash[token]) {
            hash[token]++;
        }
    }

    let aim = 1;
    let result = [];

    for (let item in hash) {
        if (hash[item] > aim) {
            aim = hash[item];
            result = item;
        }
    }

    return result;

}

let tokens = [1,1,2,2,3,3,3];//3

console.log(doThat(tokens));


function countOccurences (arr) {

    const counts = {};
    for (let i = 0; i < arr.length; i++) {
        const number = arr[i];

        if (counts[number] === undefined) {
            counts[number] = 0;
        }
        counts[number]++;
    }

    let neededNumber = null;
    let maxCount = 0;

    for (const [key, value] of Object.entries(counts)) {
        if (value > maxCount) {
            maxCount = value;
            neededNumber = key;
        }
    }

    return neededNumber;

}

console.log(countOccurences([1,1,4,6,2,3,2,4,2,2]));


function countNumber(arr) {
    const counts = {};
    let neededNumber = null;
    let maxCount = 0;

    for (let i = 0; i < arr.length; i++) {
        const number = arr[i];

        if (counts[number] === undefined) {
            counts[number] = 0;
        }
        counts[number]++;

        if (counts[number] > maxCount) {
            maxCount = counts[number];
            neededNumber = number;
        }
    }
    return neededNumber;
}
console.log(countNumber([1, 1, 4, 6, 2, 3, 2, 4, 2, 2]));

//
// const fruits = ["apple", "banana", "apple"];
// const counts = {};
//
// for (let i = 0; i < fruits.length; i++) {
//     const fruit = fruits[i];
//     if (counts[fruit] === undefined) {
//         counts[fruit] = 0;  // Initialize to 0 if not already defined
//     }
//     counts[fruit]++;
// }
//
// console.log(counts);  // Correctly outputs: { apple: 2, banana: 1 }
