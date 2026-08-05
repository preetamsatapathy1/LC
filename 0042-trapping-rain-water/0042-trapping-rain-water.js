/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let maxL = [height[0]], maxR=new Array(height.length), sum=0;
    maxR[height.length-1] = height.at(-1);
    for(let i=1; i<height.length;i++) {
        maxL[i] = Math.max(height[i], maxL[i-1]);
    }

    for(let i=height.length-2; i>=0; i--) {
        maxR[i] = Math.max(maxR[i+1], height[i])
    }


    for(let i=0; i<height.length;i++){
        const level = Math.min(maxL[i], maxR[i]) - height[i];
        sum+=level;
    }
    return sum;
};