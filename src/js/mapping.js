 const users = [
    {
        id: 1,
        name: "Jack",
        isActive: true,
        age: 20,
    },
    {
        id:2,
        name: "John",
        isActive: true,
        age: 18,
    },
    {
        id:3,
        name: "Mike",
        isActive: false,
        age: 30,
    },
 ]
 /**
 * TODO: 1. Write a code to get array of names from given array of users
*/
// Using .map
const usersNames = users.map((user) => user.name);

/** 
 ** Using forEach */
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

/**
 * TODO: 2. Get back only active users */
/**
 ** for Loop
*/
// for ( let i = 0; i < users.length; i++){
//     if(users[i].isActive === "true"){
//         console.log(users[i].isActive + "This user is active")
//     } else {
//         console.log(users[i].isActive + "This user is not active")
//     }
// }
const findingIsActive = [];
for (let i = 0; i < users.length; i++){
    if (users[i].isActive){
        findingIsActive.push(users[i].name);
    }
}

// const usersNamesEx2 = [];
// for (let i = 0; i < users.length; i++){
//     if( users[i].isActive){
//         usersNamesEx2.push(users[i].name)
//     }
// }
// console.log(usersNamesEx2)

/**
 ** using .filter & .map
*/
const filterNames = users.filter((users) => users.isActive).map((users) => users.name);

console.log(filterNames);

/**
 * TODO: 3. Sort users by age descending */

const names = users
    .sort((user1, user2) => (user1.age < user2.age ? 1 : -1))
    .filter((user) => user.isActive)
    .map((user) => user.name);
