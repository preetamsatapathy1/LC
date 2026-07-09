/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let res = "";
    let count = 0;
    let stack = [];
    for(let i=0;i<s.length;i++){
        let curr = s[i];
        if(curr === '('){
            if(count) res+=curr;
            count+=1;
            // stack.push(curr)

        }else{
            count-=1;
            // stack.pop();
            if(count) res+=curr;
        }
    }
    return res;
};