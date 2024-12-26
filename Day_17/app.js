// // global object : object
// // chrome Browser : window
// // Nodejs : global
// // globalThis points to global object:- it is used in every environment

// console.log("Hello World");
// console.log(Math.random());
// // set Interval()
// // new Object()
// // new String()

// // from where did this console.log, set interval,new Object and String came
// // in cpp it came from library  files
// // in js it came from global object

// console.log(global.Math.random()); 
// // in browser window.Math.random()

// console.log(global);

// // its confusing , in every other environment name of global object is different
// // so we gave a unique name i.e globalThis

// console.log(globalThis.Math.random());



// THIS KEYWORD

// in global scope this and global object is same

// console.log(window); 
// console.log(this === window); // true

// let a = 10;
// const b = 20;
// var c = 30;
// console.log(this.c); // we access c bcz it is part of global object,a and b are not the part of global object

// global context(outside any function)
// browser :- window
// Node.js :- MOdule's exports object

// console.log(this); // in node js it point to an empty object which is known as module's exports object


// Inside a function
// non-strict mode

// function greet() {
    //     console.log(this);   // it refers to global object
    // }
    // greet();

    
// "use strict"
// function meet() {
//     console.log(this);  // undefined
// }
// meet();

// // a = 10;
// // console.log(a); // in non strict mode it prints 10 but in strict mode it gives error, a is not defined

// let obj = {
//     name: 10
// };

// Object.freeze(obj);
// obj.name = 30;
// console.log(obj);

// in non strict mode , it does not give error, but it does not allow to change the value of name
// but in strict mode , it gives error, Cannot assign to read only property 'name' of object


// in non strict mode, this refers to global object inside a function
// in strict mode, this will be undefined inside a function


// Inside a Method(object Context)

// const obj = {
//     name: "rohit",
//     age: 20,
//     greet: function(){
//         console.log(this);      // { name: 'rohit', age: 20, greet: [Function: greet] } 
//         console.log(this.name); // rohit
//         console.log(this.age); // 20
//     }
// }
// obj.greet(); 
// this refers to the object, inside an object's method

// "use strict"
// function greet(){
//     console.log(this);  
// }
// greet(); // undefined
// window.greet(); // here this refers to global object, window




// **************************
// Arrow functions don't have their own this
// Instead, they inherit this from the surrounding (lexical) scope

let obj = {
    name:"Rohit",
    age: 11,
    greet: () => {
        console.log(this);        
    }
}
obj.greet();
// here surrounding of greet is global scope , so greet inherit this from global scope, and in global scope this points to window, so here also this points to window
// here we can't use this.name inside greet function


let obj2 = {
    name: "Saurav",
    age: 20,
    greet: function() {
        let ab = ()=>{
            console.log(this);     // { name: 'Saurav', age: 20, greet: [Function: greet] }   
        }
        ab();
    }
}
obj2.greet();
// here, when ab() is called as it is arrow function it doesn't have this, so it moves to it surrounding and here it is a function , it has this which refers to the obj2, so ab() i.e arrow function inherit this from the function, so this iniside the ab is referring to the obj2


//************* */
// inside a constructor or class
// this refers to the instance of the object being created

class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

let a = new Person("Saurav",20);
console.log(a);
