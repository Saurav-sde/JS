// js is a single threaded synchronous programming language

// console.log(x); // undefined
// var x = 10;

// // console.log(y); // cannot access y before initialization
// // let y = 10;

// console.log(b); // b is not defined

// 

// var x = 10;
// let y = 20;
// const z = 30;
// console.log(x);
// console.log(y);
// console.log(z);

// it creates an execution context it has two parts memory,code 
// first it allocate the memory of x , and it assign undefined in x, then it allocate memory to y and did not assign anything to it same happens with const variable (z). y and z is known as temporal dead zone
// x:undefined
// y:
// z:

// now, code execution phase starts
// 10 is assigned in x , 20 is assigned in y, 30 is assigned in z, and at last it prints the value of x,y,z



// js is known as synchronous single threaded languagae
// single threaded :- one instruction at a time
// synchronous :- executes in a synchronise way 


// console.log(x);
// console.log(y);
// var x = 10;
// let y = 20;

// execution context
// 1st phase :- memory allocate, x:undefined, y:
// 2nd phase :- code execution phase, 1st statement console.log(x), prints undefined, 2nd statement console.log(y), but y is not initialised , so it throws an error y is not innitialised, same happens with const
// now x got assigned with 10 and y with 20


// temporal dead zone :- The Temporal Dead Zone (TDZ) in JavaScript refers to the period between the entering of a block scope (where a variable is declared using let or const) and the point where the variable is initialized or assigned a value.
// when the variable got initalised , the variable comes outside from temporal dead zone
// we cant access the variable which is in temporal dead zone, it gives reference error or the variable is not initialised



//hoisting :- it is the behaviour where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code has been executed 
// this means that js "hoists" or lifts the declarations (but not the assignments) to the top, so you can refer to them before they are written in code. However, only the declarations is hoisted, not the assignments or initializations

// console.log(x);
// console.log(y);
// var x = 10;
// let y = 20;

// what hoisting did with the above code
// var x = undefined;
// let y;
// console.log(x);
// console.log(y);
// x = 10;
// y = 20;


greet();
function greet(){
    console.log("Hello World");
}

// memory allocation
// greet : function code

// code execution phase
// js sees it is declared with the function code , so it executed it without throwing an error

// meet();
// let meet = function(){
//     console.log("Hello Meet");
// }

// memory allocate meet: 
// code execution phase, it sees meet(), but there is nothing in the meet, so it throws an error , cannot access meet before initialization


meet();
var meet = function(){
    console.log("Hello Meet");
}

// memory allocate meet: undefined
// code execution phase, it sees meet(), it has undefined , so it throws an error meet is not a function


