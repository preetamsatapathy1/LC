/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let h=0, n=0, c=0;
    while(n < needle.length && h < haystack.length) {
        if(haystack[h] === needle[n]){

            n++;
            c++;
            if(n === needle.length) return h+1-n;
        } else{
            h = h - n
            n=0;
            c =0;
        }
        h++;
    }
    return -1
    
};