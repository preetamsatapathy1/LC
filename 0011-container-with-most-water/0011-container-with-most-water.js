/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i=0, j=height.length-1, maxA=0;
    while(i<j){
        const currArea = (j-i)*Math.min(height[i], height[j])
        maxA=Math.max(maxA, currArea);
        if(height[i] < height[j]){
            i++;
        } else {
            j--;
        }
    }
    return maxA;

    
};