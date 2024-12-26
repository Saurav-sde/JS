
// making a dynamic clock
/*
const timer = document.getElementById('root');

function timing () {
    const now = new Date();
    const indianTime = now.toLocaleTimeString();
    timer.innerHTML = indianTime;
}
setInterval(timing,1000);

timer.style.fontSize = "100px";
timer.style.height = "100vh"
timer.style.display = "flex";
timer.style.justifyContent = "center";
timer.style.alignItems = "center";

// homework :- count down timer for olympic 2028
*/


// Accessing by css selectors
// single element

// const id = document.querySelector('#first') // we can give id, class , tagname anything
// id.innerHTML = "Hello Money";

// const id2 = document.querySelector('.header2'); // it gives the first element that having class header2, if we want all the elemnt then use querySelectorAll

// id2.style.backgroundColor = "pink";



// how to iterate over nodeList
// const obj = document.querySelectorAll('.header1');

//1: obj.forEach((val) =>{
//    console.log(val);
//    })

//2: for(let val of obj)
//          console.log(val);

//3: for(let i=0;i<obj.length;i++)
//          obj[i].style.color = 'red';


// we cant use all the properties like map,filter or many more. to use this we have to convert the nodeList in array
// let arr = Array.from(obj);
// console.log(arr); // (2) [h1#first.header1, h2#second.header1]


// let list = document.querySelectorAll('li'); // accessing using tag name
// console.log(list); // NodeList(4) [li, li, li, li]

// let obj2 = document.querySelector('ul li'); // select the immediate children of ul
// console.log(obj2);


// Accessing Using Tag name
// const obj3 = document.getElementsByTagName('h1');
// console.log(obj3); // HTMLCollection [h1#first.header1, first: h1#first.header1]

// let obj4 = document.getElementsByTagName('li');
// console.log(obj4); // HTMLCollection(4) [li, li, li, li]
// console.log(obj4[0]);

// for(let i=0;i<obj4.length;i++)
//     obj4[i].style.color = 'black';

// for(let val of obj4)
    // console.log(val); //<li style="color: black;">…</li> <li style="color: black;">…</li> <li style="color: black;">…</li> <li style="color: black;">…</li>


// we cant use for each on htmlcollection
// first we have to convert it in array
// let allListItems = Array.from(obj4);
// console.log(allListItems); // (4) [li, li, li, li]

// allListItems.forEach((val) => {
//     console.log(val);
// })




//****************************** */

// Accessing using Relationships
// i. parent Node
// const list = document.querySelector('li');
// console.log(list.parentNode); // ul#third.header2
// console.log(list.parentElement); // ul#third.header2

// ii. child Node
const par = document.querySelector('ul');
console.log(par.childNodes); // NodeList(9) [text, li, text, li, text, li, text, li, text]
console.log(par.children); // HTMLCollection(4) [li, li, li, li]


// in html collections :- we only get html element
// in nodeList :- we get text node alongwith with the html element


// iii. First and last Child
console.log(par.firstChild); // #text
console.log(par.firstElementChild); // <li>…</li>

console.log(par.lastChild); // #text
console.log(par.lastElementChild); // <li>…</li>

// iv. sibling Nodes







// innerHtml :- it prints all the things it has even other html,element
// textContent :- it gives only the text by removing all the tags used  inside them
// innerText :-  it gives only the text which can be seen in the browser, it doesn't gives us  hidden text 

console.log(document.getElementById('first').innerHTML); // Hello Coder <strong style="display: none;">Army</strong>
console.log(document.getElementById('first').textContent); // Hello Coder Army 
console.log(document.getElementById('first').innerText); // Hello Coder 


