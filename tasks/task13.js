//given arr of number if between 1 return true

function doThat(arr) {
    // if changing order -> module is required Math.abs
    let sortedArr = arr.sort((a, b) => b - a); //Desc order Max -> min


    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] - sortedArr[i + 1] === 1) {
            return true;
        }
    }
    return false;
}

let arr = [1, 4, 8, 1, 9, 3, 4];
console.log(doThat(arr));  // Expected to return true
