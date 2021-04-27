// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let word3 = '';
    
    let i = 0;
    
    while(i < Math.min(word1.length, word2.length)) {
        word3 += word1[i];
        word3 += word2[i];
        i++
    }
    
    word3 += word1.slice(i);
    word3 += word2.slice(i);
    
    return word3
};