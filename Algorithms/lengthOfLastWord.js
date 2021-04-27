// Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.

// A word is a maximal substring consisting of non-space characters only.

 /**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // Basically if theres an empty string, return 0
    if(s.length < 1) return 0;
    //wordLength will be used to count the length of the last word in the string
    let wordLength = 0;
    //assuming we will run into cases where the first index we run into is a space
    //this variable will allow us to break out of the loop once we start counting 
    let emptyChar = true;
    //for loop starting from the end because we want the length of the LAST word
    for(let i = s.length - 1; i >= 0; i--) {
        //if current index is not a space,
        if(s[i] !== ' ') {
            //wordLength + 1
            wordLength++;
            //emptyChar is now false because we have a character to count
            emptyChar = false;
            //if emptyChar is NOT false break out of the loop
        } else if(!emptyChar) {
            break;
        }
    }
    return wordLength;
};