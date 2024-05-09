function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function sorting(array) {
    let n = array.length; // Use the array's length directly
    for (let j = 0; j < n - 1; j++) {
        for (let i = 0; i < n - 1 - j; i++) {
            if (array[i] > array[i + 1]) {
                swap(array, i, i + 1);
            }
        }
    }
    return array;
}


console.log('Sorted array:', sorting([5, 8, 9, 6, 1, 7, 5]));
