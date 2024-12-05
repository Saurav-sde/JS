let user1 = {
    name: "Saurav",
    age: 20
};
let user2 = {
    amount: 20,
    money: 50
}
// user2 cant access user1 and viceversa

// i have changed the proto of user2 to user1, now it inherit the property of user1, and it can access the property1
user2.__proto__ = user1;
console.log(user2.name);

// we have a object whose named is Array.prototype 
// it has all the properties like push,pop,indexOF,includes etc..
// now we have created an array and it is accessing all the above properties bcz array inherited the properties from Array.prototype
// arr.__proto__ == Array.prototype


// we have an Object.prototype , it has some properties like tostring(), valuesOf() etcc..
// Array.prototype inherits the proeperties form Object.prototype
// Array.prototype.__proto__ == Object.prototype

//arr.__proto__.__proto__ == Object.prototype
// Object.prototype.__proto__ == null;
// when we have cretaed an object, Object.prototype also get attached to that
// when we have cretaed an array, Array.prototype also get attached to that

// all the above discussion is known as prototype chaining
// this is why typeof arr is object

let arr = [10,20,30];
console.log(arr.__proto__ == Array.prototype);
console.log(arr.__proto__ .__proto__== Array.prototype.__proto__);
console.log(arr.__proto__ .__proto__== Object.prototype);
console.log(arr.__proto__ .__proto__.__proto__ == null);

// all the above is true

