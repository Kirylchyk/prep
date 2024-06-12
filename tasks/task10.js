//in a given arr sort out only odd numbers
function doThat (arr) {

    let new_arr = [];

    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] % 2) > 0) {
            new_arr.push(arr[i]);
        }
    }

    return new_arr.sort();

}

console.log(doThat([5,8,6,3,4]));



