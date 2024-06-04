class Car {
    constructor(id, size, type, duration) {
        this.id = id;
        this.size = size;
        this.type = type;
        this.duration = duration;
    }
}

class Level {
    constructor(id, big, medium, small) {
        this.id = id;
        this.slots = {
            1: { current: big, max: big },
            2: { current: medium, max: medium },
            3: { current: small, max: small }
        };
        this.parkedCars = {}; // Tracks which car is in which slot
    }

    displaySlots() {
        console.log(`Slots on Level ${this.id} - ${this.slots[1].current}`);
    }
}

class ParkingSystem {
    constructor(levels) {
        this.levels = levels; // Array of Level objects
        this.rates = {
            'standard': 2,
            'electric': 3,
            'VIP': 4
        };
    }

    displaySlots() {
        this.levels.forEach(level => level.displaySlots());
    }

    findAvailableLevel(car) {
        return this.levels.findIndex(level => level.slots[car.size].current > 0);
    }

    findAvailableLevel01(car) {
        return `Available level - ${this.levels.findIndex(level => level.slots[car.size].current > 0)}`;
    }


    addCar(car) {
        let levelIndex = this.findAvailableLevel(car);
        if (levelIndex !== -1) {
            this.levels[levelIndex].slots[car.size].current--;
            this.levels[levelIndex].parkedCars[car.id] = { size: car.size, level: levelIndex };
            const charge = this.calculateFee(car.type, car.duration);
            return `Car ${car.id} parked on Level ${levelIndex + 1} in a size ${car.size} spot for ${car.duration} hours. Total charge: $${charge.toFixed(2)}.`;
        } else {
            return "No available spots for this type of car.";
        }
    }

    removeCar(carId, levelIndex) {
        if (levelIndex < this.levels.length && carId in this.levels[levelIndex].parkedCars) {
            const carSize = this.levels[levelIndex].parkedCars[carId].size;
            if (this.levels[levelIndex].slots[carSize].current < this.levels[levelIndex].slots[carSize].max) {
                this.levels[levelIndex].slots[carSize].current++;
                delete this.levels[levelIndex].parkedCars[carId];
                return `Car ${carId} removed from Level ${levelIndex + 1}, size ${carSize} spot.`;
            } else {
                return `Cannot increase slots for size ${carSize} beyond its maximum capacity.`;
            }
        } else {
            return "Car not found or invalid level specified.";
        }
    }

    calculateFee(type, hours) {
        let hourlyRate = this.rates[type];
        if (hours > 10) hourlyRate = 1;
        else if (hours > 5) hourlyRate = 2;
        return hours * hourlyRate;
    }
}

// Example Usage
const parkingSystem = new ParkingSystem([
    new Level(1, 10, 15, 20),
    new Level(2, 10, 10, 10)
]);
parkingSystem.displaySlots(); // Display current state of slots

const car1 = new Car("101", 2, 'electric', 12);
const car2 = new Car("102", 1, 'VIP', 20);
console.log(parkingSystem.addCar(car1)); // Adding and parking the car
console.log(parkingSystem.addCar(car2));
console.log(parkingSystem.findAvailableLevel(car2)); // Checking available level
console.log(parkingSystem.findAvailableLevel01(car2)); // Checking available level
console.log(parkingSystem.removeCar("101", 0)); // Removing the car
parkingSystem.displaySlots(); // Display current state of slots
