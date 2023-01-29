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

let var2 = null;
console.log(var2);
console.log(typeof var2);