let obj = {
    name: "rohan",
    age: 23,
    gender: "male",
    city: "kotdwar"
}

// for in loop
// we can iterate over keys in a object
for(let key in obj)
{
    console.log(key, obj[key]);   
}


// Object.keys(obj)
// console.log(Object.keys(obj));



let obj2 = Object.create(obj);
obj2.money = 420;
obj2.id = "roh";
// console.log(obj2);

console.log(Object.keys(obj2));  // only access of obj2 keys, it didnt access inherited keys
for(let key in obj2)
    console.log(key); // it access both obj2 and inherited keys
    

