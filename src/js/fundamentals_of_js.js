/**
 ** Important information is highlighted
*/
/**
 *! Deprecated method, do not use
 */
/**
 * ? Should this method be exposed in the public API?
 */
/**
 * TODO: refactor this method so that is conforms to the API
 */
/**
 ** JS Variables 
*/
// Create a Variable called carName, assign the value Volvo to it.
let carName = "Volvo";

console.log("I created a variable and declared the value of = "+carName);

// JS Operators
// Multiply
function multiply(multiNum1, multiNum2){
    return multiNum1 * multiNum2;
}
console.log("Multiplication function " + multiply(4,5));

// Division

function division(divisionNum1, divisonNum2){
    return divisionNum1 / divisonNum2;
}
console.log("This is a division function " + division(12, 2));

// Remainder 

function remainder(remainderNum1, remainderNum2) {
    return remainderNum1 % remainderNum2;
}
console.log("This is the remainder function" + remainder(15, 9));

/** 
 ** JS Data Types 
 */
                          // DATA TYPE
let length = 16;          // NUMBER
let lastName = "Johnson"; // STRING
const x = {
    firstName: "John",
    lastName: "Doe"
};                        // Object

/**
 *! Arrays are extremely versatile data structures, used all the time, and so there are many functioons that can handle them to do useful things.
 */
// spread syntax
// The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.
let array1 = ['h', 'e', 'l', 'l', 'o'];
let array2 = [...array1];
console.log(array2);