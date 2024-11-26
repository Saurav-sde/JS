// Comparison Operator
// number to number
/*
let a1 = 1;
let a2 = 2;
console.log(a1 == a2); // false
console.log(a1 > a2); //false
console.log(a1 < a2); //true
console.log(a1 >= a2); // false
console.log(a1 <= a2); //true
*/

let num = 10;
let str = "10";
console.log(num == str); //true
console.log(num == "20"); //false
// type conversion hoga string to number


let a1 = 10;
let str1 = "30";
console.log(a1 < str1); //true


str1 = "30x";
console.log(a1 < str1); // false :- str1 is Converted in NaN

// === first check type if its same then compare the values inside it
console.log(a1 === str);

let a2 = 30;
let a3 = 30;
console.log(a2 === a3);


// null == undefined :- true
// null === undefined :- false

console.log(null == undefined); //true
console.log(null === undefined); //false

// null and undefined always gives false when == with others. but gives true when == with each other 
// null can only be equivalent to undefined
console.log(null == 0);
// In below cases type of null is getting converted into number
console.log(null < 0);   // 0 < 0
console.log(null > 0);  // 0 > 0
console.log(null <= 0); // 0 <= 0
console.log(null >= 0); // 0 >= 0


// undefined comparison
console.log(undefined == 0);

console.log(undefined < 0);     // NaN < 0 :- false
console.log(undefined > 0);     // NaN > 0 :- false
console.log(undefined <= 0);    // NaN <= 0 :- false
console.log(undefined >= 0);    // NaN >= 0 :- false

console.log(NaN == NaN); // false


let str3 = "rohit";
let str4 = "mohan";
console.log(Number(str3) == Number(str4)); // NaN == NaN :- false

let abc1 = 123;
let abc2 = "123";
let abc3 = 123;
console.log(abc1 == abc2 == abc3); // false
abc3 = true;
console.log(abc1 == abc2 == abc3); // true


// logical Operator
let age = 18;
let money = 420;
console.log(age > 18 && money > 200); // T && T :- true , other all condition gives false

console.log(age > 10 || money > 200); // F || F :- false, other all condition gives true

console.log(!(age > 10)); // true -> false and vice versa



// BITWISE OPERATOR
console.log(4 & 5);
console.log(11 | 14);
console.log(5 ^ 7);
console.log(5 << 3); // left shift, 5 multiply by 2 power 3
console.log(20 >> 2); // right shift, 20 divided by 2 power 2

