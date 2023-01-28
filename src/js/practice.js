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

oneLoop = [7,7,7,7,7]
twoLoop = [8,8,8,8,8]

function addingTwoLoops(loop1, loop2){
    let total = 0
    for ( let i = 0; i < loop1.length; i++){
        for ( let j = 0; j < loop2.length; j++){
            total += loop1[i] + loop2[i]
        }
    }
    return total;
}
console.log("You found the total 2 arrays " + addingTwoLoops(oneLoop, twoLoop));
// function twoLoops(array1, array2) {
//     let totalArray = 0;
//     for (let i = 0; i < array1.length; i++){
//         for (let j = 0; j < array2.length; j++){
//             totalArray += array1[i] + array2[j];
//         }
//     } return totalArray;
// }
// console.log("You found the total 2 arrays " + twoLoops(oneLoop, twoLoop));



