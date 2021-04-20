// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.



/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) return false;
    
    return x === reverseNum(x);
};

let reverseNum = (x) => {
    
    let reversed = 0;
    while(x > 0) {
        reversed = (reversed * 10) + (x % 10);
        x = Math.floor(x / 10)
    }
    return reversed;
}