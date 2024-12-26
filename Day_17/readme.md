# Understanding the `this` Keyword in JavaScript

The `this` keyword in JavaScript is a special keyword that refers to the context in which the current code is being executed. Its value depends on how the function where `this` is used is called.

## 1: Global Context (Outside Any Function)
- **In Browsers:** `this` refers to the `window` object.
- **In Node.js:** `this` refers to the module's exports object.

## 2: Inside a Function
### i: Non-Strict Mode
When `this` is used inside a regular function, it refers to the global object.

```javascript
function greet() {
    console.log(this);
}
greet(); // Logs the global object (e.g., window in browsers).
```

### ii: Strict Mode
In strict mode, `this` will be `undefined` inside a function.

```javascript
'use strict';
function greet() {
    console.log(this);
}
greet(); // Logs undefined
```

## 3: Inside a Method (Object Context)
When `this` is used inside an object’s method, it refers to the object that owns the method.

```javascript
const obj = {
    name: "Rohit",
    age: 20,
    meet: function () {
        console.log(this.name);
    }
};

obj.meet(); // Logs "Rohit"
```

## 4: Arrow Functions
Arrow functions do not have their own `this`. Instead, they inherit `this` from the surrounding (lexical) scope.

```javascript
let obj = {
    name: "Rohit",
    age: 11,
    greet: () => {
        console.log(this);
    }
};

obj.greet(); // Logs the global object (not the obj itself)
```

However, when an arrow function is used inside a regular function or method, it inherits `this` from the enclosing function.

```javascript
let obj = {
    name: "Rohit",
    age: 11,
    greet: function () {
        let ab = () => {
            console.log(this);
        };

        ab();
    }
};

obj.greet(); // Logs the obj
```

## 5: Inside a Constructor or Class
In constructors and classes, `this` refers to the instance of the object being created.

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let a = new Person("Rohit", 20);
console.log(a); // Logs the Person object { name: "Rohit", age: 20 }
