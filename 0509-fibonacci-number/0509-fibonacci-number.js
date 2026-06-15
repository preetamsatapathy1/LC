/**
 * @param {number} n
 * @return {number}
 */
var fib = function a(n) {
    if (n < 1) return 0;
    if (n == 1) return 1;

    return a(n-1) + a(n-2)
    
};