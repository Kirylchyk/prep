// give the word with the smallest length


function findShortestWord(arr) {
    if (arr.length === 0) return false; // Handle empty array case

    let shortestWord = arr[0]; // Start with the first word as the shortest

    arr.forEach(item => {
        if (item.length < shortestWord.length) {
            shortestWord = item;
        }
    });

    return shortestWord;
}

const words = ["red", "green", "blue", "yellow"];
console.log(findShortestWord(words)); // Outputs: "red"