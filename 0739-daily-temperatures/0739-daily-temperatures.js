/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temp) {
    let stack = [];
    let m = {};
    let ans = [];

    for(let i=temp.length-1;i>=0;i--){
        const curr= temp[i];
        if(curr < temp[stack.at(-1)]){
            ans[i] = stack.at(-1) - i;
        }else if(stack.length){
            while(stack.length){
                if(curr < temp[stack.at(-1)]){
                    ans[i] = stack.at(-1) - i;
                    break;
                }else{
                    stack.pop();
                }
            }
        }

        if(ans[i] == undefined){
            ans[i] = 0
        }
        stack.push(i);
    }
    return ans;
};