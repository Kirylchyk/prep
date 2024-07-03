//classic parse json function in js

const data = {
    "users": [
        {
            "id": 1,
            "name": "Alice",
            "email": "alice@example.com",
            "isActive": true
        },
        {
            "id": 2,
            "name": "Bob",
            "email": "bob@example.com",
            "isActive": false
        },
        {
            "id": 3,
            "name": "Charlie",
            "email": "charlie@example.com",
            "isActive": true
        }
    ]
};

// Accessing the users array
const users = data.users;

// Loop through each user and log their information
users.forEach(user => {
    console.log(`ID: ${user.id}`);
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
    console.log(`Is Active: ${user.isActive}`);
    console.log('---');
});

// Example of filtering active users
const activeUsers = users.filter(user => user.isActive);
console.log('Active Users:', activeUsers);

// Example of mapping user names to a new array
const userNames = users.map(user => user.name);
console.log('User Names:', userNames);




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
