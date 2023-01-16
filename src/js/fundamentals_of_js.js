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
