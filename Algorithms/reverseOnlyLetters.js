/**
 * @param {string} S
 * @return {string}
 */
let reverseOnlyLetters = function(S) {
  if (S.length < 2) return S;
  const a = S.split('');
  let i = 0;
  let j = S.length - 1;
  while (i < j) {
    while (!/[a-zA-Z]/.test(S[i])) i++;
    while (!/[a-zA-Z]/.test(S[j])) j--;
    if (i < j) [a[i], a[j]] = [a[j], a[i]];
    i++;
    j--;
  }
  return a.join('');
};