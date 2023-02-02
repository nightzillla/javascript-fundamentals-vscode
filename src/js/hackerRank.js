// 2D Arrays
function hourglassSum(arr) {
    let maxSum = -63;
    for ( let i = 0; i < 4; i++){
        for ( let j = 0; j < 4; j++){
            let top = arr[i][j] + arr[i][j + 1] + arr[i][j+2];
            let mid = arr[i+1][j+1];
            let bot = arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
            let currentSum = top+mid+bot
            maxSum = Math.max(maxSum , currentSum)
        }
        return maxSum;
    }
/*
[
[1 1 1 0 0 0],
[0 1 0 0 0 0],
[1 1 1 0 0 0,
[0 0 0 0 0 0],
[0 0 0 0 0 0],
[0 0 0 0 0 0]
]
*/

/**
 ** 1. Create maxSum variable to -63
 ** 2. Loop through rows (until 4).
    a. Loop through colums (until 4)
        i. Create top variable for the sum of top hourglass value.
        ii. Create middel variable for the middle value.
        iii. Create bottom variable for the sum of bottom values.
        iv. Find the max of the maxSum or the top, middle, bottom (added up).
 ** 3. Return maxSum

*/
}