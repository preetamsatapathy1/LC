/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x < 2) return x;
    let l = 2, r = Math.floor(x/2);
    while(l <= r){
        let curr = Math.floor((l+r)/2);
        if(curr * curr < x){
            l=curr+1;
        }else if(curr * curr > x){
            r=curr-1;
        } else {
            return curr;
        }
    }
    return r;
};