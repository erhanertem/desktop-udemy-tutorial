"use strict";
const carMakers_ = [];
const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];
const carsByMake_ = [];
const carsByMake = [['f150'], ['corolla'], ['camero']];
const car = carMakers[0];
console.log('🚀 | file: exercises.ts:180 | car:', car);
const myCar = carMakers.pop();
console.log('🚀 | file: exercises.ts:182 | myCar:', myCar);
carMakers.map((car) => {
    return car.toUpperCase();
});
const importantDates = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());
