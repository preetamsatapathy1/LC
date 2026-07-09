/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    let ans = null;
    for(let i=0; i< tokens.length;i++){
        const token = tokens[i];
        let num2, num1;
        if(token === '+' || token === '-' || token === '*' || token === '/'){
            num2 = stack.pop();
            num1 = stack.pop();
        }
        if(token === '+'){
            ans = num2 + num1;
            stack.push(ans)
        }else if (token === '-'){
            ans = num1 - num2;
            stack.push(ans)
        }else if (token === '/'){
            ans = Math.trunc(num1 / num2);
            stack.push(ans)
        }else if (token === '*'){
            ans = num2 * num1;
            stack.push(ans)
        } else {
            stack.push(parseInt(token))
        }

    }
    return stack[0];
};