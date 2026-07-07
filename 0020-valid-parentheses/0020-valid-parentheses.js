/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const refMap = {
        '}':'{',
        ']': '[',
        ')':'('
    }

    const stack = [];
    for(char of s){
        if(!(char in refMap)) {
            stack.push(char);
        } else {
            const lastVal = stack.pop();
            if(refMap[char] !== lastVal) {
                return false
            }
        }
    }
    return stack.length == 0
};