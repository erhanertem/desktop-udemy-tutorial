"use strict";
let apples = 5;
let pineapples = 5;
let apples_;
let speed = 'fast';
let nothingMuch = null;
let notKnown = undefined;
let now = new Date();
let colors = ['red', 'green', 'orange'];
let myNumbers = [1, 2, 3];
let truths = [true, false, true];
class Car {
}
let care = new Car();
let point = {
    x: 1,
    y: 10,
};
const logNumber = i => {
    console.log(i);
};
logNumber(5);
let samples;
samples = 5;
const json = '{"x":10, "y":20}';
const coordinates = JSON.parse(json);
console.log(coordinates);
let words = ['red', 'green', 'blue'];
let foundWord;
for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}
let numbers = [-10, -1, 12];
let numberAboveZero = false;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}
