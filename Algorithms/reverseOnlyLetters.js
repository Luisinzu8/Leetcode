/**
 * @param {string} S
 * @return {string}
 */
let reverseOnlyLetters = function(S) {
  // if string is less than 2 letters return the string
  if (S.length < 2) return S;
  // create a constant variable to split the string
  const a = S.split('');
  //create 2 variables to iterate through constant a string
  let i = 0;
  let j = S.length - 1;
  while (i < j) {
    while (!/[a-zA-Z]/.test(S[i])) i++;
    while (!/[a-zA-Z]/.test(S[j])) j--;
    if (i < j) [a[i], a[j]] = [a[j], a[i]];
    i++;
    j--;
  }
  //return constant a string with .join method to combine the letters
  return a.join('');
};