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