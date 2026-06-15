/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    const cache = {0: 0, 1: 1};

    const fun = n => {
        if(n in cache) return cache[n];
        
        cache[n] = fun(n-1) + fun(n-2);
        return cache[n];
    }
    return fun(n)
};