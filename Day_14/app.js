
// for of loop :- it access the value of an iterable object

// const arr = [10,20,11,18,13];
// for (const value of arr) {
//     console.log(value);  
// }

// let str = "Saurav is a good Boy";
// for (const value of str) {
//     console.log(value);
    
// }


// dont use for of llop in objects

// const user = {
//     name: "chhavi",
//     age: 22,
//     gender: "female"
// };

// for (const value of user) { // throws an error that user is not iterable
//     console.log(value);
// }

// symbol.iterator is not used for objects, so we cant iterate over objects

// how to iterate over object using for..of

// for(let value of Object.values(user))
//     console.log(value);
    

// for each
// arr,forEach(callback function)

// let arr = [10, 20,30,40,50];
// arr.forEach(function (number){
//     console.log(number);   
// })

// // arr.forEach(callBack(element,index,arr))
// arr.forEach((num, index)=> console.log(num,index));

// arr.forEach((num,index,a) => {
//     a[index] = num * 2;
// })
// console.log(arr);
// // here reference of arr is passed as an argument so the values is modified in original arr also


// function greet(num) {
//     console.log(num);   
// }
// arr.forEach(greet);



// filter 
// The filter method in JavaScript is used to create a new array containing all the elements of the original array that satisfy a given condition.
// The callback should return:
// true: To include the element in the new array.
// false: To exclude the element.


// let arr = [10,22,33,41,50];
// const result = arr.filter((num)=> {
//     return num % 2 == 0
// });
// console.log(result);


// const students = [
//     {name: "rohan",age: 22,marks: 70},
//     {name: "mohan",age: 24,marks: 80},
//     {name: "darshan",age: 28,marks: 30},
//     {name: "Mohit",age: 32,marks: 40},
//     {name: "Saurav",age: 20,marks: 90}
// ]

// const result2 = students.filter((obj)=> {
//     return obj.marks > 50;
// })
// // we can destructure it also
// const result3 = students.filter(({marks}) => marks>50)
// console.log(result3);


// map

const arr = [1,2,4,5];
const result = arr.map((num) => {
    return num*num;
});

console.log(result);
// in filter it returns true or false
// in map , it modify the result, and it returns any thing

// we want square of even number
let arr2 = [1,2,3,4,5,6];
const result2 = arr2.filter((num) => num%2==0).map((num) => num*num);
console.log(result2);
// one by one value goes to filter if it true then it goes to map
// we can chain it as long as we want
