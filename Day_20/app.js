// we want to crete 5th list 

// create an element
// const element = document.createElement('li');
// element.innerHTML = 'TS';

// // first access the parent and parent.appendChild() , it attach the element at last
// const parent = document.getElementById('root');
// parent.appendChild(element);


/*
function attach(content) {
    const element = document.createElement('li');
    element.innerHTML = content;

    const element2 = document.createElement('li');
    element2.innerHTML = content + " V2.0";

    const parent = document.getElementById('root');
    // parent.appendChild(element);
    parent.append(element, element2); 
    // in appendchild we can attach only one element at a time
    // in append() we can attach many element together
};

attach('TS');
attach("React");
attach("Node");
*/

// create a Text Node
// const element = document.createTextNode("Hello Coder Army");
// const parent = document.getElementById('root');
// parent.append(element);


// create an attribute node
// const element = document.createAttribute("id");
// element.value = "first";

// // const currList = document.querySelector('li'); // access the first list item
// // currList.setAttributeNode(element);

// // access to 2nd list item
// const parent = document.getElementById('root');
// parent.children[1].setAttributeNode(element);




// ***********Accessing Attribute of an Element*************
// const element = document.getElementById('root');
// const attr = element.getAttribute("class");
// console.log(attr);

// // setAttribute() :- it create an attribute if doesnt exist otherwise update it
// element.setAttribute("custom","20");
// element.setAttribute("class", "saurav");


// // removeAttribute() ;- removes an attribute
// element.removeAttribute("custom");





// Add Nodes to the DOM

// const parent = document.getElementById('root');
// const element = document.createElement('li');
// element.innerHTML = "TS";

// attach this element as first child
// parent.prepend(element);

// attach this element as last child
// parent.append(element);

// insert before any element
// const child2 = parent.children[1];
// parent.insertBefore(element,child2);

// replace child
// parent.replaceChild(element, child2);


// using innerHTML
// const parent = document.getElementById('root');
// parent.innerHTML += "<li>TS</li>";


// insert adjacent element
// const parent = document.getElementById('root');
// const element = document.createElement('div');
// element.innerHTML = "Hello Coder Army";
// // i want this div to come before ul
// // parent.insertAdjacentElement("beforeBegin",element);
// // parent.insertAdjacentElement("afterEnd",element);
// // parent.insertAdjacentElement("afterBegin",element);
// parent.insertAdjacentElement("beforeEnd",element);


// Delete node or element
const element = document.querySelector('li');
element.remove();

// removeChild(node)

