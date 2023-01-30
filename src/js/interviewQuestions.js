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
 ** Null and Undefine 
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
 ** Hoisting
 * TODO: What will be console.logged here */
// Question 1
/**
 *! You will get an error because foo is not defined */
// Hoisting declaration of your variable will bubble to the top of the file. This works when you're using var keyword or function keyword
// output will be an error
// console.log(foo);
// foo = 1;

// Question 2
// output will be undefined
// console.log(foo2);
// var foo2 = 2;

// Question 3
// output will be 3
// foo3 = 3;
// console.log(foo3);
// var foo3;

/**
 *! const & let a = 1; will only existed only in line 46 it wont get hoisted && using var will get hoisted to the top. 
 */

 /**
 ** Closures 
* TODO: Create a counter function which has increment and getValue functionality */

// const privateSecret = () => {
//     // this is closures
//     const secret = "foo";

//     return () => secret;
// };
// const getSecret = privateSecret();
// console.log(getSecret());

// const privateCounter = () => {
//     let count = 0; 
    
//     return {
//         increment: (val = 1) => {
//             count += val;
//         },
//         getValue: () => {
//             return count;
//         }
//     }
// }
// const counter = privateCounter();
// console.log(counter.getValue());
// counter.increment();
// console.log(counter.getValue());
/**
 *! closure means that we have access inside of a function to the outside scope
 */

 /**
 ** Currying 
* TODO: Write a function which helps to achieve multiply(a)(b) and returns product of a and b */

// const multiply = (num1) => {
//     return (num2) => {
//         return num1 * num2;
//     };
// };

// One line
const multiply = (num1) => (num2) => num1 * num2
 /**
* TODO: Create a curry function */

// const curriedSum = curry((a, b, c) => a + b + c)
const curry = function (fn){
    var arity = fn.length;
    // console.log("arity", arity);
    return function f1(...args){
        if (args.length >= arity){
            // console.log("enough arguments");
            return fn(...args);
        } else {
            // console.log("need more arguments")
            return function f2(...morArgs){
                var newArgs = args.concat(morArgs)
                return f1(...newArgs);
            };
        }
    // console.log("f1", args);
    };
};
const curriedSum = curry((a, b, c) => a + b + c);
const partialCurriedSum = curriedSum(1);
console.log(partialCurriedSum(2, 3));

const get = curry((property, object) => object[property]);
const getId = get("id");
const map = curry((fn, values) => values.map(fn));
const getIds = map(getId);

// function sayHello (){
//     return "Hi"
// }
// console.log(sayHello())

/**
 ** Loops 
* TODO: Write a function that will reverse the array given */

const arrayLoop1 = [10,9,8,7,6,5,4,3,2,1]

function reverseArray(array1) {
    return array1.reverse();
}

console.log(reverseArray(arrayLoop1));
/**
 ** Loops 
* TODO: Write a function that will be used for palindrome */

function isPalindrome1(words){
    words = words.replace().toLowerCase(); 
    let reverseWords = words.split('').reverse('').join('');
    return words === reverseWords;
}

console.log(isPalindrome1("racecar"));

/**
 ** Loops 
* TODO: Write a function in a for Loop that will be used for palindrome */


// function isItPalindrome(str){
//     let someStrings = [];
//     let reverseStrings = "";

//     for ( let i = 0; i < str.length; i++){
//         someStrings.push(str[i]);
//     }

//     for ( let i = 0; i < str.length; i++){
//         reverseStrings += someStrings.pop();
//     }

//     if( reverseStrings === str){
//         console.log("This is a palindrome")
//     } else {
//         console.log("This is not a palindrome")
//     }
// } 
// console.log(isItPalindrome("racecar"));



function isItPalindrome(str) {
    str = str.replace().toLowerCase();
    let reverseStr = str.split('').reverse('').join('');
    return reverseStr;
}
console.log("Palindrome in a function " + isItPalindrome ("racecar"));

function forLoopForPalindrome(string){
    let letter = [];
    let reverseStrings = "";

    for (let i = 0; i < string.length; i++){
        letter.push(string[i]);
    }
    for ( let i = 0; i < string.length; i++){
        reverseStrings += letter.pop();
    }

    if ( reverseStrings === string){
        return string + (" This is a palindrome")
    } else {
        return string + (" This is not a palindrome")
    }
}
console.log(" function using for Loop " + forLoopForPalindrome("racecar"))


function checkPalidrome(strings){
    let letters = [];
/**
*! []; This declares an array called `letters` to store the characters of the input string */
    let reverseWord = "";
/**
*! []; This declares a variable `reverseWord` that will later be used to store the reverse of the input string. */
    // .push
    for (let i = 0; i < strings.length; i++){
        letters.push(strings[i]);
/**
*! []; In each iteration of the loop, the character at index `i` of `strings` is pushed onto the end of the `letters` array. */
    }
    // .pop
    for (let i = 0; i < strings.length; i++){
        reverseWord += letters.pop();
/**
*! []; In each iteration of the loop, the last character in the `letters` array is popped off and added to the end of `reverseWord` */
    }

    if ( reverseWord === strings){
        return strings + "is a palindrome."
    } else {
        return strings + "is not a palindrome"
    }
}
console.log(checkPalidrome("racecar"));
/**
** Array
* TODO: Write a function which get's an array and an element and returns a array with this element at the end */
const numbers = [1, 2]
const append = (arr, el) => {
    arr.push(el);
    return arr;
};

