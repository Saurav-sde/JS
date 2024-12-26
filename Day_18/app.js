// dom
document.getElementById('first').innerHTML = "Hello Mahan Aadmi";
const obj = document.getElementById('first');
console.log(obj);
console.log(typeof obj);
console.log(obj.__proto__);
console.log(obj.innerHTML);
console.log(obj.id);
console.log(obj.className);


const obj2 = document.getElementsByClassName('header1');
console.log(obj2); // HTMLCollection(2) [h1#first.header1, h2#second.header1, first: h1#first.header1, second: h2#second.header1]
console.log(obj2[0]); //<h1 id="first" class="header1">Hello Mahan Aadmi</h1>

obj2[1].style.backgroundColor = "pink";
console.log(typeof obj2[1].style); // object
console.log(obj2[1].style); // CSSStyleDeclaration {0: 'background-color', accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}

