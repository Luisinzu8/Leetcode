// Given a string s, return the first non-repeating character in it and return its index. If it does not exist, return -1.

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let myMap = {};
    
    for(let i of s) {
        if(myMap[i] === undefined) {
            myMap[i] = 1;
        } else {
            myMap[i]++
        }
    }
    for(let i = 0; i < s.length; i++) {
        let letter = s.charAt(i);
        if(myMap[letter] === 1) {
            return i
        }
    }
    return -1
};