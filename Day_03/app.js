// // Non primitive data types

// // Array, object, function

let arr = [10, 20, 50, "rohit", "mohit"];
console.log(arr);
console.log(typeof(arr)); //object


// // object
// // key value

let obj = {
    user_name: "Rohit",
    account_number: 3425782346485723,
    account_balance: 420
}

// console.log(obj);


// // function

let func = function() {
    console.log("Hello Coder Army");    
}

func();
console.log(typeof func);



// Type Conversion

let account_balance = "190";
let num = Number(account_balance); // string to number
console.log(typeof account_balance)
console.log(typeof num);

let account = "100xs";
console.log(Number(account)); // NaN


// // boolean -> number
let x = true;
console.log(Number(x)); //1


// // null -> number

let x1 = null;
console.log(Number(x1)); //0

// // undefined -> number
let x2;
console.log(Number(x2)); // NaN


// // number to string
let ab = 20;
console.log(typeof String(ab));

// // boolean->string

// let ax = true;
// console.log(String(ax)); //"true"


// let abc = "str";
// console.log(Boolean(abc));  //true

// console.log(Boolean (""));  //false
// console.log(Boolean (" ")); //true


// Opperators
// Divide Multiply :- L to R
// Add subtract:- L to R


console.log(6 * 3 + 18 / 6 - 9); // laat maar dega company aise likhe to
console.log((((6 * (3 + 18)) / 6) - 9)); // better way to write


// modulous :- remainder
console.log(20 % 3);


// ++ increment operator , -- decrement operator
// let sum = 20;
// //post increment and decrement
// console.log(sum++);
// console.log(sum--);

// let num = 23;
// ++num;
// console.log(num);
// console.log(--num);


// assignment operator

// let x = 20;
// x += 10; // x = x + 10
// console.log(x);

// x -= 10; // x = x - 10
// console.log(x);

// x *= 10; // x = x * 10
// console.log(x);

// x /= 10 // x = x / 10
// console.log(x);



