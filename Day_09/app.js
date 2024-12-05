// how to create object

// const obj = {
//     0:20,
//     1:50,
//     2:70,
//     "name": "Bhupendar Jogi",
//     account_balance: 150,
//     "gender": "male",
//     age: 30,
//     "account number" : 6783465,
//     undefined: 30,
//     null: "saurav"
// } 
// in backend keys are stored in the form of string , we can write with and without string both are treated as string in backend

// we can't use space in keys unless we are declaring as string 
// console.log(obj);
// console.log(typeof obj);

// how to access keys of the object
//using dot operator
// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.gender);


// when we are accesssing using [] , must write keys in string
// console.log(obj["gender"]);
// console.log(obj["account_balance"]);

// when we have sopace in keys then we have only one option to access it, using [] operator

// console.log(obj[0]);
// console.log(obj[1]);
// console.log(obj[2]);
// if we have number in the keys then we can access it without ""

// typeof array is object bcz it is storing data in key value pair internally
// const arr = {
//     0:20,
//     1:50,
//     2:70,
//     3:"saurav"
// }

// can we name our keys undefined and null :- yes
// console.log(obj.undefined);
// console.log(obj[undefined]);
// console.log(obj["undefined"]);

// console.log(obj.null);
// console.log(obj[null]);
// console.log(obj["null"]);


// const inst = {
//     insta_id: "saurav_2713",
//     password: "Bhaiyaji9"
// }


// more ways to create object
// const person = new Object();
// We can add,delete,modify property later
// add
// person.name = "saurav";
// person.age = 80;
// person.gender = "male";
// console.log(person);


//delete
// delete person.age;

//modify, update
// person.name = "Gaurav"; // if there is not a property named name , then it will add , if its already there than it modify
// console.log(person);


// another method : Object.crete :- we will discuss it later

// another method by creating  a class (oops programming)
// class People{
//     constructor(name,age,gender) {
//         this.name = name; // this is pointing to its instance
//         this.age = age;
//         this.gender = gender;
//     }
// }

// let per1 = new People("Rohit",20,"Male"); // here,this is referring to per1
// let per2 = new People("Mohit",30,"Female"); // here, this is referring to per2
// let per3 = new People("Saurav",20,"Male"); // here, this is referring to per3
// let per4 = new People("Rakhi",37,"Female"); // here, this is referring to per4
// console.log(per1);
// console.log(per2);
// console.log(per3);
// console.log(per4);

// the benefits of this approach is we can create multiple instances of it , if we are declaring object using previous methods then for every instance we have to write same code


// Common Mehtods for objects
let obj = {
    name: "Saurav",
    age: 30,
    account_balance: 150,
    gender: "Male"
}

// if we want all keys of a object
let arr = Object.keys(obj); // it returns an arrays of keys of the object
console.log(arr); // [ 'name', 'age', 'account_balance', 'gender' ] 

// how to acceess all the values
let values = Object.values(obj); // returns an array of values of the object

// keys:value
const arr2 = Object.entries(obj);
console.log(arr2); 
/*
[
    [ 'name', 'Saurav' ],
    [ 'age', 30 ],
    [ 'account_balance', 150 ],
    [ 'gender', 'Male' ]
]
*/

// assign use case
const obj1 = {
    a:1,
    b:2
};

const obj2 = {
    c:3,
    d:4
};

// our goal to add keys and values of obj1 and obj2 in obj3
// const obj3 = obj1 + obj2; // we cant do like this
// const obj3 = Object.assign(obj1,obj2);
// console.log(obj3); // { a: 1, b: 2, c: 3, d: 4 }

// but this changed the obj1 also
// console.log(obj1); //{ a: 1, b: 2, c: 3, d: 4 }

// this happens because in first paramter we give source where we want to store the changes  so, we use empty object there
let obj4 = Object.assign({},obj1,obj2);
console.log(obj4); // { a: 1, b: 2, c: 3, d: 4 }
console.log(obj1); // { a: 1, b: 2 }

const obj5 = {
    e:5,
    f:6
}
const obj6 = Object.assign({},obj1,obj2,obj5);
console.log(obj1); // { a: 1, b: 2 }
console.log(obj2); // { c: 3, d: 4 }
console.log(obj6); // { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }

obj6.a = 10; // if we create using asign then it doesnt change the data of other object from which it is created bcz it is a copy of all that objects
console.log(obj1.a);


// spread operator
const obj7 = {...obj1,...obj2,...obj5}; // it opens all the key:value pairs of all the objects and then store it 
console.log(obj7);


// Homework
// Deep Copy vs Shallow Copy
// Object.freeze and Object.seal
// revise this lecture, read mdn docs, dry run all this code 
// research about number, string etcc.. when we are creating using new keyword

