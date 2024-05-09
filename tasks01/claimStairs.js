//You are climbing a staircase. It takes n steps to reach the top.
//
// Each time you can either climb 1 or 2 steps.
// In how many distinct ways can you climb to the top?


function climbStairs(n) {
    if (n <= 2) return n;
    //fibonacci
    return climbStairs(n - 1) + climbStairs(n - 2);
}

function climbStairs2(n) {
    if (n <= 2) return n;
    let steps = [0, 1, 2];
    for (let i = 3; i <= n; i++) {
        steps[i] = steps[i - 1] + steps[i - 2];
    }
    return steps[n];
}



console.log(climbStairs(10));
console.log(climbStairs2(10));
