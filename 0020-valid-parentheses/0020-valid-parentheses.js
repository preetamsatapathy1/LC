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
        if(char in refMap && refMap[char] === stack[stack.length-1]){
            stack.pop()
        }else{
            stack.push(char)
        }
    }
    return !Boolean(stack.length)

    
};