// 0 1 1 2 3 5 8
// fibonacci(0) = 0
// fibonacci(1) = 1
// fibonacci(n) = fibonacci(n-1) + fibonacci (n-2), n>1


function fibonacci1(n) {
    let a = 0, b = 1, sum = 0;
    for (let i = 2; i <= n; i++) {
        sum = a + b;
        a = b;
        b = sum;
    }
    return n > 0 ? b : a;
}


function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n-1) + fibonacci (n-2);
    }
}



console.log(fibonacci1(10)); // Output: 55
console.log(fibonacci1(0));  // Output: 0
console.log(fibonacci1(7));  // Output: 13 - [0 1 1 2 3 5 8]

console.log(fibonacci(7));
console.log(fibonacci(6));