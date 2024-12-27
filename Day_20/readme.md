# 🌐 DOM Manipulation in JavaScript

This document provides an overview of creating and manipulating 📦 nodes in the DOM, accessing and modifying 🏷️ attributes, and various methods for adding ➕ and removing ➖ nodes. Each concept is supported with examples for better understanding. 🧑‍💻

---

## 1️⃣ Create Nodes
Creating 🛠️ nodes is the first step in dynamically building a 🖥️ webpage. The three main types of nodes are:

### 1.1 🎨 Create an Element
```javascript
const element = document.createElement('div');
```
This method creates a new 🆕 HTML element.

### 1.2 ✍️ Create a Text Node
```javascript
const textNode = document.createTextNode('Hello, World!');
```
This method creates a text node that contains plain 📝 text.

### 1.3 🏷️ Create an Attribute Node
```javascript
const attribute = document.createAttribute('id');
attribute.value = 'unique-id';
```
This method creates an attribute node, which can then be assigned to an element.

---

## 2️⃣ Accessing Attributes
Attributes of an HTML element can be accessed 🔍, modified ✏️, or removed ❌ using the following methods:

### 2.1 🔍 getAttribute
```javascript
const classAttr = element.getAttribute('class');
console.log(classAttr);
```
Retrieves the value of the specified 🏷️ attribute.

### 2.2 ✏️ setAttribute
```javascript
element.setAttribute('data-role', 'admin');
```
Creates a new 🆕 attribute if it doesn’t exist or updates its value if it does.

### 2.3 ❌ removeAttribute
```javascript
element.removeAttribute('data-role');
```
Removes the specified 🏷️ attribute from the element.

---

## 3️⃣ Adding Nodes to the DOM
Nodes can be added ➕ to the DOM using various methods:

### 3.1 ➕ appendChild(node)
Adds a single node as the last child of a parent element.
```javascript
parent.appendChild(newNode);
```

### 3.2 ➕ append(node1, node2, ...)
Adds multiple nodes as the last children of a parent element.
```javascript
parent.append(node1, node2);
```

### 3.3 📍 insertBefore(newNode, referenceNode)
Inserts a node before the specified reference node.
```javascript
parent.insertBefore(newNode, referenceNode);
```

### 3.4 🥇 prepend(node)
Adds a node as the first child of a parent element.
```javascript
parent.prepend(newNode);
```

### 3.5 🔄 replaceChild(newNode, oldNode)
Replaces an existing child node with a new 🆕 node.
```javascript
parent.replaceChild(newNode, oldNode);
```

### 3.6 🖍️ Using innerHTML
Sets the HTML content of an element directly.
```javascript
parent.innerHTML += '<li>New Item</li>';
```

### 3.7 🎯 Using insertAdjacentHTML/Element
Allows insertion of HTML or elements at specific positions relative to an element.
```javascript
parent.insertAdjacentHTML('beforebegin', '<div>Before Parent</div>');
parent.insertAdjacentHTML('afterend', '<div>After Parent</div>');
parent.insertAdjacentHTML('afterbegin', '<div>First Child</div>');
parent.insertAdjacentHTML('beforeend', '<div>Last Child</div>');
```

---

## 4️⃣ Removing Nodes from the DOM
Nodes can be removed ➖ using these methods:

### 4.1 ❌ removeChild(node)
Removes a specified child node.
```javascript
parent.removeChild(childNode);
```

### 4.2 ❌ remove()
Removes the element from the DOM.
```javascript
element.remove();
```

---

## 🔄 Example Code
Here’s an example demonstrating some of the methods:

```javascript
// ✨ Create an element and attach it to a parent
const element = document.createElement('li');
element.innerHTML = 'TS';
const parent = document.getElementById('root');
parent.appendChild(element);

// 📥 Attach multiple elements using append
const element1 = document.createElement('li');
const element2 = document.createElement('li');
element1.innerHTML = 'React';
element2.innerHTML = 'Node';
parent.append(element1, element2);

// 🥇 Prepend an element
const firstChild = document.createElement('li');
firstChild.innerHTML = 'First';
parent.prepend(firstChild);

// 🔄 Replace a child node
const newElement = document.createElement('li');
newElement.innerHTML = 'Replaced';
parent.replaceChild(newElement, parent.children[1]);

// ❌ Remove a node
const elementToRemove = parent.children[0];
elementToRemove.remove();
```

---

## 📋 Summary
This document outlines the key 🔑 methods and properties for creating 🛠️, accessing 🔍, and manipulating 🛞 nodes in the DOM. These tools 🧰 are foundational for dynamic and interactive web development 🌐.

