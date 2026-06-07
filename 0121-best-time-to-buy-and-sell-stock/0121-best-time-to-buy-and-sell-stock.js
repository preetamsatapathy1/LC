/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(price) {
    let minPrice = price[0], maxP = 0;
    for(let i=1; i<price.length; i++) {
        let currP = price[i] - minPrice;
        maxP = Math.max(currP, maxP);
        minPrice = Math.min(minPrice, price[i]);
    }
    return maxP;
};