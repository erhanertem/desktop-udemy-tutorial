"use strict";
const add = (a, b) => {
    return a + b;
};
const subtract = (a, b) => {
    return a - b;
};
function divide(a, b) {
    return a / b;
}
const multiply = function (a, b) {
    return a * b;
};
const logger = (message) => {
    console.log(message);
};
const throwErro = (msg) => {
    throw new Error(msg);
};
const todaysWeather = {
    date: new Date(),
    weather: 'sunny',
};
const logWeather = ({ date, weather }) => {
    console.log(date);
    console.log(weather);
};
logWeather(todaysWeather);
const profile = {
    name_: 'alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 15,
    },
    setAge(age) {
        this.age = age;
    },
};
const { age, name_ } = profile;
const { coords: { lat, lng }, } = profile;
