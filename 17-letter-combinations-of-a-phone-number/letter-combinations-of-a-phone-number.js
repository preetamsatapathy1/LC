/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const letters = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }
    let ans = []

    const backtrack = (path, pos) => {
        if(path.length === digits.length) {
            ans.push(path.join(""))
        }
        if(pos >= digits.length) return;
        const choice = letters[digits[pos]];
        for(let i=0; i< choice.length; i++){
            const curr = choice[i];
            path.push(curr);
            backtrack(path, pos+1);
            path.pop()
        }
    }

    backtrack([], 0)
    return ans
};