//To flatten an array means to transform an array
// that contains nested arrays of elements into a single array.

function flattenArray(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if (Array.isArray(item)) {
            //Array is global object in js
            //concat() is used to merge two or more arrays into a single array

            // Recursively flatten the item if it is an array
            result = result.concat(flattenArray(item));

        } else {
            // Directly add the item if it's not an array
            result.push(item);
        }
    }

    return result;
}

const arr = [1, 2, 3, {}, [4, [5, 6]],
    [function () {}, "apple", true, ["no", false, [[[[5]]]]]],
    [1, 2, [3, 4, [6, [7, [8]]]]], [[[[[[0]]]]]]];

const flattened = flattenArray(arr);
console.log(flattened);