// The code you provided checks if each element in the cars array is even. However, since cars array is an array of strings and not numbers, the modulus operator % will not work. You can't check if a string is even or odd.

const cars = ["Saab", "Volvo", "BMW", "Lexus", "Toyota", "Honda", "Nissian"];

for (let i = 0; i < cars.length; i++){
  if( cars[i] % 2 == 0){
  }
}
console.log ("These cars are from arrays" + cars)

// You can filter the cars array and only return the even indexed items(0,2,4..) like this:

// const evenCars = cars.filter((car,index) => index % 2 === 0);
// console.log(evenCars);

// NOTES FOR .FILTER 
// In this example, the filter() method is used to create a new array filteredCars that contains only the elements from the cars array that have a length greater than 4 characters, using a callback function that takes a single argument car and runs a for loop over the cars array. The callback function returns true if the length of car is greater than 4, and false otherwise.

const filterCars = cars.filter(function(car) {
    for (let i = 0; i < cars.length; i++){
        if (car.length > 4){
            return true;
        }
    }
});
console.log("These are filter cars" + " " + filterCars);

// Arrow Function
const filteredCars = cars.filter( car => car.length > 4);
console.log("This is an arrow function for filtered Cars" + filterCars)

// NOTES FOR .MAP
// In this example, the map() method is used to create a new array modifiedCars that contains the same elements as the cars array, but with all the elements that have a length greater than 4 characters are in upper case. The map() method takes a single argument, which is a callback function that is called once for each element in the array, and it returns the modified element which is then added to the new array.

const modifiedCars = cars.map(function(car) {
    for (let i = 0; i < cars.length; i++){
        if (car.length > 4){
            return car.toUpperCase();
        }
    }
});
console.log("This is modifiedCars" + modifiedCars);


// Loops through 2 arrays 
const oneloop = [1, 2, 4, 5, 6, 8,9];
const twoloop = [2, 6, 7, 76, 8, 10, 11];
const threeloop = [2, 6, 7, 76, 8, 10, 11];
const fourloop = [2, 6, 7, 76, 8, 10, 11];


function twoLoops(array1, array2) {
    let totalArray = 0;
    for (let i = 0; i < array1.length; i++){
        for (let j = 0; j < array2.length; j++){
            totalArray += array1[i] + array2[j];
        }
    } return totalArray;
}
console.log("You found the total 2 arrays " + twoLoops(oneloop, twoloop));


// for Loops Decermenting 
for (let i = 20; i > 0; i--){
    console.log(i);
}

// reversing array
const reverseArray = [1,2,3,4,5,6,7,8,9,10,11,12]


// create a function that reverse array

console.log(reversingNumbers(reverseArray));


for (let i = reverseArray -1; i >= 0; i--){
    console.log("this is reverse Array " + reverseArray[i]);
}

// you can use this Array.prototype.reverse()
// console.log(reverseArray.reverse());

// .reduce
// The Array.prototype.reduce() function is used to reduce an array to a single value by iterating over the elements of the array and applying a callback function to each element. The callback function takes two arguments: an accumulator and the current element. The accumulator is the value that is accumulated during the iteration, and it is initialized with the first element of the array, or with an initial value passed as the second argument to the reduce() function.

// The callback function is called for each element of the array, and the return value of the callback function is assigned to the accumulator. The final value of the accumulator after the last iteration is the return value of the reduce() function.

// Here's an example that demonstrates how to use the reduce() function to sum the elements of an array:
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15




const reverseLoop = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// console.log(reverseLoop.reverse());

// for (let i = reverseLoop.length - 1; i >= 0; i--){
//     console.log("This is a resverse Loop " + reverseLoop[i]);
// }
function reverseLoop1(rl){
    return rl.reverse();
}
console.log(reverseLoop1(reverseLoop));

// Looping through even numbers
const evenNumbers = [1,2,3,4,5,6,7,8,9,10]

for ( let i = 0; i < evenNumbers.length; i++){
    if( evenNumbers[i] % 2 === 0){ 
        console.log("These are the even numbers " + evenNumbers[i]);
    } else {
        console.log("These are the odd numbers" + evenNumbers[i]);
    }
}









// array of numbers

// how many times a number is over 50
// += 
// -=
// > over 50
// >= at least 50 
// >= greater or equal


function over50 (overF) {
    let numberOver50 = 0;
    for (let i = 0; i < overF.length; i++ ){
        if(overF[i] > 50){
            numberOver50 += 1;
        }
    } return numberOver50;
}
let steveArray = [14, 15, 0, 444, 225, 62, 11];
let steveCounter = over50(steveArray);
console.log(steveCounter);

function addOne(num1, num2){
    return 5 + 7;
}
console.log(addOne(5,6));















































