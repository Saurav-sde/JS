
// function fetchUser(){
//     console.log("Fetching the user detail....");
//     setTimeout(() => {
//         console.log("Data fetched successfully");  
//         const name = "Saurav"; //data fetched from backend
//         greet(name);
//         meet(name);
//     }, 2000);
// }


// function greet(name){
//     console.log(`Hello ${name}`);
// }

// function meet(name){
//     console.log(`Hello ${name}, i will meet you in Delhi`);
    
// }
// fetchUser();

// above we havent done callback
// callback
// function edit(name){
//     console.log(`${name} edited from the user detail..`); 
// }

// function fetchUser(callback){
//     console.log("Fetching the user detail....");
//     setTimeout(() => {
//         console.log("Data fetched successfully");  
//         const name = "Saurav"; //data fetched from backend
//         callback(name);
//     }, 2000);
// }
// fetchUser(greet);
// fetchUser(meet);
// fetchUser(edit);

// by using callback we decide which function is being called
// we have written the code one time, and are using for different scenarios(tasks)
// as in all the cases we are fetching data, and then doing the task, so we made the function as callback function



// callback hell

// dominos:-  pizza
// place order, preapre order, pickup, delivery
function placeOrder(callback){
    console.log("Tallking with Domino's");

    setTimeout(() => {
        console.log("ordered Placed Successfully");  
        callback(); 
    }, 2000);  
}
// placeOrder()

function preparingOrder(callback){
    console.log("Pizza Preparation Started.....");
    setTimeout(() => {
        console.log("Pizza Preparation done!");  
        callback();     
    }, 5000);
}
// preparingOrder();

function pickupOrder(callback){
    console.log("Reaching Restaurant for Pikcing the Order...");
    setTimeout(() => {
        console.log("Order picked up by the Delivery Boy"); 
        callback();      
    }, 3000);    
}
// pickupOrder()

function deliverOrder(){
    console.log("Delivery boy is on the way....");
    setTimeout(() => {
        console.log("Ordered Delivered successfully");        
    }, 5000);   
}
// deliverOrder();

// we want to execute place order after that prepare order
// placeOrder();
// preparingOrder();
// Tallking with Domino's
// Pizza Preparation Started.....
// ordered Placed Successfully
// Pizza Preparation done!
// this sequence is not the correct, first the order is placed then the prreparing has to be done
// makng cb
// placeOrder(preparingOrder);
 /* Tallking with Domino's
ordered Placed Successfully
Pizza Preparation Started.....
Pizza Preparation done!
*/

// now we want, first order then prepare it and then pickup from restaurant has to be done
// placeOrder(()=>{
//     preparingOrder();
// })

// callback = ()=>{
//     preparingOrder();
// }
/*
Tallking with Domino's
ordered Placed Successfully
Pizza Preparation Started.....
Pizza Preparation done!
*/


// placeOrder(()=>{
//     preparingOrder(()=>{
//         pickupOrder();
//     });
// })

/*
Tallking with Domino's
ordered Placed Successfully
Pizza Preparation Started.....
Pizza Preparation done!
Reaching Restaurant for Pikcing the Order...
Order picked up by the Delivery Boy
*/


placeOrder(()=>{
    preparingOrder(()=>{
        pickupOrder(()=>{
            deliverOrder();
        });
    });
})
/*
Tallking with Domino's
ordered Placed Successfully
Pizza Preparation Started.....
Pizza Preparation done!
Reaching Restaurant for Pikcing the Order...
Order picked up by the Delivery Boy
Delivery boy is on the way....
Ordered Delivered successfully
*/

// Above code is known as callback hell, callback is getting called inside a callback, us callback ke andar ek or callback fir us callback ke andar ek or.....
// it reduce the code readability
// debugging is hard
// the main disadvantage is dependency,it depends on the other function 

// solution of these problems is promises
