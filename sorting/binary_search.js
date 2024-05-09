//binary tree search, arr is sorted asc

function binarySearch(arr, number) {
    let left = -1;
    let right = arr.length;

    while (right - left > 1) {

        const middle = Math.floor((left + right )/2);

        if (number === arr[middle]) {
            return middle;
        }

        else if (number < arr[middle]) {
            right = middle;
        } else {
            left = middle;
        }
    }

    return false;
}

console.log (binarySearch([1,2,3,4,5,6,7,8], 8));
