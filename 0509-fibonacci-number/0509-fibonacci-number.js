/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    const cache = {};

    const fun = n => {
        if(n in cache) return cache[n];
        if (n <= 1) {
            return n;
        }
        const sum = fun(n-1) + fun(n-2);
        cache[n] = sum;
        return sum;
    }
    return fun(n)

    
};