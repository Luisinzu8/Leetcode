// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  if (x === 0) return true;
  return x === reverseNum(x);
};

let reverseNum = (x) => {
  let reversed = 0;
  while (x > 0) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return reversed;
};

//integer to string solution

var isPalindrome = function (x) {
  if (x < 0) return false;
  if (x >= 0 && x < 10) return true;

  let stringNum = x.toString().split("");

  let j = stringNum.length - 1;

  for (let i = 0; i < stringNum.length; i++) {
    if (stringNum[i] === stringNum[j]) {
      j--;
    } else {
      return false;
    }
  }
  return true;
};
