// Write a code to get array of names from given array of users
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
 
// First start off with for loop
const usersNames = [];
for ( let i = 0; i < users.length; i++){
    usersNames.push(users[i].name);
}
console.log (usersNames);