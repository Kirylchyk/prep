//General parsing str approaches

let dateString = "The event will happen on 2024-05-01.";
let datePattern = /\d{4}-\d{2}-\d{2}/;
let match = dateString.match(datePattern);
console.log(match[0]);  // Outputs: 2024-05-01

let csvData = "Apple, Banana, Cherry";
let fruits = csvData.split(", ");
console.log(fruits);  // Outputs: ['Apple', 'Banana', 'Cherry']

// JSON Parsing
// For strings formatted as JSON, JavaScript provides JSON.parse()
// to convert these strings into JavaScript objects
// Use Case: Converting data received from web APIs or configurations stored in JSON format.


