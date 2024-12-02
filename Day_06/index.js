// let num1 = 231;
// let num2 = new Number(231);
// console.log(num2);
// console.log(typeof num2); //object


// let num3 = new Number(231);
// console.log(num1 == num2); // here , data type is not same so it doexnt gets directly compare it first converts obj(num2) in number then compaare it.
// console.log(num2 == num3); // here, data type is same so it is directly comparing address of both num2 and num3 as it is getting meomry in heap 

/*
let num = 231.68;
console.log(num.toFixed(1));
console.log(num.toPrecision(4));
console.log(num.toExponential(2));
console.log(num.toString());
console.log(num.valueOf());
*/



// Math
// console.log(Math.E); //2.71 
// console.log(Math.LN10);
// console.log(Math.PI);

let num1 = 23.6;
console.log(Math.floor(num1));
console.log(Math.ceil(num1));

console.log(Math.random()); //it generate value between 0<=value<1
console.log(Math.random() * 10); // 0<=value<=9
console.log(Math.floor(Math.random() * 10));//it generate 0,1,2,3,4,5,6,7,8,9
console.log(Math.floor(Math.random() * 10) + 1); // it generate from 1,2,3,4,5,6,7,8,9,10

console.log(Math.floor(Math.random() * 10) + 11); // 0-9 + 11

// generalised formula
// min = 40 , max = 50;
// console.log(Math.floor(Math.random() * (max-min+1) + min));

console.log(Math.floor(Math.random() * (40-30+1)) + 30);





