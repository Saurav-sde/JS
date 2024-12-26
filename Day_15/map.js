// key value pair : key should be unique

const map1 = new Map();
map1.set(3,90);
map1.set("Rohit",45);
map1.set(20,"Mohan");
console.log(map1);
// Map(3) { 3 => 90, 'Rohit' => 45, 20 => 'Mohan' }

// when we tried to duplicate the key then the value gets modified
map1.set("Rohit",40);
console.log(map1);

// delete
map1.delete(3);
console.log(map1);
// Map(2) { 'Rohit' => 40, 20 => 'Mohan' }

console.log(map1.has("Rohit")); // true
console.log(map1.size); // 2


map1.clear();
console.log(map1); // Map(0) {}


const map2 = new Map([
    [4, "rohit"],
    ["Mohan", "rohan"],
    [30, 9]
]);
console.log(map2); // Map(3) { 4 => 'rohit', 'Mohan' => 'rohan', 30 => 9 }


// for...of
for(let value of map2)
    console.log(value); // [ 4, 'rohit' ] [ 'Mohan', 'rohan' ] [ 30, 9 ]
    
// destructuring
for(let [key,value] of map2)
    console.log(key,value); // 4 rohit     Mohan rohan        30 9
    
// in object keys is string or symbol but in map keys will be anything(number,string,boolean,null,object....)


