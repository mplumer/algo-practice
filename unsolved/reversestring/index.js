// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution 2

function reverse(str) {
    let reversed = '';

    for ( let char of str) {
        reversed = char + reversed;
    }

    return reversed;
}

module.exports = reverse;


// Solution 1

// function reverse(str) {
//     const reversed = str.split('').reverse().join('');

//     return reversed;
// }