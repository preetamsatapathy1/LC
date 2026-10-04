/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let ans = []
    const back = (path, sum, pos) => {
        if(sum > target) return
        if(sum === target){
            ans.push([...path])
            return
        }
        for(let i=pos;i<candidates.length;i++){
            path.push(candidates[i]);
            sum+=candidates[i]
            back(path, sum, i);
            path.pop();
            sum-=candidates[i];
        }
    }
    back([], 0, 0)
    return ans
};