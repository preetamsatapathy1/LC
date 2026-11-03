/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let dp = [0, 0];
    for(let i=2; i<=cost.length; i++) {
        const c = Math.min(dp[i-1] + cost[i-1] , dp[i-2] + cost[i-2]);
        dp.push(c)
    }
    return dp[dp.length - 1]
};