// A pangram is a sentence where every letter of the English alphabet appears at least once.

// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

 

// Example 1:

// Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
// Output: true
// Explanation: sentence contains at least one of every letter of the English alphabet.

/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let alphabet = [
        'a','b','c','d','e','f','g',
       'h','i','j','k','l','m','n',
        'o','p','q','r','s','t','u',
       'v','w','x','y','z'
    ];
   
   for(let i = 0; i < alphabet.length; i++) {
       if(sentence.indexOf(alphabet[i]) === -1) {
           return false;
           break;
       }
   }
   return true;
};