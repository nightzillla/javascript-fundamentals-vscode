// Scope Chain Resolution
// Closures
// Hoisting

var x = 21;             // Global variable
var girl = function () {
    // console.log(x);    // output will be undefined
    var x = 20;        // Local variable
};
console.log(x);       // output will be 21
girl();
 
/**
 * TODO: What will be logged in first example and in second example? */
// output will be undefine 
let var1;
console.log(var1);
console.log(typeof var1);
// output will be an object 
let var2 = null;
console.log(var2);
console.log(typeof var2);

/**
 * TODO: What will be console.logged here */
// Question 1
/**
 *! You will get an error because foo is not defined */
// Hoisting declaration of your variable will bubble to the top of the file. This works when you're using var keyword or function keyword
// output will be an error
console.log(foo);
foo = 1;

// Question 2
// output will be undefined
console.log(foo2);
var foo2 = 2;

// Question 3
// output will be 3
foo3 = 3;
console.log(foo3);
var foo3;

/**
 *! const & let a = 1; will only existed only in line 46 it wont get hoisted && using var will get hoisted to the top. 
 */