//To create an async map function without using promises
// or async/await.

function asyncMap(array, transform, finalCallback) {
    // Initialize an empty array to hold the transformed values
    let results = [];
    // Track the number of completed transformations
    let completed = 0;

    // Iterate over the input array
    array.forEach((item, index) => {
        // Call the transform function for each item
        transform(item, (error, transformedItem) => {
            if (error) {
                finalCallback(error, null);
                return;
            }

            // Store the result at the correct index
            results[index] = transformedItem;
            completed += 1;

            // If all items have been transformed, call the final callback with the results
            if (completed === array.length) {
                finalCallback(null, results);
            }
        });
    });
}

// Example usage:
asyncMap([1, 2, 3], (item, callback) => {
    // Simulate an async operation using setTimeout
    setTimeout(() => {
        callback(null, item * 2); // No error, so pass null for the error
    }, 100);
}, (error, results) => {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('All items have been processed:', results);
    }
});



