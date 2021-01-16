/*
Given a string s and an integer array indices of the same length.

The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

Return the shuffled string.

 

Example 1:


Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
Output: "leetcode"
Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.
*/

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
// given string s
// given integer Array indices
// array and string are same length
//shuffle string s into position of indices[i]
//return shuffled string

let s = "aiohn", indices = [3,1,4,2,0]
console.time('test')
let restoreString = (s, indices) => {
    let result = [];
    for(let i = 0; i < s.length; i++) {
        result[indices[i]] = s[i]
    }
    return result.join('');
};
console.timeEnd('test')
console.log(restoreString(s, indices))
