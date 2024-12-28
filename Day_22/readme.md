
---

# Event Bubbling and Event Capturing in JavaScript 🚀

This project demonstrates the concepts of **event bubbling**, **event capturing**, **event delegation**, and how to use **event.target** and **event.currentTarget** to manage events effectively.

## Table of Contents 📚
- [Event Bubbling 🔥](#event-bubbling)
- [Event Capturing 🕵️](#event-capturing)
- [Event Delegation 🎯](#event-delegation)
- [Event.stopPropagation 🚫](#eventstoppropagation)
- [Event Target vs CurrentTarget 🧐](#event-target-vs-currenttarget)

---

## Event Bubbling 🔥

In **event bubbling**, the event starts from the **target element** and bubbles up to its ancestors (parent, grandparent, etc.). By default, events bubble from the innermost element to the outermost.

### Example:

```javascript
child.addEventListener('click', (event) => {
    console.log("child clicked");
}, false);

parent.addEventListener('click', (event) => {
    console.log("parent clicked");
}, false);

grandParent.addEventListener('click', (event) => {
    console.log("grandParent clicked");
}, false);
```

### Expected Output (Clicking on the Child):
```
child clicked
parent clicked
grandParent clicked
```

In this case, when we click on the **child**, the event first triggers the child, then it bubbles to the parent, and finally, to the grandparent. 🏠

---

## Event Capturing 🕵️

In **event capturing**, the event starts from the **outermost element** and works its way down to the **target element**. You can enable event capturing by passing `true` as the third argument in the `addEventListener` method.

### Example:

```javascript
child.addEventListener('click', (event) => {
    console.log("child clicked");
}, true);

parent.addEventListener('click', (event) => {
    console.log("parent clicked");
}, false);

grandParent.addEventListener('click', (event) => {
    console.log("grandParent clicked");
}, true);
```

### Expected Output (Clicking on the Child):
```
grandParent clicked
child clicked
parent clicked
```

Here, the event starts from the **grandparent** and travels inward to the **child**. 🕵️‍♂️

---

## Event Delegation 🎯

**Event delegation** allows you to attach a single event listener to a parent element instead of attaching one to each child element. This is useful when dealing with dynamic elements.

### Example:

```javascript
document.getElementById('parent').addEventListener('click', (event) => {
    if (event.target.id === 'child') {
        console.log("child clicked");
    }
});
```

In this example, instead of attaching a click event to the **child**, we attach it to the **parent** and check if the **target** of the event is the child. This is **event delegation** in action! 🎯

---

## event.stopPropagation 🚫

The `event.stopPropagation()` method stops the event from bubbling up (or down, depending on the phase). Once it's called, the event will not propagate to any other elements.

### Example:

```javascript
child.addEventListener('click', (event) => {
    console.log("child clicked");
    event.stopPropagation();
}, false);

parent.addEventListener('click', (event) => {
    console.log("parent clicked");
}, false);

grandParent.addEventListener('click', (event) => {
    console.log("grandParent clicked");
}, false);
```

### Expected Output (Clicking on the Child):
```
child clicked
```

In this case, clicking on the **child** will trigger the event on the child only, and it will not propagate to the parent or grandparent due to the `event.stopPropagation()` method. ✋

---

## Event Target vs CurrentTarget 🧐

- **`event.target`**: Refers to the element that triggered the event.
- **`event.currentTarget`**: Refers to the element to which the event handler is attached.

### Example:

```javascript
child.addEventListener('click', (event) => {
    console.log("Target:", event.target); // Element that triggered the event
    console.log("Current Target:", event.currentTarget); // Element with the event listener
}, false);

parent.addEventListener('click', (event) => {
    console.log("Target:", event.target);
    console.log("Current Target:", event.currentTarget);
}, false);

grandParent.addEventListener('click', (event) => {
    console.log("Target:", event.target);
    console.log("Current Target:", event.currentTarget);
}, false);
```

### Expected Output (Clicking on the Child):
```
Target: <div id="child">Child</div>
Current Target: <div id="child">Child</div>

Target: <div id="child">Child</div>
Current Target: <div id="parent">Parent</div>

Target: <div id="child">Child</div>
Current Target: <div id="grandParent">GrandParent</div>
```

Here, `event.target` shows the element that actually triggered the event (the **child**), while `event.currentTarget` shows the element that the event listener is attached to.

---

## Conclusion 🎉

This project is all about understanding the flow of events in the DOM and how you can use event propagation, capturing, delegation, and targets to make your web applications more efficient and interactive. So, get ready to **capture** those events like a pro! 🕵️‍♀️🚀

---

Happy coding! 🎉👨‍💻👩‍💻