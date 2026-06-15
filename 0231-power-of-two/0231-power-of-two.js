/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n == 1 ) return true;
    if( n==0) return false;

    let updatedNum = n/2;

    if (Number.isInteger(updatedNum)){
        return isPowerOfTwo(updatedNum);
    } else {
        return false;
    }
};