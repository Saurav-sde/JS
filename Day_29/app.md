# Weather API Fetch Example 🌦️

This project demonstrates how to use the `fetch` API in JavaScript to retrieve data from a weather API and handle it using Promises. 
The `fetch` API is used to perform asynchronous HTTP requests, and the response is handled using `.then()` and `.catch()` methods for promise chaining.

---

## Key Features ✨

1. **Fetching Data**: Makes an HTTP GET request to a weather API endpoint to fetch current weather data for a specific location.
2. **Promise Handling**:
   - `Pending`: The request is being processed.
   - `Resolved`: The request is successful, and data is available.
   - `Rejected`: An error occurred during the request.
3. **JSON Parsing**: Converts the API response into a JavaScript object for easier manipulation.
4. **Error Handling**: Catches and logs any errors that occur during the request process.

---

## Code Explanation 💻

### Fetching Data and Handling Promises

```javascript
const Promise = fetch(`https://api.weatherapi.com/v1/current.json?key=ce1a8f7b57b64046a33154426250201&q=London&aqi=no`)
  .then(response => response.json()) // Parse the response to JSON format
  .then(data => console.log(data.current.temp_f)) // Access specific data (temperature in Fahrenheit)
  .catch(error => console.log(error)); // Handle errors if the request fails
```

### Steps in the Code:

1. **Fetch Request**:
   - The `fetch()` method initiates a network request to the Weather API endpoint.
   - The request is asynchronous and returns a Promise.

2. **Parsing the Response**:
   - `.then(response => response.json())`: Converts the raw response into a JSON object.
   - The `response.json()` method itself returns a Promise, as it is also an asynchronous operation.

3. **Using the Data**:
   - `.then(data => console.log(data.current.temp_f))`: Extracts and logs the `temp_f` (temperature in Fahrenheit) value from the API's response.

4. **Error Handling**:
   - `.catch(error => console.log(error))`: Catches and logs any errors that occur during the fetch or response parsing.

---

## Other Ways to Write the Same Code 🛠️

### 1. Using Intermediate Promises
```javascript
const Promise = fetch(`https://api.weatherapi.com/v1/current.json?key=ce1a8f7b57b64046a33154426250201&q=London&aqi=no`);
Promise.then(response => {
  const pro2 = response.json();
  pro2.then(data => {
    console.log(data.current.temp_f);
  });
});
```

### 2. Direct Promise Chaining
```javascript
fetch(`https://api.weatherapi.com/v1/current.json?key=ce1a8f7b57b64046a33154426250201&q=London&aqi=no`)
  .then(response => response.json())
  .then(data => console.log(data.current.temp_f))
  .catch(error => console.log(error));
```

### 3. Using Return Statements in Promises
```javascript
const Promise = fetch(`https://api.weatherapi.com/v1/current.json?key=ce1a8f7b57b64046a33154426250201&q=London&aqi=no`);
const pro2 = Promise.then(response => {
  return response.json();
});
pro2.then(data => {
  console.log(data.current.temp_f);
});
```

### 4. Shortened with Arrow Functions
```javascript
fetch(`https://api.weatherapi.com/v1/current.json?key=ce1a8f7b57b64046a33154426250201&q=London&aqi=no`)
  .then(response => response.json())
  .then(data => console.log(data.current.temp_f))
  .catch(console.log);
```

---

## Concepts Explained 📖

### 1. Promises
Promises represent the eventual completion (or failure) of an asynchronous operation. They have three states:
- **Pending**: The operation is ongoing.
- **Resolved**: The operation was successful.
- **Rejected**: The operation failed.

### 2. Chaining Promises
Promises can be chained using `.then()` to perform sequential asynchronous operations. This ensures cleaner and more readable code.

Example of Promise Chaining:
```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
```

### 3. Error Handling
Using `.catch()` ensures that any errors occurring at any point in the chain are properly handled.

---

## JSON Response Structure 🗂️
The response from the Weather API is in JSON format, structured as follows:
```json
{
  "location": {
    "name": "London",
    "region": "City of London, Greater London",
    "country": "United Kingdom"
  },
  "current": {
    "temp_c": 7.0,
    "temp_f": 44.6,
    "condition": {
      "text": "Partly cloudy",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png"
    }
  }
}
```

### Accessing Specific Data
To access the temperature in Fahrenheit (`temp_f`):
```javascript
console.log(data.current.temp_f);
```

---

## Learning Outcomes 🎓

- Understand how to make asynchronous requests using `fetch`.
- Learn to handle Promises with `.then()` and `.catch()`.
- Parse JSON responses and access specific values.
- Implement error handling for robust applications.

---

## Try It Yourself 🛠️

- Replace `London` in the URL with your desired city.
- Replace `key=ce1a8f7b57b64046a33154426250201` with your API key from [WeatherAPI](https://www.weatherapi.com/).

---

## Notes 📝
- Ensure that the API key is valid.
- The API endpoint may return an error if the key or query parameters are incorrect.
- Always handle sensitive data (like API keys) securely in production.

---

### Happy Coding! 🚀
