/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let cache = {};
    const rec = (remAmt) => {
        if(remAmt in cache) return cache[remAmt]
        let minCoins = Infinity;
        if(remAmt == 0) return 0;
        if(remAmt < 0) return -1;
        for(let i=0; i<coins.length; i++) {
            const res = rec(remAmt - coins[i]);
            if(res >= 0) {
                minCoins = Math.min(minCoins, 1 + res);
            }
        }
        cache[remAmt] = minCoins === Infinity ? -1 : minCoins;
        return cache[remAmt]
    }
    return rec(amount);
    
};