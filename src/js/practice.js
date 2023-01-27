let oddNumbers = [0,1,2,3,4,5,6,7,8,9,10]

function findingEvenAndOdds(numbers){
    for (let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 == 0){
            console.log(numbers[i] + "This is even")
        } else {
            console.log(numbers[i] + "This is odd")
        }
    } return numbers;
}

console.log(findingEvenAndOdds(oddNumbers));

let arrays = [5,6,7,8,9,10,11]
// Create a function to reverse the order
function reverseArray(arr){
    return arr.reverse();
}
console.log(reverseArray(arrays));

