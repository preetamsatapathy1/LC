/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let frq = {};
    for(let i=0; i<s.length; i++){
        const ch = s[i]
        frq[ch] = frq[ch] ? frq[ch]+1 : 1
    }

    for(let i=0; i<s.length; i++){
        if(frq[s[i]] === 1){
            return i
        }
    }
    return -1;
    
};