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

// Writing into an HTML element, using innerHTML.
// Writing into the HTML output using document.write().
// Writing into an alert box, using window.alert().
// Writing into the browser console, using console.log().

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
/**
** .push
* TODO: Basic .push */

const numbers = [1 ,2 ,3];
const total = numbers.push(4,5,6,7,8,9);
// const total = numbers.push(4,5,6,7,8);
console.log(numbers);

/**
 ** Arrays = variables that hold multiple values 
*/
const fruits = [ 'apples', 'oranges', 'pears']
// . push adds it to the end of the array
fruits.push('mangos');
// .unshift adds to front of the array
fruits.unshift('strawberries');
// .pop takes the last item out of the array
fruits.pop();
// check to see if its an Array
// console.log(Array.isArray(fruits));
console.log(fruits); 

/**
 ** JSON with for Loop
 *! Sending Data to a string
*/
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2, 
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3, 
        text: 'Dentist appt',
        isCompleted: false
    }
];
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);
// For Loop
for ( let i = 0; i <= 10; i++){
    console.log(`For Loop Number: ${i}`)
}
// For Loop through Array
for ( let i = 0; i < todos.length; i++){
    console.log(todos[i].text);
}
// Simplified For Loop
for ( let todo of todos){
    console.log(todo.id);
}

// While
let i = 0; 
while(i < 10){
    console.log(`While Loop Number: ${i}`)
    i++;
}
/**
  *! High order Array
*/
// forEach 
// todo.forEach(function(todo){
//     console.log(todo.text)
// });
// .map
const todoText = todos.map(function(todo){
    return todo.text;
});
console.log(todoText);
// filter 
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
})
console.log(todoCompleted);
