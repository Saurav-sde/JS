// a set is a collection of unique values.

// let arr = [10,20,10,30,10]; // it has duplicate values

// const set1 = new Set([10,20,30,40,10,30]);
// console.log(set1); // Set(4) { 10, 20, 30, 40 }

// console.log(typeof set1);


// // other way

// const set2 = new Set();
// set2.add(4);
// set2.add(6);
// set2.add("Saurav");
// set2.add(30);
// console.log(set2);
// console.log(set2.size);

// // delete
// set2.delete(6);
// console.log(set2);


// instagram id

// const user_id = new Set(["rohit_negi9", "Mohit_91", "ravi.93", "chhavi_90", "sumit_99"]);

// let new_user = "rohit_negi9";
// console.log(user_id.has(new_user));

// user_id.clear();
// console.log(user_id);



// convert array in set

// let arr = [10,30,20,10,40,50,30];
// const set1 = new Set(arr);
// console.log(set1);

// // convert set in array
// arr = [...set1];
// console.log(arr);


// union of set1 and set2
let set1 = new Set([10,20,30,40,50]);
let set2 = new Set([10,20,70,80]);

// let set3 = new Set([...set1,...set2]);
// console.log(set3);


// intersection
// filter: array 

// const result = [...set1].filter((num) => set2.has(num));
// console.log(result);

// iterate over set :- we can use for...of

// for(let value of set1)
//     console.log(value);
    
set1.forEach((value) => console.log(value));