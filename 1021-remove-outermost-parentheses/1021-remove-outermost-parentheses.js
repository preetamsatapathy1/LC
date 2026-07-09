/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let res = "";
    let stack = [];
    for(let i=0;i<s.length;i++){
        let curr = s[i];
        if(curr === '('){
            if(stack.length) res+=curr;
            stack.push(curr)

        }else{
            stack.pop();
            if(stack.length) res+=curr;
        }
    }
    return res;
};