# JavaScript Fundamentals

JavaScript is a **single-threaded** and **synchronous** programming language. This means it executes one instruction at a time and in a synchronized manner.

---

## Key Concepts

### 1. Execution Context
An **execution context** in JavaScript has two parts:
1. **Memory Phase:** Variables and functions are allocated memory.
   - `var` is initialized with `undefined`.
   - `let` and `const` are in the **Temporal Dead Zone (TDZ)** until initialized.
2. **Code Execution Phase:** The code is executed line by line, and variables are assigned values.

```javascript
console.log(x); // undefined
var x = 10;

// console.log(y); // ReferenceError: Cannot access 'y' before initialization
// let y = 10;

console.log(b); // ReferenceError: b is not defined
```

### Example:
```javascript
var x = 10;
let y = 20;
const z = 30;
console.log(x); // 10
console.log(y); // 20
console.log(z); // 30
```
#### Memory Allocation:
- `x: undefined`
- `y: (TDZ)`
- `z: (TDZ)`

#### Code Execution Phase:
- `x` is assigned `10`
- `y` is assigned `20`
- `z` is assigned `30`

---

### 2. Temporal Dead Zone (TDZ)
The **Temporal Dead Zone** is the period between entering a block scope and initializing a variable declared with `let` or `const`.

- Accessing a variable in the TDZ results in a `ReferenceError`.
- Variables come out of the TDZ once they are initialized.

```javascript
console.log(x); // undefined
console.log(y); // ReferenceError: Cannot access 'y' before initialization
var x = 10;
let y = 20;
```

---

### 3. Hoisting
**Hoisting** is the behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase.

- Only declarations are hoisted, not assignments or initializations.

Example:
```javascript
console.log(x); // undefined
console.log(y); // ReferenceError: Cannot access 'y' before initialization
var x = 10;
let y = 20;
```

**How Hoisting Works:**
```javascript
var x = undefined;
let y;
console.log(x); // undefined
console.log(y); // ReferenceError
x = 10;
y = 20;
```

#### Function Hoisting
Functions are fully hoisted with their definitions:
```javascript
greet();
function greet() {
    console.log("Hello World");
}
```
**Output:**
```
Hello World
```

However, function expressions are not fully hoisted:
```javascript
meet(); // TypeError: meet is not a function
var meet = function() {
    console.log("Hello Meet");
};
```

---

### 4. Function vs Variable Hoisting
#### Function Declaration:
- Fully hoisted.

```javascript
greet();
function greet() {
    console.log("Hello World");
}
```

#### Function Expression with `var`:
- Declaration is hoisted, but initialization is not.

```javascript
meet(); // TypeError: meet is not a function
var meet = function() {
    console.log("Hello Meet");
};
```

#### Function Expression with `let`:
- Declaration is not initialized, and accessing it results in a `ReferenceError`.

```javascript
// meet(); // ReferenceError: Cannot access 'meet' before initialization
let meet = function() {
    console.log("Hello Meet");
};
```

---

### Summary
1. JavaScript is single-threaded and synchronous.
2. Variables declared with `var` are hoisted and initialized with `undefined`.
3. Variables declared with `let` and `const` are hoisted but remain in the TDZ.
4. Function declarations are fully hoisted, while function expressions are not.
5. Temporal Dead Zone refers to the time between declaration and initialization for `let` and `const` variables.

---

Feel free to add more examples or clarify concepts further as needed!
