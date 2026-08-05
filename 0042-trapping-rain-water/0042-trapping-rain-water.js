/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let n = height.length;
    let maxL = [height[0]], maxR=new Array(n), sum=0;
    maxR[n-1] = height.at(-1);
    for(let i=1; i<n;i++) {
        maxL[i] = Math.max(height[i], maxL[i-1]);
        maxR[n-i-1] = Math.max(height[n-i-1], maxR[n-i])
    }

    for(let i=0; i<n;i++){
        const level = Math.min(maxL[i], maxR[i]) - height[i];
        sum+=level;
    }
    return sum;
};