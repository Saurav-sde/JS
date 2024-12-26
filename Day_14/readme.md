# JavaScript Essentials

JavaScript is a powerful, dynamic, and versatile programming language widely used for web development. Below are some key concepts and methods related to JavaScript's loops, iteration, and array/object manipulation.

---

## Table of Contents
1. **For...of Loop**
2. **For Each Method**
3. **Filter Method**
4. **Map Method**

---

## 1. For...of Loop
The `for...of` loop allows iteration over iterable objects like arrays, strings, and more. It provides the values of the iterable one by one.

### Example with an Array
```javascript
const arr = [10, 20, 11, 18, 13];
for (const value of arr) {
    console.log(value);
}
```

### Example with a String
```javascript
let str = "Saurav is a good boy";
for (const value of str) {
    console.log(value);
}
```

### Note
- `for...of` **cannot be used directly with objects** because objects are not iterable by default.
- To iterate over an object, use `Object.values`, `Object.keys`, or `Object.entries`.

#### Iterating Over Object Values
```javascript
const user = {
    name: "Chhavi",
    age: 22,
    gender: "female"
};

for (let value of Object.values(user)) {
    console.log(value);
}
```

---

## 2. For Each Method
The `forEach` method executes a provided function once for each array element. It does not return a new array but allows for side effects.

### Example with Callback
```javascript
let arr = [10, 20, 30, 40, 50];
arr.forEach(function (number) {
    console.log(number);
});
```

### Example with Arrow Functions
```javascript
arr.forEach((num, index) => console.log(num, index));
```

### Modifying Array Elements
The original array can be modified directly.
```javascript
arr.forEach((num, index, a) => {
    a[index] = num * 2;
});
console.log(arr); // [20, 40, 60, 80, 100]
```

---

## 3. Filter Method
The `filter` method creates a new array with elements that pass the test implemented by a callback function. 

### Syntax
```javascript
array.filter(callback(element[, index[, array]])[, thisArg])
```

### Example with Numbers
```javascript
let arr = [10, 22, 33, 41, 50];
const result = arr.filter((num) => num % 2 === 0);
console.log(result); // [10, 22, 50]
```

### Example with Objects
```javascript
const students = [
    { name: "Rohan", age: 22, marks: 70 },
    { name: "Mohan", age: 24, marks: 80 },
    { name: "Darshan", age: 28, marks: 30 },
    { name: "Mohit", age: 32, marks: 40 },
    { name: "Saurav", age: 20, marks: 90 }
];

const passedStudents = students.filter(({ marks }) => marks > 50);
console.log(passedStudents);
```

---

## 4. Map Method
The `map` method creates a new array populated with the results of calling a provided function on every element in the array.

### Syntax
```javascript
array.map(callback(element[, index[, array]])[, thisArg])
```

### Example: Squaring Numbers
```javascript
const arr = [1, 2, 4, 5];
const squares = arr.map((num) => num * num);
console.log(squares); // [1, 4, 16, 25]
```

### Chaining Map and Filter
```javascript
let arr2 = [1, 2, 3, 4, 5, 6];
const evenSquares = arr2
    .filter((num) => num % 2 === 0)
    .map((num) => num * num);
console.log(evenSquares); // [4, 16, 36]
```

### Key Differences: `Filter` vs `Map`
- `filter`: Returns a subset of the original array based on a condition.
- `map`: Transforms each element and returns a new array of the same length.

---

### Summary
JavaScript provides powerful tools like `for...of`, `forEach`, `filter`, and `map` to work with arrays and objects. These methods make code cleaner, more readable, and easier to maintain. Choose the method based on the use case to achieve efficient results!
