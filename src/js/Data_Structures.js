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
    // 1st start .replace().toLowerCase();
    // .replace() method returns a new string with one, some, or all matches of a pattern replaced by a replacement
    str = str.replace().toLowerCase();

    // create a variable that you want it to reverse 
    // The split() method splits a string into an array of substrings. The split() method returns the new array
    var reversed = str.split('').reverse().join('');

    return str === reversed;
}
console.log(isPalindrome("racecar"));


function isPalindrome2(str2){
    str2 = str2.replace().toLowerCase();
    let reverse = str2.split('').reverse().join('');
    return str2 === reverse;
}
console.log (isPalindrome2("racecar"));


// More in depth of Palindrome 
// step 1 Created a function 
function isPalindrome3(str3){
// step 2 use .replace() method to find and replace all matches of a specified value with a new value. In this case, it is used to remove any spaces in the input string.
// toLowerCase() method to convert the entire string to lowercase. This ensures that the comparison of the string and its reverse will be case-insensitive.
str3 = str3.replace().toLowerCase();
//step 3 The third line declares a variable "reverse" and assigns to it the result of splitting the input string into an array of characters, reversing the order of the characters, and then joining them back together into a single string. The split() method is used to convert the string into an array of characters, while the reverse() method is used to reverse the order of the characters. The join() method is used to join the characters back together into a single string.
let reverse3 = str3.split('').reverse('').join('');
// returns a comparison of the original input string and the reversed string using the strict equality operator ===. If the two strings are identical, then the function returns true, indicating that the input string is a palindrome. If the two strings are not identical, then the function returns false, indicating that the input string is not a palindrome.
return str3 === reverse3;
}

console.log(isPalindrome3("racecar"));
// The last line uses the console.log() method to output the result of calling the function with the input string "racecar". Since "racecar" is a palindrome, the function returns true, which is logged to the console.
// 4th attempt
function isPalindrome4(str4){
    str4 = str4.replace().toLowerCase();
    let reversestr4 = str4.split("").reverse("").join("")
    
    return str4 === reversestr4;
    
}
console.log(isPalindrome4("racecar"));
// Palindrome with a loop example
// let letters2 = [];
// let word2 = "racecar";
// let rword2 = "";

// // put letters of word into stack
// for (let i = 0; i < word.length; i++ ){
//     letters.push(word[i]);
// }
// // pop off the stack in reverse order 
// for (let i = 0; i < word.length; i++){
//     rword += letters.pop();
// }

// Step 1 create a variable of an array;
let letters2 = [];
// Step 2 create a variable of the string "racecar";
let word2 = "racecar";
// Step 3 create a varaible of an empty string;
let reverseWord = "";
// Step 4 create a for loop
for (let i = 0; i < word2.length; i++){
// Step 5  add .push()
    letters2.push(word2[i]);
}
