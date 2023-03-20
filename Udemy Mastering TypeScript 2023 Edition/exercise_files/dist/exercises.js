"use strict";
class Player {
    constructor(first, last) {
        this.first = first;
        this.last = last;
        this._score = 0;
        this.secretMethod();
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw 'Not a good score';
        }
        this._score = newScore;
    }
    secretMethod() {
        console.log(`Secret ${this.score} score`);
    }
}
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        this._score = 9999999;
    }
}
const elton = new Player('Elton', 'Steele');
elton.fullName;
console.log('🚀 | file: exercises.ts:803 | elton.fullName:', elton.fullName);
elton.score;
elton.score = 99;
console.log('🚀 | file: exercises.ts:805 | elton.score:', elton.score);
class Bike {
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log(`${this.color} ${this.brand} jacket`);
    }
}
const bike1 = new Bike('red');
const jacket1 = new Jacket('Prada', 'black');
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    greet() {
        console.log('HELLO!');
    }
}
class FullTimeEmployee extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.first = first;
        this.last = last;
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
class PartTimeEmployee extends Employee {
    constructor(first, last, hourlyRate, workedHours) {
        super(first, last);
        this.first = first;
        this.last = last;
        this.hourlyRate = hourlyRate;
        this.workedHours = workedHours;
    }
    getPay() {
        return this.workedHours * this.hourlyRate;
    }
}
const betty = new FullTimeEmployee('Betty', 'White', 95000);
betty.getPay();
console.log('🚀 | file: exercises.ts:874 | betty:', betty);
const bill = new PartTimeEmployee('Bill', 'White', 24, 1100);
bill.getPay();
console.log('🚀 | file: exercises.ts:876 | bill:', bill);
//# sourceMappingURL=exercises.js.map