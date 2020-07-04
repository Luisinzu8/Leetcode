/**
 * @param {string} S
 * @return {string}
 */
let reverseOnlyLetters = (S) => {
    // if string is less than 2 letters return string
    if(S.length < 2) return S;
    //use split method to split string into substrings
    let letters = S.split('');
    //use 2 pointer technique to iterate through letters. one pointer starts from the beginning
    let i = 0;
    //this pointer starts from the end
    let j = S.length - 1;
    while(i < j) {
        // while iterating through letters, if its not a letter skip to the next character 
        while (!/[a-zA-Z]/.test(S[i])) i++;
        while (!/[a-zA-Z]/.test(S[j])) j--;
        // while iterating and pointers have not met in the middle yet, reverse positions of the letters[i] with letters[j]
        if (i < j) [letters[i], letters[j]] = [letters[j], letters[i]];
        i++;
        j--;
    }
    // use join method to combine our previously split string into one string
    return letters.join('')
};