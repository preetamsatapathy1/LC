/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let dp = [0, 1];
    for(let i=2; i<=n ;i++){
        const curr = dp[i-1] + dp[i-2];
        dp.push(curr)
    }
    return dp[n]
};