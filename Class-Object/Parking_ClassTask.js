//class

class ParkingSystem {
    constructor(big, medium, small) {
        this.big = big;
        this.medium = medium;
        this.small = small;
    }


    addCar(carType) {
        if (carType === 1 && this.big > 0) {
            this.big--;
            return true; // Car parked successfully.
        } else if (carType === 2 && this.medium > 0) {
            this.medium--;
            return true; // Car parked successfully.
        } else if (carType === 3 && this.small > 0) {
            this.small--;
            return true; // Car parked successfully.
        } else {
            return false; // No available slots for this car type.
        }
    }
}


const MyParking = new ParkingSystem(3,2,1);
console.log(MyParking.addCar(1));