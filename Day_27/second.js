// js is a single threaded synchronous programming language


// Behaviour of js is asynchronous also
// console.log(10);
// setTimeout(() => {
//     console.log("20");
// }, 2000);
// console.log(30);
// 10,30,20
// why it is happpening like this?, it has to be 10,20,30 as it is synchronous


//single threaded :- one task will be executed at a time
console.log(10);
const timer = Date.now();
while(Date.now()-timer < 2000) {
    // wait for 2 sec
}
console.log(20);
console.log(30);

// 10,20,30, here also we are waiting for 2 sec but the output is different in both the cases

// this is why because in 2nd case it is handled synchronously, in 1st settimeout() is not the part of js, it is part of web apis, so it is handled asynchrnously

// set timeout is not handled by js it is handled by the web apis
// DOM,window object is not the part of js it is headache of the website
// console.log is also not the part of js
// eventlistener is also asynchronous
// till now we have observed one thing that all the asynchronous task expect a callback
