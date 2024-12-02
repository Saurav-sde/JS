// const arr = [2,3,4,1,8,9, "rohit",true];
// console.log(arr);

// console.log(arr.length); //length of the array
// console.log(arr[0]); // accessing the array elements using subscript operator
// console.log(arr.at(0)); // accessint the array elements using at(). It is latest, it also takes -ve indexes
// console.log(arr[-1]); // undefined
// console.log(arr.at(-1)); // last element

// const newArr = arr; // here, reference of arr is getting copied to newArr
// console.log(newArr == arr); // true , both are pointing to same address 

// // now, i want that arr, newArr refers to the different address
// const newArr1 = structuredClone(arr); // !important
// console.log(newArr1 == arr); // false


// insert at last
// arr.push(30);
// arr.push(50);
// console.log(arr);


// delete last element
// arr.pop();
// arr.pop();
// console.log(arr);


// insert at start
// arr.unshift(10);
// arr.unshift(100);
// console.log(arr);

// delete element from start
// arr.shift();
// console.log(arr);

// delete element of a particular index , here a disadvantage of delete is that it creates a hole there
// delete arr[0]; // [ <1 empty item>, 2, 3, 4, 1, 8, 9, 'rohit', true]
// console.log(arr);
// console.log(arr[0]); // undefined

// console.log(arr.indexOf(8)); //returns first index of that element
// console.log(arr.lastIndexOf(8)); // returns last indexof the element


// console.log(arr.includes(1)); // returns true if the element present, otherwise false


// slice
// console.log(arr);
// console.log(arr.slice(2,5)); // returns a portion of the array from index 2 to index 4, 5 is not included, it doesn't effect the original array

// splice
// console.log(arr.splice(2,5)); //returns a portion of array from index 2, and count 5 elements from there and changes the original array by removing these elements
// console.log(arr);


// (strating, total_element_delete, add_value )
// console.log(arr);
// arr.splice(2,3,"money",90);
// console.log(arr);

// convert array in string
// console.log(arr.toString());
// console.log(typeof arr.toString());
// console.log(arr.join(" "));


// concat
// let arr1 = [2,3,5,6,11];
// let arr2 = [5,12,19,20];
// let arr4 = [23,432,1123,31];
// let arr3 = arr1.concat(arr2,arr4);
// console.log(arr3);

// it behaves like 2d array, when we use push
// arr1.push(arr4);
// console.log(arr1);


// 2d array
let arr = [[1,2,3],[4,5,6],[7,8,9]];
console.table(arr);
console.log(arr[0][0]);
console.log(arr[2][0]);
console.log(arr[2][1]);

// convert 2d into 1d , use flat
let newArr = arr.flat();
console.log(newArr);

// 3d into 1d
let three_d = [[1,2,3,[12,14,19]],[4,5,6],[7,8,9]];
console.log(three_d.flat(Infinity));


let abc = [2,1,2,1];
console.log(Array.isArray(abc)); // returns true if abc is array, otherwise false

// other way of creating array
let ac = new Array(2,3,12321,432);
console.log(ac);

let acd = new Array(10); // if we give single value, it shows size of array




