// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//Map Solution

var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    
    let myMap = new Map();
    
    for(let i = 0; i < s.length; i++) {
        myMap[s[i]] ? myMap[s[i]]++ : myMap[s[i]] = 1;
    }
    for(let i = 0; i < t.length; i++) {
        if(myMap[t[i]]) {
            myMap[t[i]]--;
        } else {
            return false
        }
    }
    return true
};