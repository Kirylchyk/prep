// Count how many times n is listed in the given array [a,b,c]

function doThat(arr, n) {
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) {
            result++;
        }
    }
    return result;
}

console.log(doThat([1, 2, 1, 1, 5], 1)); //=> 3
