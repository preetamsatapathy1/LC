/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let ans = []

    const backTrack = (path, pos, sum) => {
        if(path.length > k || sum > n) return;
        if(sum === n && path.length === k){
            ans.push([...path])
        }

        for(let i=pos;i<=9;i++){
            path.push(i);
            sum+=i;
            backTrack(path, i+1, sum);
            path.pop();
            sum-=i;
        }
    }

    backTrack([], 1, 0)
    return ans
};