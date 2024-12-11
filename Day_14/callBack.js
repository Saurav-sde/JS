// call back function


// function is passed as a argument of another function

// function name(callback) {
//     console.log("Hello i am name");
//     callback();
// }

// function greet() {
//     console.log("Hello i am callback function");
// }

// name(greet);
// here greet is a function that is passed as a argument of name function . so greet is a callback function

// we can direct define the function in argument 
// function name(callback) {
//     console.log("Hello i am name");
//     callback();
// }

// name(function greet(){
//     console.log("Hello i am callback function");;
// });

// we can use arrow function as well as function expression
// arrow
// function name(callback) {
//     console.log("Hello i am name");
//     callback();
// }

// name(()=> {
//     console.log("Hello i am callback function");
// })



function fetchData() {
    // bahut sara code honge yaha pe
    // we want this function to be called every 5 second
    console.log("I am Fetching data");
}

setInterval(fetchData, 5000); // fetchData is being called every 5sec

// we will learn about fetching data, setInterval in detail in further lectures