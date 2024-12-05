// Function in JS

// it is a block of code designed to do a specific task

// console.log("Hello Coder Army");
// console.log("Mein Badhiya hoon");
// console.log("Or kya Chal rha hain");

// console.log("Hello Coder Army");
// console.log("Mein Badhiya hoon");
// console.log("Or kya Chal rha hain");

// console.log("Hello Coder Army");
// console.log("Mein Badhiya hoon");
// console.log("Or kya Chal rha hain");

// this task has to be done 100 times
// we can wrap this in a function

function greet() {  
    console.log("Hello Coder Army");
    console.log("Mein Badhiya hoon");
    console.log("Or kya Chal rha hain");
}
greet();

// add Program
// function sum(a, b) { // a, b is parameter
//     console.log(a+b);    
// }

// sum(3,5); // 3, 5 is argument


// multiplication
// function multiply(a, b)
// {
//     // console.log(a * b); 
//     return a*b;
// }
// // console.log(multiply(3,4));
// // even we can store it in a variable
// let result = multiply(3,4);
// console.log(result);


// we can also store the function in a variable
// const fun = function() {
//     console.log("Hello Coder Army");
//     console.log("Mein to Badhiya hun");
//     return "Money";
//     console.log("Aur kya chal rha hain");
// }

// console.log(fun());
// the statement written below the return statement never run


// Arrow function
// const sum = (a,b)=> {
//     return a+b;
// }
// console.log(sum(3,4));

// const sum = (a,b)=> a + b; //When we have to write single statement, this function automatically understand that it has to return a+b
// console.log(sum(3,4));

// // when we have single parameter then we dont need to write parenthesis
// const cube = a => a*a*a;
// console.log(cube(3));




// we dont know how many arguments are coming, then what can we write in parameter, we use rest operator
const sum = function(...number) {
    //here, rest operator is collecting all the numbers and store them in an array,then we can calculate sum using loop
    console.log(number);  
}
sum(2,3,4);
sum(2,3,6,10,12);
sum(2,3);

// hw :- rest vs spread 

let arr = [2,3,4,5];
let arr2 = [...arr]; // spread :- as arr is already an array 

// in above function values are coming one by one so there it is acting as rest operator


let obj = {
    name: "Saurav",
    age: 30,
    amount: 420
};

// now we want to create a function that print name and age of the object
function fun(obj1) {
    console.log(obj1.name , obj1.age);
}
fun(obj);

// we can destructure it also
function fun2({name, amount}) {
    console.log(name, amount);
}
fun2(obj);


let first = function() {
    console.log(first);
}

// all below comparison is true
console.log(first.__proto__ == Function.prototype);
console.log(first.__proto__.__proto__ == Function.prototype.__proto__);
console.log(first.__proto__.__proto__ == Object.prototype);
console.log(first.__proto__.__proto__.__proto__ == Object.prototype.__proto__);
console.log(first.__proto__.__proto__.__proto__ == null);


// Homeowrk pass by value or pass by reference

// if we have to change prototypr
// obj2.__proto__ = obj1;
// obj2 = Object.create(obj1); // use this instead of above as above operation is very costly