// declare the variable
// let num = 10;
// console.log(num);


// Primitive Data type
// Number,boolean,string, null, undefined, Symbol, bigint
// Number :- 10,12,-12,-34,56.67

let account_balance = 786;
console.log(`account_balance:- ${account_balance}`);
console.log(typeof(account_balance));
 

// String :- "Rohit", 'Hello', "12323"
let str = "Rohit";
console.log(str);
console.log(typeof (str));

let comment = 'Rohit is a bad boy he doesnt know how to operate zoom';
console.log(comment);

// boolean :- true/false
let statement = true;
console.log(statement);
console.log(typeof statement);


// undefined
let account;
console.log(account);
console.log(typeof account);


//null
let balance = null;
console.log(balance);
console.log(typeof balance); //object, its an error in js


// bigint
let a = 234789345167834578236734568n;
console.log(a);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);






// why exponent is necessary



// Non Primitive Data Type
// Array, Object, function

/*
-1023 KO SHIFT KRDIYAAAAA 0 PE
AUR 1023 SHIFT HOOO GYAAA 2046 PE
SIGN BIT KAA ZANZAT KHATAM KARR DIYAAA
AUR JAB, HUMARE PAAS EXPONENT KI VALUE AATI HAI, POSTIVE EXPONENT AAYA TO ADD KARDO 1023 ME, AUR NEGATIVE EXPONENT AAYA TOH MINUS KRDO 1023 ME SE,
*/