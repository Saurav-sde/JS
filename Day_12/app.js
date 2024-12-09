// conditional statement

// let age = 30;
// if(age >= 18)
// {
//     console.log("Eligible for Vote");
// }
// else{
//     console.log("Not eligible for vote");
// }

// if else if else
// let age = 19;
// if(age < 18)
//     console.log("KID");
// else if(age > 45)
//     console.log("OLD");
// else
//     console.log("YOUNG");
    
    
// Multiple Condition: switch, strict comparison

// switch (new Date().getDay()) {
//     case 0:
//         console.log("Sunday");
//         break;
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;

//     default:
//         break;
// }
    

// looop : ek hi kaam ko baar baar krna
// erite hello world 20 items
// for(let i=1;i<=20;i++)
//     console.log("Hello World!");
    

// sum of first n natural number:
// sum of first 10 natural number:
// let sum = 0;
// for(let i=1;i<=10;i++)
//     sum += i;
// console.log(sum);


// Nested for loop :- loop ke andar loop
/*
12345
12345
12345
12345
12345
12345
*/

// for(let i=1;i<=6;i++)
// {
//     for(let j=1;j<=5;j++)
//         console.log(j);       
// }




// lets discuss about scope
// global scope
// local scope(functional scope)
// block scope

// global scope :- everyone can access this variable
// let a = 10;
// var b = 20;
// const c = 30;

// function greet(){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// greet();
// console.log(a);
// console.log(b);
// console.log(c);

//local scope(functional scope)
// function greet(){
//     let a = 10;
//     var b = 20;
//     const c = 30;
//     console.log("Hello Function"); 
// };
// greet();
// console.log(a); //error
// console.log(b); //error
// console.log(c); //error
// we cant access any of these variables outside the function. so the scope of variable is inside the function only


// block scope
// if(true)
// {
//     let a = 10;
//     var b = 20;
//     const c = 30;
// }
// console.log(a); // we can't access it
// console.log(b); // we can access it
// console.log(c); // we can't access it

// var amount = 400;
// var amount = 20;
// var allows to create variable with same name in same scope , this we take us in some confusion 
// if we declare var in block scope it can be accessed after that block
// so, above are two reason why we are not using var


// let amount = 20;
// if(true)
// {
//     let amount = 30;
//     console.log(amount);  // 30
// }
// console.log(amount); // 20



// console.log(amount); //error
// let amount = 300;
// it gives error , as we cant access the variable before its being declared
// but var can be accessed

// console.log(b); //undefined
// var b = 234;



// greet();
// function greet() {
//     console.log("hello greet");
// }
// // function can be accessed before declaration

// meet();
// const meet = function() {
//     console.log("Hello meet");
// }
// when we make function inside a varible, then we can't access it before decalration, as we can say that it is inside a variable and variable cant be accessed before declartion unless it is declared using var 




// while loop
 let i =1;
 while(i < 6)
{
    console.log(i);
    i++;
}


let arr = [10,20,30,40];
for(let i=0;i<arr.length;i++)
    console.log(arr[i]);


const obj = {
    name: "rohit",
    age: "30",
    amount: "420",
    city: "Haridwar"
}

const key = Object.keys(obj);
// now we have key, can we extract corresponding values using these keys

for(let i=0;i<key.length;i++)
{
    console.log(obj[key[i]]);    
}


