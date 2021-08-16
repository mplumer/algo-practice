// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Solution 1
// use str.split to make string an array.
// use .reverse to reverse the array.
// use .join to turn the array back into a string.
// return a boolean

function palindrome(str) {
    const reversed = str.split('').reverse().join('');

    return str === reversed;
}

module.exports = palindrome;

// Solution 2
// use str.split to make string an array.
// use .every to receive first char from array and index of char 
// iterate through the characters, comparing each char to the last char in the index
// return a boolean

// function palindrome(str) {
//     return str.split('').every((char, i) => {
//         return char === str[str.length - i - 1];
//     });
// }

// module.exports = palindrome;
