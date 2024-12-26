// reduce

// const arr = [10,20,30,40,50];

// // const result = ar.reduce(callbackFunction, initiliazation)
// // const result = arr.reduce((acc,curr) => {
// //     console.log(acc,curr);
// //     acc = acc+curr;
// //     return acc; // whatever we return it goes to acc
// // }, 0);

// // initial value of acc is initialisation
// const result = arr.reduce((acc,curr) => acc+curr,0);
// console.log(result);


let arr = ["orange", "apple", "banana", "orange", "apple", "banana", "orange", "grapes"];
// final result ek object ki form , orange-3, apple-2 baar...
// orange:3
// apple:2 ...
// acc = {}

const result = arr.reduce((acc,curr) => {
    if(acc.hasOwnProperty(curr))
            acc[curr]++;
    else
        acc[curr] = 1;    
    return acc;
},{})

console.log(result);


// const result = arr.reduce((acc,curr) => {
//     acc.hasOwnProperty(curr) ? acc[curr]++ : acc[curr]=1; 
//     return acc;
// },{})
// console.log(result);



