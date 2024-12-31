# JavaScript: Single-Threaded and Asynchronous ✨

JavaScript is a **single-threaded synchronous programming language** but also exhibits **asynchronous behavior**. Let's break it down with examples and explanations.

---

## Single-Threaded Nature 🤖
In JavaScript, **single-threaded** means:
- Only one task is executed at a time.
- Tasks are processed sequentially.

### Example
```javascript
console.log(10);
const timer = Date.now();
while (Date.now() - timer < 2000) {
    // Wait for 2 seconds
}
console.log(20);
console.log(30);
```
**Output:**
```
10
20
30
```
Here, JavaScript processes the `while` loop synchronously, blocking further execution until 2 seconds have elapsed.

---

## Asynchronous Behavior 🌐
JavaScript's **asynchronous behavior** comes into play when working with tasks like:
- `setTimeout`
- Event listeners
- HTTP requests

These tasks are handled by **Web APIs** provided by the browser, allowing JavaScript to remain non-blocking.

### Example
```javascript
console.log(10);
setTimeout(() => {
    console.log("20");
}, 2000);
console.log(30);
```
**Output:**
```
10
30
20
```
Why this order?
1. `console.log(10)` executes first.
2. `setTimeout` registers the callback function and hands it to the Web API.
3. `console.log(30)` executes immediately since JavaScript doesn’t wait for the timer.
4. After 2 seconds, the callback function from `setTimeout` executes, printing `20`.

---

## Key Points to Understand 🔄
1. **`setTimeout` is not part of JavaScript.**
   - It’s a Web API provided by the browser.
   - JavaScript delegates tasks like `setTimeout` to the browser.

2. **Other Examples of Web APIs:**
   - **DOM Manipulation**: The `window` object, `document`, and event listeners are part of the browser, not JavaScript itself.
   - **Asynchronous Tasks:** These include HTTP requests, timers, and events.

3. **Asynchronous Tasks Use Callbacks:**
   - Every asynchronous task expects a **callback function** to execute once the task is complete.

### Diagram of Execution
1. JavaScript sends asynchronous tasks to Web APIs.
2. Web APIs handle the tasks.
3. Once complete, the callback is sent to the **Event Loop**.
4. The Event Loop ensures callbacks are executed in the main thread once the call stack is empty.

---

JavaScript’s blend of synchronous and asynchronous behavior makes it a powerful yet tricky language. Understanding these concepts will help you write more efficient and bug-free code! 🚀
