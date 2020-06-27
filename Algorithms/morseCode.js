const uniqueMorseRepresentations = function(words) {
  const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]   
  return words.reduce((acc, word, i) => {
    let code = '';
    for (const letter of word) code += morse[letter.charCodeAt(0) - 97];
    if (!acc.some(val => val === code)) acc.push(code);
    return acc;
  }, []).length;
};