// I. System Design (Data Structure) -> Scalability, extensibility, and maintainability of system
// II. Object-oriented programming (OOP)
// III. Inheritance, polymorphism, encapsulation

// Requirements:
//Stage 1
// 1. The system should support different types of vehicles
// (e.g., cars, motorcycles, trucks) with varying sizes.
// 2. Method to check if a parking space is available.

//Stage2
// 1. Implement a charging system for parking,
// considering different rates for different types of vehicles and durations.

//Stage3 - Extended
// 1. The parking lot can have multiple levels, each with a specified number of parking spaces.
// 2. The system should allow vehicles to enter and exit the parking lot,
// with appropriate validations.
// 3. Functionality to find the location of a parked vehicle.
// 4. Algorithms to use for efficient space allocation and retrieval. -> first available
// 5. Handle concurrent access and potential race conditions. -> system design


// In object-oriented programming, a class is like a blueprint for creating objects.
// It defines properties and methods that are common to all objects of that type.
// An object is an instance of a class; it has the state and behavior described by the class.
//const apple = new Fruit();
//apple is an object (or instance) of the Fruit class.


// ParkingGarage
class Car {
    constructor(id, size, type, duration) {
        this.id = id;
        this.size = size; // 3 for small, 2 for medium, 1 for large
        this.type = type; // 'standard', 'electric', 'VIP'
        this.duration = duration; // Duration in hours the car will be parked
    }
}

class ParkingSystem {
    constructor(big, medium, small) {
        // Encapsulation is about keeping some of the object's data private
        // slots is now a private member of the ParkingSystem instance.
        // It's not accessible outside the methods
        this.slots = {
            1: big,    // Large slots
            2: medium, // Medium slots
            3: small   // Small slots
        };
        this.rates = {
            'standard': 2, // $2 per hour initially
            'electric': 3, // $3 per hour initially
            'vip': 4       // $4 per hour initially
        };
    }

    //Current state of system
    displayCurrentState() {
        console.log(`Current slots availability: 
        Big - ${this.slots[1]}, Medium - ${this.slots[2]}, Small - ${this.slots[3]}`);
    }

    checkInventory(size){
        if (this.slots[size] > 0) {
            return `There is availability for this vehicle.`
        }
    }

    addCar(car) {
        if (this.slots[car.size] > 0) {
            this.slots[car.size]--;
            return `Car - ${car.size} is successfully parked.`;

        } else {
            return `No available spots for a size ${car.size} car.`;
        }
    }

    removeCar(car) {
        if (this.slots[car.size] > 0) {
            this.slots[car.size]++;

            //example of polymorphism - charge operates differently depending on the size of the car
            const charge = this.calculateFee(car.type, car.duration);  // Assuming charge info needed at exit
            return `Car ${car.id} removed from a size ${car.size} spot. Total charge: $${charge}.`;
        } else {
            return `No car is parked in the specified size ${car.size} spot.`;
        }
    }

    calculateFee(type, hours) {
        let hourlyRate = this.rates[type];
        if (hours > 10) {
            hourlyRate = 1; // $1 per hour if parked more than 10 hours
        } else if (hours > 5) {
            hourlyRate = 2; // $2 per hour if parked more than 5 hours but <= 10 hours
        }
        return hours * hourlyRate;
    }
}

// Example Usage
const parkingSystem = new ParkingSystem(100, 101, 50);
parkingSystem.displayCurrentState();
// Create and park some cars
const car1 = new Car("101", 1, 'standard', 3); // Large
const car2 = new Car("102", 2, 'electric', 7); // Medium
// -> motorcycle - example of inheritance IF >>
//class Motorcycle extends Car
const motorcycle = new Car("103", 3, 'vip', 15); // Small


console.log(parkingSystem.addCar(car1)); // Parks a large car
console.log(parkingSystem.addCar(car2)); // Parks a medium car
console.log(parkingSystem.addCar(motorcycle)); // Parks a small car

parkingSystem.displayCurrentState();

// Remove the cars
console.log(parkingSystem.removeCar(car1)); // Removes a large car
console.log(parkingSystem.removeCar(car2)); // Removes a medium car
console.log(parkingSystem.removeCar(motorcycle)); // Removes a small car

parkingSystem.displayCurrentState();
console.log(parkingSystem.checkInventory(1));

//if levels with fix amount per level
//    constructor(levels, big, medium, small) {
//         this.levels = {};
//         for (let i = 1; i <= levels; i++) {
//             this.levels[i] = {
//                 1: big,
//                 2: medium,
//                 3: small
//             };