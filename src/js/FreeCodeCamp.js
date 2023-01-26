/** Basic JavaScript */
// Using // will tell JavaScript to ignore the remainder of the text on the current line. This is an in-line comment:
// EXAMPLE
// This is a comment

// You can make a multi-line comment beginning with /* and ending with */. This is a multi-line comment:
/* This is a
multi-line comment */

/** Declare JavaScript Variables  */
// In computer science, data is anything that is meaningful to the computer. JavaScript provides eight different data types which are undefined, null, boolean, string, symbol, bigint, number, and object.
// For example, computers distinguish between numbers, such as the number 12, and strings, such as "12", "dog", or "123 cats", which are collections of characters. Computers can perform mathematical operations on a number, but not on a string.
// Variables allow computers to store and manipulate data in a dynamic fashion. They do this by using a "label" to point to the data rather than using the data itself. Any of the eight data types may be stored in a variable.
// Variables are similar to the x and y variables you use in mathematics, which means they're a simple name to represent the data we want to refer to. Computer variables differ from mathematical variables in that they can store different values at different times.
// EXAMPLES
// Setup
var a;
a = 7;
var b;

// Only change code below this line
b = a;

/** Initializing Variables with the Assignment Operator */
// Define a variable a with var and initialize it to a value of 9.
var a = 9;

/** Declare String Variables */
// Create two new string variables: myFirstName and myLastName and assign them the values of your first and last name, respectively.
var myFirstName = "Danny"
var myLastName = "Nguyen"

/** Understanding Uninitialized Variables */
// Only change code below this line
var a = 5
var b = 10
var c = "I am a"
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";

/** Understanding Case Sensitivity in Variables */
// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

/** Explore Differences Between the var and let Keywords */
let catName = "Oliver";
let catSound = "Meow!";

/** Declare a Read-Only Variable with the const Keyword */
const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

/** Add Two Numbers with JavaScript */
// Change the 0 so that sum will equal 20.
const sum = 10 + 10;

/** Subtract One Number from Another with JavaScript */
// Change the 0 so the difference is 12.
const difference = 45 - 33;

/** Multiply Two Numbers with JavaScript */
// Change the 0 so that product will equal 80.
const product = 8 * 10;

/** Divide One Number by Another with JavaScript */
// Change the 0 so that the quotient is equal to 2.
const quotient = 66 / 33;

/** Increment a Number with JavaScript */
// Change the code to use the ++ operator on myVar.
let myVar = 87;

// Only change code below this line
myVar = ++myVar;

/** Decrement a Number with JavaScript */
let myVar = 11;

// Only change code below this line
myVar = --myVar;

/** Create Decimal Numbers with JavaScript */
// Create a variable myDecimal and give it a decimal value with a fractional part (e.g. 5.7).
const ourDecimal = 5.7;

// Only change code below this line
let myDecimal = 5.7;

/** Multiply Two Decimals with JavaScript */
// Change the 0.0 so that product will equal 5.0.
const product = 2.0 * 2.5;

/** Divide One Decimal by Another with JavaScript */
// Change the 0.0 so that quotient will equal to 2.2.
const quotient = 4.4 / 2.0; // Change this line

/** Finding a Remainder in JavaScript */
// Set remainder equal to the remainder of 11 divided by 3 using the remainder (%) operator.
const remainder = 11 % 3;

/** Compound Assignment With Augmented Addition */
// Convert the assignments for a, b, and c to use the += operator.
let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;

/** Compound Assignment With Augmented Subtraction */
// Convert the assignments for a, b, and c to use the -= operator.
let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;

/** Compound Assignment With Augmented Multiplication */
// Convert the assignments for a, b, and c to use the *= operator.
let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;

/** Compound Assignment With Augmented Division */
// Convert the assignments for a, b, and c to use the /= operator.
let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;

/** Escaping Literal Quotes in Strings */
// Use backslashes to assign a string to the myStr variable so that if you were to print it to the console, you would see:
const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

/** Quoting Strings with Single Quotes */
// Change the provided string to a string with single quotes at the beginning and end and no escape characters.
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

/** Basic JavaScript: Escape Sequences in Strings | freeCodeCamp.org */
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line

/** Concatenating Strings with Plus Operator */
// Build myStr from the strings This is the start. and This is the end. using the + operator. Be sure to include a space between the two strings.
const myStr = "This is the start." + " This is the end."; // Change this line

/** Concatenating Strings with the Plus Equals Operator */
// Build myStr over several lines by concatenating these two strings: This is the first sentence. and This is the second sentence. using the += operator. Use the += operator similar to how it is shown in the example and be sure to include a space between the two strings. Start by assigning the first string to myStr, then add on the second string.

let myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

/** Constructing Strings with Variables */
// Set myName to a string equal to your name and build myStr with myName between the strings My name is and and I am well!
// Only change code below this line
const myName = "Danny";
const myStr = "My name is" + myName + "and I am well!";

/** Appending Variables to Strings */
// Set someAdjective to a string of at least 3 characters and append it to myStr using the += operator.
// Change code below this line
const someAdjective = "awesome!";
let myStr = "freeCodecamp is ";
myStr += someAdjective;

/** Find the Length of a String */
// Use the .length property to set lastNameLength to the number of characters in lastName.
// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;

/** Use Bracket Notation to Find the First Character in a String */
// Use bracket notation to find the first character in the lastName variable and assign it to firstLetterOfLastName.
// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line

/** Understand String Immutability */
// Correct the assignment to myStr so it contains the string value of Hello World using the approach shown in the example above.
// Setup
let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line

/** Use Bracket Notation to Find the Nth Character in a String */
// Let's try to set thirdLetterOfLastName to equal the third letter of the lastName variable using bracket notation.
// Setup
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line

/** Use Bracket Notation to Find the Last Character in a String */
// Use bracket notation to find the last character in the lastName variable.
// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line

/** Use Bracket Notation to Find the Nth-to-Last Character in a String */
// Use bracket notation to find the second-to-last character in the lastName string.
// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length -2]; // Change this line

/** Word Blanks */
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
var wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + "."; // Only change this line;