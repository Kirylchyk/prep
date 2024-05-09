// Write a function that prints the numbers
// 1 to 5 with a second delay between each print.


function doThat(int) {
    let result = 1;

    // Set up the interval to call action every 1 second
    const interval = setInterval(action, 1000);

    function action() {
        console.log(result);  // Print the current number
        result++;
        if (result > int) {
            clearInterval(interval);  // Stop the interval when the count is reached
        }
    }

}

doThat(5);

