//Given a list of error codes a -> b -> c -> error for specific user Ids,
// find all errors that the user has received
// (so a,b,c prompted an error, display the user Ids).

function doThat(arr, obj) {
    let result = [];

    for (let key in obj) {
        if (arr.includes(obj[key])) {
            result.push(key);
        }
    }
    return result;
}

const obj = {
    userA: 'error1',
    userB: 'error2',
    userC: 'error3'
}

let arr = ['error2'];

console.log(doThat(arr, obj)); // This should log ['userB']

//I was given an array of objects that included a user_id and a key pressed.
// Given a string (that's a combination of multiple keys pressed),
// -> to return the user who pressed them in that order.

function doThat(actions, sequence) {

    //creating new obj from input obj
    let userMap = {};

    actions.forEach(action => {
        //initiate obj
        if (!userMap[action.userId]) {
            userMap[action.userId] = [];
        }
        //Main one, pushing values to keys
        userMap[action.userId].push(action.keyPress);
    });

    //clean str
    // let target_sequence = sequence.replace(/\s*,\s*/g, ',');


    //compare
    for (let user in userMap) {
        //no need to refer to keyPress as it's already in object
        //make str from map arr as we compare strings
        let keyPresses = userMap[user].join(',');
        if (keyPresses === sequence) {
            return user;
        }
    }
}

// An array of objects
const actions01 = [
    { userId: "user1", keyPress: "A" },
    { userId: "user2", keyPress: "T" },
    { userId: "user1", keyPress: "B" },
    { userId: "user2", keyPress: "C" },
    { userId: "user3", keyPress: "X" },
    { userId: "user1", keyPress: "C" }
];

let sequence01 = "T,C"; //string

console.log(doThat(actions01, sequence01));


// Implement a hash table using JavaScript ->
// Using a hashmap, check if user actions have repeated keypresses
// that are causing an error.
// write a function that’s a list of objects
// and organize the data so
// that the resulting array outputs which users had errors

function doThat(actions) {
    let errors = [];  // Using an array to store user IDs with errors
    let lastKeyPress = {};   // Hashmap/object to store the last key pressed by each user

    for (let action of actions) {
        const userId = action.userId;
        const keyPress = action.keyPress;

        // Check if the current keypress is the same as the last one for this user
        if (lastKeyPress[userId] === keyPress) {
            errors.push(userId);
        }

        // Update the last key press for this user
        lastKeyPress[userId] = keyPress;
    }

    return errors;  // Return the array of user IDs with errors
}

// Example usage:
const userActions = [
    { userId: "user1", keyPress: "A" },
    { userId: "user1", keyPress: "A" },  // Error: Repeated "A"
    { userId: "user2", keyPress: "B" },
    { userId: "user2", keyPress: "C" },
    { userId: "user3", keyPress: "X" },
    { userId: "user3", keyPress: "X" }   // Error: Repeated "X"
];

console.log(doThat(userActions));//user1, user2

