# Quote Generator

This project generates random inspirational quotes and changes the background color of the webpage in response to user interactions. It demonstrates the use of JavaScript event listeners and DOM manipulation.

## Features

1. **Random Quote Generation**:
   - A random quote is displayed when the button is clicked or when a specific key is pressed (e.g., the Enter key).

2. **Dynamic Background Color**:
   - The background color of the webpage changes to a random RGB color each time a new quote is generated.

3. **Event Listeners**:
   - Multiple types of events are handled, such as `click`, `dblclick`, `mousemove`, `mouseover`, `keydown`, and `keyup`.

4. **Event Object**:
   - The `event` object is used to access information about the event, such as the type, target element, and cursor position.

## Code Explanation

### Quote Array

```javascript
const quotes = [
  "The best way to predict the future is to create it. — Peter Drucker",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
  ... // More quotes
];
console.log("📜 Quote array initialized with motivational quotes.");
```
An array of motivational quotes to be displayed randomly.

### Random Color Generator

```javascript
function getRandomColor(){
  console.log("🎨 Generating a random color...");
  const r = Math.floor(Math.random()*256);
  const g = Math.floor(Math.random()*256);
  const b = Math.floor(Math.random()*256);
  console.log(`🟥 Red: ${r}, 🟩 Green: ${g}, 🟦 Blue: ${b}`);
  return `rgb(${r},${g},${b})`;
}
```
This function generates a random RGB color.

### Change Background Color

```javascript
function changeBackgroundColor(){
  console.log("🌈 Changing the background color...");
  const randomColor = getRandomColor();
  console.log(`🔄 New background color: ${randomColor}`);
  const element = document.getElementsByTagName('body')[0];
  element.style.backgroundColor = randomColor;
}
```
This function changes the background color of the webpage to a randomly generated color.

### Event Listeners

#### Button Click Event

```javascript
const button = document.querySelector('button');
console.log("🔘 Button element selected.");
button.addEventListener('click', (event) => {
  console.log("🖱️ Button clicked!");
  const text = document.getElementById("quote");
  const index = Math.floor(Math.random()*quotes.length);
  console.log(`🎲 Random quote index generated: ${index}`);
  text.textContent = quotes[index];
  console.log(`💬 New quote displayed: ${quotes[index]}`);
  changeBackgroundColor();

  console.log("📍 Event Details:");
  console.log(`🎯 Target: ${event.target}`); // Logs the button element
  console.log(`📌 Type: ${event.type}`);   // Logs 'click'
  console.log(`🧭 X-Coordinate: ${event.clientX}`); // Logs the X-coordinate of the click
  console.log(`🧭 Y-Coordinate: ${event.clientY}`); // Logs the Y-coordinate of the click
});
```
This event listener generates a new quote and changes the background color when the button is clicked. It also logs event details.

#### Keyboard Event

```javascript
document.addEventListener('keydown', (event) => {
  console.log(`⌨️ Key pressed: ${event.key}`);
  if (event.key === "Enter") {
    console.log("⏎ Enter key detected.");
    const text = document.getElementById("quote");
    const index = Math.floor(Math.random()*quotes.length);
    console.log(`🎲 Random quote index generated: ${index}`);
    text.textContent = quotes[index];
    console.log(`💬 New quote displayed: ${quotes[index]}`);
    changeBackgroundColor();
  }
});
```
This listener checks if the Enter key is pressed and, if so, triggers the quote and background change.

### Event Object

- **`event.target`**: Returns the element that triggered the event.
- **`event.type`**: Returns the type of the event (e.g., `click`, `keydown`).
- **`event.clientX` and `event.clientY`**: Provide the X and Y coordinates of the event.

## Event Types Demonstrated

- `click`: Triggered when the button is clicked.
- `keydown`: Triggered when a key is pressed.
- `keyup`: Triggered when a key is released.
- `mousemove`: Triggered when the mouse moves over the button.
- `mouseover`: Triggered when the mouse hovers over the button.

## How to Use

1. Open the project in a browser.
2. Click the "Generate Quotes" button to see a new quote and background color.
3. Alternatively, press the Enter key to trigger the same behavior.
4. Check the browser console for event-related logs.

## Future Enhancements

- Add more quotes to the array.
- Implement animations for smooth background color transitions.
- Allow users to save their favorite quotes.

## Technologies Used

- **HTML**: For the webpage structure.
- **CSS**: For basic styling.
- **JavaScript**: For functionality and interactivity.
