 const users = [
    {
        id: 1,
        name: "Jack",
        isActive: true,
    },
    {
        id:2,
        name: "John",
        isActive: true,
    },
    {
        id:3,
        name: "Mike",
        isActive: false,
    },
 ]
// 1. Write a code to get array of names from given array of users
// Using .map
const usersNames = users.map((user) => user.name);

// Using forEach
// users.forEach(callback)
// const usersNames = [];
// users.forEach(users => {
//    usersNames.push(users.name);
// })

// First start off with for loop
// const usersNames = [];
// for ( let i = 0; i < users.length; i++){
//     usersNames.push(users[i].name);
// }
// console.log (usersNames);

// 2. Get back only active users
// for ( let i = 0; i < users.length; i++){
//     if(users[i].isActive === "true"){
//         console.log(users[i].isActive + "This user is active")
//     } else {
//         console.log(users[i].isActive + "This user is not active")
//     }
// }
const usersNamesEx2 = [];
for (let i = 0; i < users.length; i++){
    if( users[i].isActive){
        usersNamesEx2.push(users[i].name)
    }
}
console.log(usersNamesEx2)