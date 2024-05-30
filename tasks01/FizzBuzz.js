//Write a function that iterates over numbers from 1 to a specified limit.
// Print "Fizz" if the number is divisible by 3.
// Print "Buzz" if the number is divisible by 5.
// If the number is divisible by both 3 and 5, print "FizzBuzz".
// Otherwise, simply print the number itself.


function doThat(n) {
    let results = [];
    for (let i = 1; i <= n; i++) {
        let output = "";

        if (i % 3 === 0)
        {output += "Fizz";}
        if (i % 5 === 0)
        {output += "Buzz";}

        results.push(output || i);
    }
    return results;
}

console.log(doThat(100));

