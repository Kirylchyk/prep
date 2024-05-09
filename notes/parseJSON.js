//function to parse json in node.js

const fs = require('fs');

// Function to read and parse JSON file
function parseJSONFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, jsonString) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
        try {
            const data = JSON.parse(jsonString);
            const integers = extractIntegers(data);
            console.log(integers); // Output the array of integers
        } catch (error) {
            console.error("Error parsing JSON:", error);
        }
    });
}

// Call the function with the path to your JSON file
parseJSONFile('path/to/your/file.json');
