const quotes = [
    "The best way to predict the future is to create it. — Peter Drucker",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
    "The only way to do great work is to love what you do. — Steve Jobs",
    "Don't watch the clock; do what it does. Keep going. — Sam Levenson",
    "It does not matter how slowly you go, as long as you do not stop. — Confucius",
    "Opportunities don't happen, you create them. — Chris Grosser",
    "You miss 100% of the shots you don’t take. — Wayne Gretzky",
    "In the middle of every difficulty lies opportunity. — Albert Einstein",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. — Ralph Waldo Emerson",
    "The harder you work for something, the greater you'll feel when you achieve it. — Anonymous",
    "Success is not how high you have climbed, but how you make a positive difference to the world. — Roy T. Bennett",
    "Dream big and dare to fail. — Norman Vaughan",
    "Don’t let yesterday take up too much of today. — Will Rogers",
    "The future belongs to those who believe in the beauty of their dreams. — Eleanor Roosevelt",
    "It always seems impossible until it's done. — Nelson Mandela",
    "The way to get started is to quit talking and begin doing. — Walt Disney",
    "Success usually comes to those who are too busy to be looking for it. — Henry David Thoreau",
    "It’s not whether you get knocked down, it’s whether you get up. — Vince Lombardi",
    "Your time is limited, so don’t waste it living someone else’s life. — Steve Jobs",
    "Everything you’ve ever wanted is on the other side of fear. — George Addair"
  ];
  
// // eventlistener on mouse
// const button = document.querySelector('button');
// button.addEventListener('click', ()=>{
//   const text = document.getElementById("quote");
//   const index = Math.floor(Math.random()*quotes.length);
//   text.textContent = quotes[index];
//   changeBackgroundColor();
// })

// dblclick :- event trigger when we double click on it
// mousemove :- event trigger when we move on the btn
// mouseover :- event trigger when we over on the btn 


//  Change the background color on clicking the button
function getRandomColor(){
  const r = Math.floor(Math.random()*256);
  const g = Math.floor(Math.random()*256);
  const b = Math.floor(Math.random()*256);
  return `rgb(${r},${g},${b})`;
}

function changeBackgroundColor(){
  const randomColor = getRandomColor();
  const element = document.getElementsByTagName('body')[0];
  element.style.backgroundColor = randomColor;
}


// eventlistener on keyboard
// document.addEventListener('keydown', ()=>{
//     const text = document.getElementById("quote");
//     const index = Math.floor(Math.random()*quotes.length);
//     text.textContent = quotes[index];
//     changeBackgroundColor();
// })

// keydown :- event trigerrs when we clicked on any btn
// keyup :- event trigger when docwe relesae from the clicked btn



// Event object
// now we want to trigger an event when any particular button is press from the keyboard
// document.addEventListener('keydown', (event)=>{
//   console.log(event); // KeyboardEvent {isTrusted: true, key: 's', code: 'KeyS', location: 0, ctrlKey: false, …}
//   const text = document.getElementById("quote");
//   const index = Math.floor(Math.random()*quotes.length);
//   text.textContent = quotes[index];
//   changeBackgroundColor();
// })

// event :- it is a object it has so much information, when we trigger any event it has all the information related to that event
// event.key :- it returs the key that is pressed


// now change the quote when enter key is pressed
// document.addEventListener('keydown', (event)=>{
//     if(event.key === "Enter") {
//       const text = document.getElementById("quote");
//       const index = Math.floor(Math.random()*quotes.length);
//       text.textContent = quotes[index];
//       changeBackgroundColor();
//     }
// })


// event.target :- it returns the target of the event
const button = document.querySelector('button');
button.addEventListener('click', (event)=>{
  const text = document.getElementById("quote");
  const index = Math.floor(Math.random()*quotes.length);
  text.textContent = quotes[index];
  changeBackgroundColor();

  console.log(event.target); // <button>Generate Quotes</button>
  console.log(event.type);
  console.log(event.clientX); // 437
  console.log(event.clientY); // 529
})

// event.type :-  it returns the type of the event , here its click

// event.clientX :- it returns the exact position in x direction where it is clicked
// event.clientY :- it returns the exact position in y direction where it is clicked