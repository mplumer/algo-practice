// --- Directions
// Given a string, return a new string with the reversed
// order of characters


//---Solution 1

// function reverse(str) {
//     return str.split('').reverse().join('');
// }
// module.exports = reverse;


// --- Solution 2
// Create string called 'reversed'
// For each character in the provided string, Take the character and add it to the start if 'reversed'
// Return the variable 'reversed'

// function reverse(str) {
//     let reversed = '';

//     for (let character of str) {
//         reversed = character + reversed;
//     }

//     return reversed;
// }

// module.exports = reverse;

// --- Solution 3
// Turn string into array using split
// set up reduce helper funtion

function reverse(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;