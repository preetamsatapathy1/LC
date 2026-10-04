/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let ans = [];

    const backtrack = (path, pos) => {
        if(path.length == k){
            ans.push([...path]);
            return;
        }
        for(let i=pos;i<=n;i++){
            path.push(i);
            backtrack(path, i+1)
            path.pop()
        }
    }

    backtrack([], 1);
    return ans;
    
};