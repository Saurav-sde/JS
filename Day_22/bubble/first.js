const grandParent = document.getElementById('grandParent');
const parent = document.getElementById('parent')
const child = document.getElementById('child')

// event bubbling and event capturing
// addEventListener(first_event, callback, capture);

// child.addEventListener('click', (event)=>{
//     console.log("child Clicked"); 
// },false)

// parent.addEventListener('click', (event)=>{
//     console.log("parent Clicked");
// },false)

// grandParent.addEventListener('click', (event)=>{
//     console.log("grandParent Clicked");
// },false)

// if we click on child
// output :- child, parent,GP



// child.addEventListener('click', (event)=>{
//     console.log("child Clicked"); 
// },true)

// parent.addEventListener('click', (event)=>{
//     console.log("parent Clicked");
// },false)

// grandParent.addEventListener('click', (event)=>{
//     console.log("grandParent Clicked");
// },true)

// if we click on child
// output :- GP, child,parent


// child.addEventListener('click', (event)=>{
//     console.log("child Clicked"); 
// },false)

// parent.addEventListener('click', (event)=>{
//     console.log("parent Clicked");
// },true)

// grandParent.addEventListener('click', (event)=>{
//     console.log("grandParent Clicked");
// },false)

// // if we click on child
// // output :- Parent,child,GP



// we have to find the target, returns which element has trigger the event
// child.addEventListener('click', (event)=>{
//     console.log(event.target); 
// },false)

// parent.addEventListener('click', (event)=>{
//     console.log(event.target);
// },false)

// grandParent.addEventListener('click', (event)=>{
//     console.log(event.target);
// },false)

// when we click on child
// all three of them target child


// now we want to check the current target
// child.addEventListener('click', (event)=>{
//     // console.log(event.target); 
// },false)

// parent.addEventListener('click', (event)=>{
//     // console.log(event.target);
//     console.log(event.currentTarget);
    
// },false)

// grandParent.addEventListener('click', (event)=>{
//     // console.log(event.target);
// },false)

// we have clicked on child , but it logs the parent element


// The event.target and event.currentTarget properties are both used to identify elements involved in an event, but they serve different purposes:

// 1. event.target
// Definition: Refers to the element that triggered the event.
// Use Case: Use event.target when you want to identify the exact element where the event originated, especially in cases of event delegation.
// Example: If you click on a <span> inside a <button>, event.target will refer to the <span>.

// 2. event.currentTarget
// Definition: Refers to the element to which the event handler is attached.
// Use Case: Use event.currentTarget when you want to identify the element that is actively handling the event, irrespective of where within it the event was triggered.
// Example: If a click event handler is attached to a <button>, event.currentTarget will always refer to the <button>, even if you click on a child <span> inside it.



// event delegation
// event.stopPropagation
child.addEventListener('click', (event)=>{
    console.log("child clicked"); 
    event.stopPropagation(); 
},false)

parent.addEventListener('click', (event)=>{
    console.log("parent clicked");   
},false)

grandParent.addEventListener('click', (event)=>{
    console.log("GrandParent clicked");   
},false)
// now this event will stop at child, it doesnt bubble up to the parent and GP