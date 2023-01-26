// async 
// The async function declaration declares an async function where the await keyword is permitted within the function body. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.
// JSON - JavaScript Object Notation 
// response - stream and reads it to completion. It returns a promise which resolves with the result of parsing the body text as JSON
// format for storing and transporting data 
async function fetchData() {
    try{
        const response = await fetch('https://api.chucknorris.io/jokes/categories');
        const data = await response.json();
        return data
    } catch (error){
        console.error('Error fetching data:', error);
    }
}

(async function fetchData2() {
    const result = await fetchData();
    console.log(result)
})();


// fetch ('https://api.chucknorris.io/jokes/random?category={category}')
// .then(response => response.json())
// .then(data => {
//     console.log(data);
//     // do something with data 
// })
// .catch(error => {
//     console.error('Error fetching data:', error);
// });