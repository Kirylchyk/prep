//Get object data by path

function getObjectValueByPath(obj, path) {
    let current = obj;

    for (let key of path) {
        if (typeof current === 'object' && key in current) {
            current = current[key];  // Navigate deeper into the object
        }
    }
    return current;  // Return the final value
}

// Example object
const data = {
    user: {
        details: {
            name: 'John Doe',
            address: {
                city: 'New York',
                zip: '10001'
            }
        }
    }
};

// Path to traverse
const path = ['user', 'details', 'address', 'city'];

// Call the function and log the output
const result = getObjectValueByPath(data, path);
console.log(result);  // Outputs: 'New York'

