// const red = document.getElementById('red');
// const blue = document.getElementById('blue');
// const orange = document.getElementById('orange');
// const green = document.getElementById('green');
// const purple = document.getElementById('purple');
// const body = document.body;


// red.addEventListener('click', ()=>{
//     body.style.backgroundColor = "red";
// })

// blue.addEventListener('click', ()=>{
//     body.style.backgroundColor = "blue";
// })

// orange.addEventListener('click', ()=>{
//     body.style.backgroundColor = "orange";
// })

// green.addEventListener('click', ()=>{
//     body.style.backgroundColor = "green";
// })

// purple.addEventListener('click', ()=>{
//     body.style.backgroundColor = "purple";
// })


// const buttons = document.querySelectorAll('button');
// const body = document.body;
// buttons.forEach((btn)=> {
//     btn.addEventListener('click', ()=> {
//         console.log(btn.getAttribute('id'));
//         body.style.backgroundColor = btn.getAttribute('id'); // btn.id
//     }) 
// })


// it is not opotimise
// when we have more number of event listener it consume more memory and task gets slow down
// if here it is 100 color , then we have 100 event listener, and the code gets slow , consume more memory
// Event Bubbling and Event capturing is used to get out from this type of problem


// till now i am adding event listener to all these buttons
// now i will add event listener to the parent, and the parent will know that which children has triggered the event

const root = document.getElementById('root');
root.addEventListener('click', (event)=> {
    if(event.target.tagName == 'BUTTON')
        document.body.style.backgroundColor = event.target.id;
})
// and this above approach is known as event delegation , we have delegated the child event to parent