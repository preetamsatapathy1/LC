/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    const price = [];
    let ans = 0;
    for(let i=0; i<costs.length; i++){
        price.push([costs[i][1] - costs[i][0], i]); //B-A
    }
    price.sort((a,b) => a[0]-b[0]);
    for(let i=0; i<price.length; i++) {
        const currIndex = price[i][1]
        if(i < (costs.length / 2)) {
            ans+=costs[currIndex][1]
        } else {
            ans+=costs[currIndex][0]
        }
    }
    return ans

    
};