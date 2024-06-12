// Print first N prime(odd) numbers

function doThat(arr, n) {
    let result = [];


    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1) {
            result.push(arr[i]);
        }
    }

    return result.slice(0, n);
}


console.log(doThat([1, 2, 3, 4, 5, 6], 2));
