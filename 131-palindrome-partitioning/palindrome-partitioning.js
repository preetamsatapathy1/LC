/**
 * @param {string} s
 * @return {string[][]}
 */

const isPal = s => {
    let i=0, j=s.length-1;
    while(i<j){
        if(s[i] !== s[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}
var partition = function(s) {
    let result = [];
    const backtrack = (path, remStr) => {
        if(!remStr.length){
            result.push([...path])
        }

        for(let i=1;i<=remStr.length;i++){
            const curr = remStr.substring(0, i);
            const nextRem = remStr.substring(i)
            if(!isPal(curr)) continue;
            path.push(curr);
            backtrack(path, nextRem);
            path.pop();
        }
    }
    backtrack([], s);
    return result;
    
};