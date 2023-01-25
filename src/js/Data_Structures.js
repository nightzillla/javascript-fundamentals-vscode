/*  Stacks! */

/* functions: 
    push - placing data onto a stack
    pop - removes the top element of a stack
    peak - display top element of a stack
    length or size - determining how many elements are on a stack 
*/

// Palindrome is a word that is spelled the same forward and backwars like bob 

let letters = [];
let word = "racecar";
let rword = "";

// put letters of word into stack
for (let i = 0; i < word.length; i++ ){
    letters.push(word[i]);
}
// pop off the stack in reverse order 
for (let i = 0; i < word.length; i++){
    rword += letters.pop();
}

// if ( rword === word){
//     console.log(word + " is a palindrome.");
// } else {
//     console.log(word + "is not a palindrome.")
// }

// Create a function that returns a Palindrome
// function isPalindrome(str) {
//     // remove non-alphanumeric characters and convert to lowercase
//     str = str.replace(/[^a-z0-9]/gi,'').toLowerCase();
//     // reverse the string
//     var reversed = str.split('').reverse().join('');
//     // check if the reversed string is equal to the original string
//     return str === reversed;
//   }
//   console.log (isPalindrome("racecar"));

// First you create a Function 
// you want it to accept a string
function isPalindrome(str){
    // you want to code str = str.replace because 
    // .replace() method returns a new string with one, some, or all matches of a pattern replaced by a replacement
    str = str.replace().toLowerCase();

    // create a variable that you want it to reverse 
    // The split() method splits a string into an array of substrings. The split() method returns the new array
    var reversed = str.split('').reverse().join('');

    return str === reversed;
}
console.log(isPalindrome("racecar"));