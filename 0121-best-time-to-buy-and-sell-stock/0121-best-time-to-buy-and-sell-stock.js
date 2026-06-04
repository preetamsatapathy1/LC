/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min=prices[0], maxP = 0;
    for(let i=1; i <prices.length; i++){
        let profit = Math.max(prices[i] - min, 0)
        maxP = Math.max(maxP, profit)
        min = Math.min(min, prices[i])
    }
    return maxP
    
    
};