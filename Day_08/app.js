// Date

const d = new Date();
/*
console.log(d); //2024-11-29T15:34:51.729Z
console.log(d.toDateString()); //Fri Nov 29 2024
console.log(d.toString()); //Fri Nov 29 2024 21:06:20 GMT+0530 (India Standard Time)
console.log(d.toISOString()); //2024-11-29T15:36:49.659Z
*/

// console.log(typeof d); //object

// from where it is bringing date :- system clock

// it is calculating time and date in milliseconds from jan-11-1970  12:00:00

const d1 = new Date(1000); // parameter milliseconds
// console.log(d1); //1970-01-01T00:00:01.000Z

const d2 = new Date(2000);
// console.log(d2); //1970-01-01T00:00:02.000Z

// console.log(d.getDate());//29
// console.log(d.getDay()); // 5, sun-0,mon-1,tue-2,wed-3,thu-4,fri-5,sat-6
// console.log(d.getMonth()); // 10(0 based counting) jan-0,feb-1,mar-2,apr-3....
// consle.log(d.getFullYear()); // 2024
// console.log(d.getMilliseconds()); //878
// console.log(d.getMinutes()); //19
// console.log(d.getTime()); // 1732895750539

const now = Date.now();
// console.log(now); // 1732895834094

// We Can Create Custom Date
const d4 = new Date("2022-10-20"); // here, 1 based counting
// console.log(d4); // 2022-10-20T00:00:00.000Z

const d5 = new Date("2022-10-20T10:10:12");
// console.log(d5);

// year,month,date,hours,minutes,seconds,milliseconds
// first two value is compulsory
// const date = new Date(2024,4,28); // 2024-05-27T18:30:00.000Z (0 based counting)
// console.log(date);

// number 0 based and string 1 based 



// setting date components

const d6 = new Date();
d6.setDate(20); 
d6.setFullYear(2021); 
d6.setMonth(3); 
// console.log(d6.toString()); // Tue Apr 20 2021 21:41:24 GMT+0530 (India Standard Time)
 



// Date Calculations
const date1 = new Date();
const date2 = new Date("2025-04-21");
console.log(date2-date1); // differeence between dates is in milliseconds
console.log(date2 > date1); //true


// Making a Countdown Timer for olympics 2028
// Days , hours, minutes, seconds
const currentDate = new Date();
const olymDate = new Date("2028-07-14T00:00:00");
const remainingDate = olymDate - currentDate;

const days = Math.floor(remainingDate/(1000*60*60*24));
// console.log(days);

const hours = Math.floor((remainingDate/(1000*60*60)) % 24);
// console.log(hours);

const minutes = Math.floor((remainingDate/(1000*60)) % 60);
// console.log(minutes);

const seconds = Math.floor((remainingDate/(1000)) % 60);
// console.log(seconds);

console.log(`Olympics Countdown Time : Days:${days} hour:${hours} minute:${minutes} second:${seconds} `);



