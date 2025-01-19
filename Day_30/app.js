function placeOrder(cart) {
    console.log("Tallking with Domino's");
    const pr = new Promise(function (resolve, reject) {
      setTimeout(() => {
        const food_available = true;
        if (food_available) {
          console.log("ordered Placed Successfully");
          const order = {
            orderId: 221,
            food: cart,
            restaurant: "Dominos",
            location: "Dwarka",
          };
          resolve(order);
        }
        else{
          reject("Items Out of Stocks");
        }
      }, 2000);
    });
    return pr;
  }
  
  
  function preparingOrder(order) {
    console.log("Pizza Preparation Started.....");
    const pr = new Promise(function(resolve,reject){
      setTimeout(() => {
          console.log("Pizza Preparation done!");
          const foodDetails = {
            token: 12,
            restaurant: order.restaurant,
            location: order.location,
          };
          resolve(foodDetails);
        }, 5000);
    })
    return pr;  
  }
  
  function pickupOrder(foodDetails) {
    console.log("Reaching Restaurant for Pikcing the Order...");
    const pr = new Promise(function(resolve,reject) {
        setTimeout(() => {
          console.log("Order picked up by the Delivery Boy");
          const dropLocation = foodDetails.location;
          resolve(dropLocation);
        }, 3000);
    })
    return pr;
  }
  
  function deliverOrder(dropLocation) {
    console.log("Delivery boy is on the way....");
    setTimeout(() => {
      console.log("Ordered Delivered successfully");
    }, 5000);
  }
  
  
//   placeOrder(cart)
//     .then((order) => preparingOrder(order))
//     .then((foodDetails) => pickupOrder(foodDetails))
//     .then((dropLocation) => deliverOrder(dropLocation))
//     .catch(error => console.log(error));

// const order = placeOrder(cart);
// const foodDetails = preparingOrder(order);
// const dropLocation = pickupOrder(foodDetails);
// deliverOrder(dropLocation);

// this will run immediately with any values of the  arguments, but we want , until we dont get any data in the order variable dont execute preparingorderorder and same goes on......


// async function greet() {
//     const order = await placeOrder(cart);
//     const foodDetails = await preparingOrder(order);
//     const dropLocation = await pickupOrder(foodDetails);
//     deliverOrder(dropLocation);  
// }
// greet();

// now jb tk placeorder complete nhi hoga, tb tk next line nhi chalega, this situastion was handled by the await
// await is doing the work of .then here


// const p1 = new Promise((resolve,reject) =>{
//     setTimeout(() => {
//         resolve("Hello Evryone");
//     }, 5000);
// })

// async function greet() {
//     const data1 = await p1;
//     console.log(data1);

//     const data2 = await p1;
//     console.log(data2);
// }
// greet();

// in data 1 await wait for p1 to be completed
// but in data2 it does not wait, bcz the p1 is already resolved above, so it doesn't wait



const p1 = new Promise((resolve,reject) =>{
    setTimeout(() => {
        resolve("First promise resolved");
    }, 5000);
})

const p2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("Second promise resolved")
    }, 5000);
})

// async function greet() {
//     const data1 = await p1;
//     console.log(data1);

//     const data2 = await p2;
//     console.log(data2);
// }
// greet();

// it wait for 5 sec
// first promise resolved, second promise resolved

// const p1 = new Promise((resolve,reject) =>{
//     setTimeout(() => {
//         resolve("First promise resolved");
//     }, 8000);
// })

// const p2 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve("Second promise resolved")
//     }, 5000);
// })

// async function greet() {
//     const data1 = await p1;
//     console.log(data1);

//     const data2 = await p2;
//     console.log(data2);
// }
// greet();
// // it wait for 8 sec
// first promise resolved, second promise resolved


// //
// p1.then(value => console.log(value));
// p2.then(value => console.log(value));

// here p2 is resolved first and then p1 , as p2 is taking 5 sec and p1 is 8 sec
// but in await it wait for 8 sec , and then it prints both 



// function test1(){
//     const p1 = new Promise((resolve,reject) =>{
//         setTimeout(() => {
//             resolve("First promise resolved");
//         }, 5000);
//     })
//     return p1;
// }

// function test2(){
//     const p2 = new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve("Second promise resolved")
//         }, 5000);
//     })
//     return p2;
// }

// async function greet(){
//     const data1 = await test1();
//     console.log(data1);
    
//     const data2 = await test2();
//     console.log(data2);   
// }

// greet();

// here, first it wait for 5 sec for p1, and then again wait for 5 sec for p2
// this is why, until function is not called it will not execute


// async function meet(){
//     return "Hello Coder"; // this will also be considered as promise, if we are not returning anything then it will make promise of undefined
// }
// meet().then(value => console.log(value));
// async function always retuns a promise



function test1(){
    const p1 = new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve("First promise resolved");
        }, 5000);
    })
    return p1;
}

function test2(){
    const p2 = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Second promise resolved")
        }, 5000);
    })
    return p2;
}

// async function greet(){
//     console.log("Hello I greet You");
//     const data1 = await test1(); // jb ye resolve hoga tb mera code execution wapas mera main thread pe aa jaayega
//     // or we can say it will go to the microtask queue
//     console.log(data1);
    
//     const data2 = await test2();
//     console.log(data2);   
// }
// greet();
// console.log("Hello Coder Army");
// console.log("Kaise Ho Aap Sab Log");

// Hello i greet you
// hello coder army
// Kaise ho Aap Sab Log
// after 5 sec First promise resolved and second promise resolved
// promise will resolve in the microtask queue



// async function greet(){
//     try{
//         console.log("Hello I greet You");
//         const data1 = await test1(); // jb ye resolve hoga tb mera code execution wapas mera main thread pe aa jaayega
//         // or we can say it will go to the microtask queue
//         console.log(data1);
        
//         const data2 = await test2();
//         console.log(data2);   
//     }
//     catch(error) {
//         console.log(error);        
//     }
// }
// greet();


// as we can see test1 does not impact test2, we can run it in parallel
async function greet(){
    try{
        console.log("Hello I greet You");
        const [data1,data2] = await Promise.all([test1(),test2()]);
        console.log(data1);
        console.log(data2);        
    }
    catch(error) {
        console.log(error);        
    }
}
greet();
// here it will run after the max time(test1(),test2()) the promise takes 


