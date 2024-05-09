//can you capitalize the first letter of any string
// passed in example: "abc abc" -> "Abc ABC"

function doThat(str) {
    let arr = str.split(' ');

    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) { // Check to avoid errors with empty strings

            //working with a word
            arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
        }
    }

    return arr.join(' ');
}

console.log(doThat('abc abc')); // Should output "Abc Abc"