let cart = ["Pizza", "coke", "sandwhich"];
// function placeOrder(cart, callback){
//     console.log("Tallking with Domino's");

//     setTimeout(() => {
//         console.log("ordered Placed Successfully");
//         const order = {
//             orderId: 221,
//             food: cart,
//             restaurant: "Dominos",
//             location: "Dwarka"
//         }
//         callback(order);
//     }, 2000);
// }

// function preparingOrder(order, callback){
//     console.log("Pizza Preparation Started.....");
//     setTimeout(() => {
//         console.log("Pizza Preparation done!");
//         const foodDetails = {
//             token: 12,
//             restaurant: order.restaurant,
//             location: order.location
//         }
//         callback(foodDetails);
//     }, 5000);
// }

// function pickupOrder(foodDetails, callback){
//     console.log("Reaching Restaurant for Pikcing the Order...");
//     setTimeout(() => {
//         console.log("Order picked up by the Delivery Boy");
//         const dropLocation = foodDetails.location;
//         callback(dropLocation);
//     }, 3000);
// }

// function deliverOrder(dropLocation){
//     console.log("Delivery boy is on the way....");
//     setTimeout(() => {
//         console.log("Ordered Delivered successfully");
//     }, 5000);
// }

// how this callback hell is solved by the promise lets see

// placeOrder(cart, (order) => {
//   preparingOrder(order, (foodDetails) => {
//     pickupOrder(foodDetails, (dropLocation) => {
//       deliverOrder(dropLocation);
//     });
//   });
// });

// solving the above callback hell using promise
// placeOrder(cart)
//   .then((order) => preparingOrder(order))
//   .then((foodDetails) => pickupOrder(foodDetails))
//   .then((dropLocation) => deliverOrder(dropLocation));
// all are the async task, now the funstion is not depending on other to call them

// creating new promise

// const pr = new Promise(function(resolve,reject) {

// })
// return pr;

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


placeOrder(cart)
  .then((order) => preparingOrder(order))
  .then((foodDetails) => pickupOrder(foodDetails))
  .then((dropLocation) => deliverOrder(dropLocation))
  .catch(error => console.log(error));