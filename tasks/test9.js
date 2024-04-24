//Find if this array has x

function doThat(arr, n) {

    for (let i=0; i<arr.length; i++ ) {
        if (arr[i] === n) {
            return true

        }
    }
}


console.log(doThat([1,2,2,3],3))