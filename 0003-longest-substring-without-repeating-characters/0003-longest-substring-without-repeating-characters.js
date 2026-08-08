/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = {};
    let i=0, j=0, max=0;
    while(j<s.length){
        const curr = s[j];
        if(curr in map && map[curr] >=i){
            i = map[curr] + 1;
        }
        max = Math.max(j-i+1, max)
        map[curr] = j
        j++;

    }
    return max
};