const form = document.querySelector('form');

// jaise hi hm input dall rhe, event trigger ho jaa rha
// form.addEventListener('input', (event)=>{
//     // console.log(event.target); // event bubbling is used
//     console.log(event.target.value);  
// })


// whenver the focus from one place goes to other areas and change in input field occurs, the event trigger
// form.addEventListener('change', (event)=>{
//     console.log(event.target.value);  
// })



// focus :- does not bubble, so it needs to be directly attached to individual input elements
// focusin :- Bubbles, so it can be attached to the form element for event delegation

// whenver the focus goes anywhere, the value present where i am focusing gets logged
// form.addEventListener('focusin', (event)=>{
//     console.log(event.target.value);  
// })


// blur :- does not buuble, it needs to be directly attached to the individual input elements
// focusout :- buubles,

//whenver i focused out from there , it trigger the event where i am previously focusing
// form.addEventListener('focusout', (event)=>{
//     console.log(event.target.value);  
// })


// click :- whenever i clicked anywhere in the form , the event gets triggered
// form.addEventListener('click', (event)=>{
//     console.log(event.target.value);  
// })


// some issue in dbclick
// dbclick :- whenever i double clicked anywhere in the form , the event gets triggered
// form.addEventListener('dbclick', (event)=>{
//     console.log(event.target.value);  
// })


// whenever we submit, our page gets refreshed
// submit :- event triggers when we submit the form
// form.addEventListener('submit', (event)=>{
//     console.log("form submitted");  
// })


// to use reset , we have to crete a btn with type reset
// reset :- event trigger when we reset the form
// form.addEventListener('reset', (event)=>{
//     console.log("form resetted");  
// })




// form.addEventListener('submit',(event) => {
//     event.preventDefault(); // it stops the page from getting refresh
//     const first = document.getElementById('first');
//     console.log(first.value);

//     const second = document.getElementById('second');
//     console.log(second.value);
    
//     const third = document.getElementById('third');
//     console.log(third.value);
    
//     const result = document.getElementById('result');
//     result.innerText = `${first.value} ${second.value} is a good boy`;
// })

// now the problem is if have 100 input fields we have to write this 100 times
// the solution of this problem is FormData

form.addEventListener('submit', (event)=> {
    event.preventDefault();

    const data = new FormData(form); // it is an API/ object
    // when we submit the form the data corresponding to this form is in data variable now

    // console.log(data);
    // the data is in key:value pair
    // console.log(data.keys()); // returns an iterator
    // we can iterate over it using for...of or we can change it in array

    for(let key of data.keys())
        console.log(key);
    for(let value of data.values())
        console.log(value);
    for(let entry of data.entries())
        console.log(entry);

    // we can get individual data by destructuting the entries
    for(let [key,value] of data.entries())
        console.log(key, value);  

    console.log(Array.from(data.keys())); // created an array of keys
    console.log(Array.from(data.values())); // created an array of values
    console.log(Array.from(data.entries())); // created an array of key:values
})