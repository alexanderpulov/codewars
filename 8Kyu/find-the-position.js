// DESCRIPTION:
// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"



// SOLUTION:
function position(letter){
    let alphabet = '0abcdefghijklmnopqrstuvwxyz'
    return `Position of alphabet: ${alphabet.indexOf(letter)}`
   }