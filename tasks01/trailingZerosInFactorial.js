//The number of trailing zeros in the factorial of 24 (24!) is 4.
// This is determined by counting the number of times 24 can be divided by powers of 5,
// as each factor of 5 pairs with a factor of 2 to produce a trailing zero.

//"Каково количество нулей в конце результата факториала числа 24?"

function trailingZerosInFactorial(n) {
    let count = 0;
    let powerOfFive = 5;
    while (n >= powerOfFive) {
        count += Math.floor(n / powerOfFive);
        powerOfFive *= 5;
    }
    return count;
}

// Calculate the number of trailing zeros in 24!
console.log(trailingZerosInFactorial(24)); //4
console.log(trailingZerosInFactorial(25)); //6
console.log(trailingZerosInFactorial(26)); //6
console.log(trailingZerosInFactorial(27)); //6
console.log(trailingZerosInFactorial(30)); //7
