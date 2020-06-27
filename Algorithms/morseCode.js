/**
 * @param {string[]} words
 * @return {number}
 */
let uniqueMorseRepresentations = (words) => {
    const morseCodeMap = {
        "a": ".-",
        "b": "-...",
        "c": "-.-.",
        "d": "-..",
        "e": ".",
        "f": "..-.",
        "g": "--.",
        "h": "....",
        "i": "..",
        "j": ".---",
        "k": "-.-",
        "l": ".-..",
        "m": "--",
        "n": "-.",
        "o": "---",
        "p": ".--.",
        "q": "--.-",
        "r": ".-.",
        "s": "...",
        "t": "-",
        "u": "..-",
        "v": "...-",
        "w": ".--",
        "x": "-..-",
        "y": "-.--",
        "z": "--.."}
    if(!words) return;
    let morseArr = [];
    for(let word of words){
      let morseWord;
      for(let morse of word){
        morseWord += morseCodeMap[morse]
      }
      if(!morseArr.includes(morseWord)){
        morseArr.push(morseWord);
      }
    }
    return morseArr.length;
};