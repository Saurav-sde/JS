// const Promise = fetch(`https://api.weatherapi.com/v1/current.json?key=ce1a8f7b57b64046a33154426250201&q=London&aqi=no`);
// Promise.then((response)=>{
//     console.log(response);
    
// }).catch((error)=>{
//     console.log(error);
// })

// fetch is asynchronous task, handled by the webAPIs
// if request is rejected then it prints the error
// . then tabhi chalega jb obj ke andar kuch aa chuka hoga

// promise has 3 states , pending,resolved,rejected
// .then will run when promise is resolved, .catch will run when promise is rejected

// The Promise object represents the eventual completion or failure of an asynchronous operation and its resulting value

// const Promise = fetch(`https://api.weatherapi.com/v1/current.json?key=ce1a8f7b57b64046a33154426250201&q=London&aqi=no`);
// Promise.then((response)=>{
//     console.log(response.json());  // it also returns a Promise, its also a async task
// })



// const Promise = fetch(`https://api.weatherapi.com/v1/current.json?key=ce1a8f7b57b64046a33154426250201&q=London&aqi=no`);
// Promise.then((response)=>{
//     const pro2 = response.json(); 
//     pro2.then((data)=>{
//         console.log(data);
//     })
// })



// const Promise = fetch(`https://api.weatherapi.com/v1/current.json?key=ce1a8f7b57b64046a33154426250201&q=London&aqi=no`);

// const pro2 = Promise.then((response)=>{
//     return response.json();
// })

// pro2.then((data) =>{
//     console.log(data);
// })



// promise chaining
// const Promise = fetch(`https://api.weatherapi.com/v1/current.json?key=ce1a8f7b57b64046a33154426250201&q=London&aqi=no`);

// // const pro2 = Promise.then((response)=>{
// //     return response.json();
// // }).then((data) =>{
// //     console.log(data);
// // })

// Promise.then(response => response.json()).then(data => console.log(data));


// const Promise = fetch(`https://api.weatherapi.com/v1/current.json?key=ce1a8f7b57b64046a33154426250201&q=London&aqi=no`)
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log(error));

// above are the ways to write the same thing

// now we can access any value as we get the json format, json is a object
const Promise = fetch(`https://api.weatherapi.com/v1/current.json?key=ce1a8f7b57b64046a33154426250201&q=London&aqi=no`)
.then(response => response.json())
.then(data => console.log(data.current.temp_f))
.catch(error => console.log(error));


