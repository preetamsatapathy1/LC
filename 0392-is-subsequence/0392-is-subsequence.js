/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let i=0, j=0,c =0;
    while(i<s.length && j<t.length){
        if(s[i] == t[j]){
            c++;
            i++;
            j++;
        }else{
            j++;
        }
    }
    return c===s.length
    
};