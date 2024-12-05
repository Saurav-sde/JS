// let obj1 = {
//     a:20
// }

// let obj2 = obj1;
// // shallow copy :- it shares the same address, here object is 1 and both are pointing to it
// obj2.a = 10;
// console.log(obj2, obj1);

// //deep copy :- it creates two different object , and both shares different address
// let obj3 = structuredClone(obj1);
// obj3.a = 30;
// console.log(obj3, obj1);


//Nested object
// const user = {
//     name: "Bhupendar",
//     balance: 420,
//     address: {
//         pincode: 803113,
//         city: "Biharsharif"
//     }
// }

// console.log(user.address.pincode);

// const user2 = Object.assign({},user);
// console.log(user2);

// user2.address.pincode = 231431; // it changes the pincode of user also
// console.log(user.address.pincode);

// user2.name = "Mohit"; // here it doesnt change the name of the user
// console.log(user.name);

// for nested it does shallow copy and for single object it does deep copy
// spread also does the same
// to avoid this scenario always copy by using structuredclone


// DESTURCTURING OF AN OBJECT
// let obj = {
//     name: "Saurav",
//     money: 420,
//     balance: 30,
//     age: 20,
//     aadhar: "7473984753"
// }

// const {name , balance, age} = obj; // here variable name is name, balance and age
// console.log(name, balance, age);

// we can change the variable name
// const {name:full_name , balance:amount, age:Umar } = obj; // now we cant access it by using name, balance, age
// console.log(full_name, amount, Umar);

// const {name, age, ...obj1} = obj; // name and age goes to name and age and other remaining goes to obj1 (rest)
// console.log(name, age);
// console.log(obj1);

// // Destructuring of array
// const arr = [3, 2, 1, 5, 10];
// // const [first,second] = arr; // 3,2
// // console.log(first,second);

// // const [first,second, ,third] = arr; // 3,2,5
// // console.log(first,second,third);

// const [first, second, ...third] = arr;
// console.log(first, second); // 3,2
// console.log(third);// [1,5,10]



// destructuring of nested object
// let obj = {
//     name: "Saurav",
//     age: 20,
//     aadhar: "7473984753",
//     address: {
//         pincode: 803113,
//         city: "Biharsharif",
//         state: "Bihar"
//     }
// };

// // i want to destructure city
// const {address:{city}} = obj;
// console.log(city);

// const {address:{pincode,state}} = obj;
// console.log(pincode,state);


// // i have to access first element of arr
// let hw = {
//     name: "Saurav",
//     age: 20,
//     arr: [90,40,60,80],
//     aadhar: "7473984753",
//     address: {
//         pincode: 803113,
//         city: "Biharsharif",
//         state: "Bihar"
//     }
// };

// const {arr:[first]} = hw;
// console.log(first);


// let user = {
//     name: "saurav",
//     amount: 420,
//     greet: function() {
//         console.log("Hello Coder Army");      
//     },
//     meet: function() {
//         return 20;
//     }
// }
// user.greet();
// console.log(user.meet());



// prototype chaining (high chance of getting asked in interview)
let obj = {
    name: "saurav",
    amount: 420,
    greet: function (){
        return 10;
    }
}

console.log(obj.toString()); 
// we havent created function named toString() then how i am accessing it
// i havent created push() then why i am using arr.push() 

// if we say answer is inbuilt function , then interviwer will kick me out

// all those are coming from its prototype