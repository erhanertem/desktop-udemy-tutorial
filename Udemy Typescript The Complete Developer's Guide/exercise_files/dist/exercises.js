"use strict";
class Vehicle {
    constructor(color) {
        this.color = color;
    }
    honk() {
        console.log('beep!!');
    }
}
class Car extends Vehicle {
    constructor(wheels, color) {
        super(color);
        this.wheels = wheels;
    }
    drive() {
        console.log('Vroomm!');
    }
    startDrivingProcess() {
        this.drive();
        this.honk();
    }
}
const vehicle = new Vehicle('orange');
console.log(vehicle.color);
const car = new Car(8, 'red');
car.startDrivingProcess();
