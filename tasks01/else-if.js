let temperature = 75;

if (temperature > 80) {
    console.log("It's hot outside.");
}if (temperature > 70) {
    console.log("It's warm outside.");  // This will execute
} if (temperature < 80) {
    console.log("It's comfortable outside.");  // This will also execute
}
//_____________________________________________________________

let temperature1 = 75;

if (temperature1 > 80) {
    console.log("It's hot outside.");
} else if (temperature1 > 70) {
    console.log("It's warm outside.");  // This will execute
} else if (temperature1 < 80) {
    console.log("It's comfortable outside.");  // This will not execute
}
