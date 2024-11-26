// primitive
const  num = 10;
// num = 20; // error
console.log(num);


// Non primitve
const obj = {
    id:10,
    balance: 200
}
obj.id = 11; // it is allowed in non primitive data type bcz we are not chnaging the address as it gets location in heap
console.log(obj);


let obj2 = {
    id: 20,
    money: 300
} 
// obj = obj2; // its error , here we are changing the address of obj

// string in js

// ways to declare string
let str1 = "Hello Satyam";
console.log(str1);

let str2 = 'Satyam Bhai';
console.log(str2);

// modern way
let str3 = `Aur Satyam, Kya Haal Chaal`;
console.log(str3);


let price = 80;
console.log(`Price of the tomato is ${price}`);

// string concatenation
let s1 = "hello ";
let s2 = "coder army";
let s3 = s1 + s2;
console.log(s3);

// size of the string
console.log(s1.length);
console.log(s2.length);
console.log(s3.length);


// "hello coder army" :- print the quotation also
console.log('"hello coder army"');
console.log(`"hello coder army"`);

// 'hello coder army'
console.log("'hello coder army'");

// \n:- break the line
let msg = "Rohit bhaiya bahut bade badmaash hain. \nWo bahut gande insaan hain";
console.log(msg);

// escape character \
// now we want to print \n also
let comment = "Rohit bhaiya bahut bade badmaash hain. \\nWo bahut gande insaan hain";
console.log(comment);


let special = "rohit";
console.log(special[0]); // prints first character
console.log(special.charAt(3)); // it prints charcater at 3rd index


// toLowercase
// toUppercase
console.log(special.toLowerCase());
console.log(special.toUpperCase());
// above function doesnt change the original string, it returns new string
console.log(special);

let hero = "Hello Coder Army";
console.log(hero.indexOf("Coder")); // it returns the index of first character of first occurrence of substring if its exist, otherwise returns -1
console.log(hero.lastIndexOf("Coder")); // it returns the index of first character of last occurrence of substring if its exist, otherwise returns -1
console.log(hero.includes("Coder")); // it returns true if exist otherwise false


// Extracting Substring

            //01234567
let newStr = "HelloDon";
            //-7 -6 -5 -4 -3 -2 -1 0
console.log(newStr.slice(0,3)); // it prints a substring staring from 0th index to 2nd index, last index is not included
console.log(newStr.slice(1,3)); //el

console.log(newStr.substring(0,3)); // it also works like slice, the diffrenece is slice takes negative index substring not


console.log(newStr.slice(-6,5));
console.log(newStr.slice(-2,4)); // it doesnt work, as starting index is coming after ending index so it returns empty string



// Replacing contents
let str10 = "hello ji kaise ho ji";
console.log(str10.replace("ji","money")); // it replace first occurrence of ji to money
console.log(str10.replaceAll("ji","money")); // it replace all the occurrence of ji yo money

// split delimeters
let str11 = "Money! Honey! Sunny! Funny";
console.log(str11.split("!")); // it converts string into array on the basis of !, here space reamins 
console.log(str11.split("! ")); // space is also removed

// trimming
let str12 = "     hello ji";
console.log(str12.trim()); //it removes starting and ending space
console.log(str12.length);
console.log(str12.trim().length);

// trimStart() :- remove strating space
// trimEnd() :- remove ending space




// New way to Create String 
let latestString = new String("Hello Coder Army");
console.log(latestString); 
console.log(typeof latestString);  // object
// now this will not take space in stack and it takes memory in heap
// whenever we use new keyword then it takes memory in heap instead of stack






