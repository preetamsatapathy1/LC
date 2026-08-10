/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

const compareObj = (o1, o2) => {
    let k1 = Object.keys(o1);
    let k2 = Object.keys(o2);
    if(k1.length != k2.length) return false;

    for(let i=0; i<k1.length; i++) {
        if(!(k1[i] in o2) || o2[k1[i]] != o1[k1[i]]) return false
    }
    return true;
}

const convertStrToMap = str => {
    let sMap = {}
    for(let i=0; i<str.length; i++) {
        const char = str[i];
        if(char in sMap){
            sMap[char] = sMap[char]+1;
        }else {
            sMap[char] = 1;
        }
    }
    return sMap;
}

var checkInclusion = function(s1, s2) {
    let sMap = convertStrToMap(s1);
    const l = s1.length;
    let cMap = convertStrToMap(s2.substring(0, l-1));

    for(let i=l-1; i< s2.length; i++) {
        const curr = s2[i];
        if(curr in cMap) {
            cMap[curr] = cMap[curr] + 1;
        } else {
            cMap[curr] = 1
        }

        if(compareObj(cMap, sMap)) return true;

        const keyToDel = s2[i-l+1];
        if(keyToDel in cMap && cMap[keyToDel] === 1){
            delete cMap[keyToDel];
        }else{
            cMap[keyToDel] = cMap[keyToDel] -1;
        }
        
    }
    return false;
};