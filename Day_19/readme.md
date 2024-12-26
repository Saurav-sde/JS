# Document Object Model (DOM)

The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a web page in a way that allows programs (like JavaScript) to interact with it.

- A browser takes your HTML document and converts it into the DOM.

Using the DOM, JavaScript can:

1. Change all the HTML elements on the page.
2. Modify all the HTML attributes on the page.
3. Alter all the CSS styles on the page.
4. Remove existing HTML elements and attributes.
5. Add new HTML elements and attributes.
6. React to all existing HTML events on the page.
7. Create new HTML events for the page.

---

## Accessing Elements in the DOM

### 1. By ID
- **Method:** `document.getElementById(id)`
- **Description:** Retrieves a single element with the specified `id` attribute.

### 2. By Class Name
- **Method:** `document.getElementsByClassName(className)`
- **Description:** Returns a live `HTMLCollection` of all elements with the specified class name.

### 3. By CSS Selectors
#### i. Single Element
- **Method:** `document.querySelector(selector)`
- **Description:** Returns the first element matching the specified CSS selector.

#### ii. Multiple Elements
- **Method:** `document.querySelectorAll(selector)`
- **Description:** Returns a static `NodeList` of all elements matching the specified CSS selector.

### 4. By Tag Name
- **Method:** `document.getElementsByTagName(tagName)`
- **Description:** Returns a live `HTMLCollection` of all elements with the specified tag name (e.g., `div`, `p`, `a`).

### 5. Using Relationships
#### i. Parent Node
- **Method:** `element.parentNode` or `element.parentElement`
- **Description:** Access the immediate parent of an element.

#### ii. Child Nodes
- **Methods:** `element.childNodes` (includes text nodes), `element.children` (only element nodes)
- **Description:** Access all child nodes of an element.

#### iii. First and Last Child
- **Methods:** `element.firstChild`, `element.lastChild`, `element.firstElementChild`, `element.lastElementChild`
- **Description:** Access the first or last child of an element.

#### iv. Sibling Nodes
- **Methods:** `element.nextSibling`, `element.previousSibling`
- **Element Siblings:** `element.nextElementSibling`, `element.previousElementSibling`
- **Description:** Access the sibling nodes of an element.

---

## Working with Content

### 1. `innerHTML`
- Retrieves or sets the HTML content of an element, including tags.
- Example:
  ```javascript
  document.getElementById("myDiv").innerHTML = "<strong>Hello World!</strong>";
  ```

### 2. `textContent`
- Retrieves or sets the text content of an element, excluding tags.
- Example:
  ```javascript
  document.getElementById("myDiv").textContent = "Hello World!";
  ```

### 3. `innerText`
- Retrieves or sets the visible text content of an element (may exclude hidden text depending on CSS styles).
- Example:
  ```javascript
  document.getElementById("myDiv").innerText = "Hello World!";
  