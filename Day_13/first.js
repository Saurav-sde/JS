// let obj = {};
// obj.name = "Rohit";
// // key:value, writable,enumerable,configurable

// console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
// // by default writable,enumerable,configurable true hota hain
// // writable = true ,it means we can modify the values
// obj.name = "mohit";

// configurable = true , it means we can change the value of writable and enumerable


// let obj = {};
// Object.defineProperty(obj,'name', {
//     value:"rohit",
//     writable: false,
//     enumerable: true,
//     configurable: true
// })

// console.log(obj); // rohit
// obj.name = 'mohit'; // here,writable is false so we cant change the values of the object
// console.log(obj); // rohit

// let obj = {};
// Object.defineProperty(obj,'name', {
//     value:"rohit",
//     writable: true,
//     enumerable: true,
//     configurable: false
// })

// obj.name = 'mohit';
// console.log(obj.name); // mohit

// Object.defineProperty(obj,'name',{
//     writable:false
// })

// obj.name = "Saurav";
// console.log(obj.name); // mohit, as we can only change value of writable to true to false , if configurable is false


// let obj = {};
// Object.defineProperty(obj,'name', {
//     value:"rohit",
//     writable: false,
//     enumerable: true,
//     configurable: false
// })

// obj.name = 'mohit';
// console.log(obj.name); // rohit

// Object.defineProperty(obj,'name',{
//     writable:true
// }) // gives error we cant change the writable from false to true

// obj.name = "Saurav";
// console.log(obj.name); 



// configuraable :- if it  is false , then we cant change the value of writable and enumerable.
// if its true we can change the value of writable and enumerable
  

// const obj1 = {
//     name: "rohit",
//     age: 23,
//     account_number: 6783478
// };

// // we  want that the values of account number never gets changed
// Object.defineProperty(obj1, 'account_number', {
//     writable:false
// })

// const customer = {
//     name: "Saurav",
//     age: 23,
//     account_number: 123324534,
//     account_balance: 2990
// }

// // we dont want that name and account number gets changed
// Object.defineProperty(customer, 'name', {
//     writable: false,
//     configurable: false
// })
// customer.name = "mohit";
// console.log(customer);




// const customer = {
//     name: "Saurav",
//     age: 23,
//     account_number: 123324534,
//     account_balance: 2990
// }
// // // if enumerrable = true theen it access the keys
// // for(let key in customer)
// //     console.log(key);
    
// Object.defineProperty(customer, 'name', {
//     enumerable: false
// })

// // for(let key in customer)
// //     console.log(key);
//  // Enumerbale : jis bhi key ka enumerable true hoga unsbko access hoga ya pint hoga even jo inherit hoke bhi aayega property ya key aati hai agr uska bhi enumerbale true hoga to wo bhi print hoga


// // for in loop acceess only those proprty whose enumerable is true, and even if enumerbale is true for inhrtited properties it access it

// let customer2 = Object.create(customer);
// customer.city = "Haridwar",
// customer2.place = "delhi";

// for(let key in customer2)
//     console.log(key);
    

const obj = {
    name: "Saurav",
    age: 23
}

for(let key in obj)
    console.log(key);

// // why dont it access Object.prototype keys
// // beacuse the enumeraable of Object.prototpe is false

console.log(Object.getOwnPropertyDescriptor(Object.prototype , 'toString'));
Object.defineProperty(Object.prototype, 'toString', {
    enumerable: true
})
for(let key in obj)
    console.log(key);

// why dont we use for in loop in array
// array is an object

// const arr = [10,20,30,40];
// arr.name = "Rohit"
// for(let key in arr)
//     console.log(key,arr[key]); 
// it prints name also , treating name as a key
// for ...in :- t does not see that this is aaray it only sees the numeration of the key if it is true it will access it and by default enumerbale is true for everyone