"use strict";
// > Generics @ classes
var ArrayOfNumbers = /** @class */ (function () {
    function ArrayOfNumbers(collection) {
        this.collection = collection;
    }
    ArrayOfNumbers.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfNumbers;
}());
var ArrayOfStrings = /** @class */ (function () {
    function ArrayOfStrings(collection) {
        this.collection = collection;
    }
    ArrayOfStrings.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfStrings;
}());
var ArrayOfAnything = /** @class */ (function () {
    function ArrayOfAnything(collection) {
        this.collection = collection;
    }
    ArrayOfAnything.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfAnything;
}());
new ArrayOfAnything(['a', 'b', 'c']); //Annotated generics
var arr = new ArrayOfAnything(['a', 'b', 'c']); //TS inference
// > Generics @ functions
function printStrings(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
function printNumbers(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
function printAnything(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
printAnything(['a', 'b', 'c']); //Annotated generics
printAnything(['a', 'b', 'c']); //TS inference
// > Generic Contraints
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.print = function () {
        console.log("I'm a car");
    };
    return Car;
}());
var House = /** @class */ (function () {
    function House() {
    }
    House.prototype.print = function () {
        console.log("I'm a house");
    };
    return House;
}());
function printHousesOrCars(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i].print();
    }
}
printHousesOrCars([new House(), new Car()]);
