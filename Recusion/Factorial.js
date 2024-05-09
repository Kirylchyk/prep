// Факториал
// 0! = 1
// n! = n * (n-1)!

// 2! = 1*2
// 3! = 1*2*3
// 4! = 1*2*3*4 = 24

function factorial(n) {
    // we can add validation if n <0
    if (n===0) {
        return 1;
    } else {
        return n * factorial(n-1); //recursion

    }
}

console.log(factorial(4));