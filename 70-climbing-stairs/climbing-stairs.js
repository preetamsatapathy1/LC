/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let dp = [0, 1, 2];
    for(let i=3;i<=n;i++){
        const c = dp[i-1] + dp[i-2];
        dp.push(c);
    }
    return dp[n];
};