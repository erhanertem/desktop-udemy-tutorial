"use strict";
const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary() {
        return `Name of the car is ${this.name}, and the weather is not good for a test-drive`;
    },
};
const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary() {
        return `My drink has ${this.sugar} grams of sugar`;
    },
};
const printVehicle = (vehicle) => {
    console.log(`Summary: ${vehicle.summary()}`);
};
printVehicle(oldCivic);
printVehicle(drink);
