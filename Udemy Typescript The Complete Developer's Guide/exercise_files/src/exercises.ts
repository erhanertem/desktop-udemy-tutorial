// //LESSON 1 - GETTING STARTED WITH TYPESCRIPT
// import axios from 'axios';

// const url = 'https://jsonplaceholder.typicode.com/todos/1';

// interface ToDo {
//   id: number;
//   title: string;
//   completed: boolean;
// }

// axios.get(url).then(res => {
//   // const { id, title, completed } = res.data as ToDo;
//   const { id, title, completed }: ToDo = res.data;
//   logToDo(id, title, completed);
// });

// const logToDo = (id: number, title: string, completed: boolean) => {
//   console.log(`
//   The Todo with ID: ${id}
//   Has a title of  : ${title}
//   Is it finished  ? ${completed}
//   `);
// };

// //LESSON 2 - WHAT'S A TYPE SYSTEM
// const today = new Date();
// today.getMonth();
// // today.sakskdskds();

// const person = {
//   age: 20,
// };
// // person.akskjdkds;

// class Color {}
// const red_ = new Color();
// // red_.sksksk;

// //LESSON 3 - TYPE ANNOTATIONS

// // Basic Data Type Annotation
// let apples: number = 5; //typed
// let pineapples = 5; //inferred
// // const apples_: number = true;
// let apples_: number;
// // apples_ = 'Erhan';
// let speed: string = 'fast';
// // let speed_: string = 10.02;
// let nothingMuch: null = null;
// // let nothingMuch_: null = 0;
// let notKnown: undefined = undefined;

// // Built-in JS object Annonation
// let now: Date = new Date();

// // Array Annotation
// let colors: string[] = ['red', 'green', 'orange'];
// let myNumbers: number[] = [1, 2, 3];
// let truths: boolean[] = [true, false, true];

// // Classe Annotation
// class Car {}
// let care: Car = new Car();

// //Object Literals Annonation
// let point: { x: number; y: number } = {
//   // x: 'Er',
//   x: 1,
//   // a: 10,
//   y: 10,
// };

// //Arrow Function Annonation
// const logNumber: (i: number) => void = i => {
//   console.log(i);
// };
// logNumber(5);
// // logNumber('Ernie');

// //Inference
// let samples;
// samples = 5; //any - no type inference

// //When to use annotations
// //1.Function that returns the 'any' type
// const json = '{"x":10, "y":20}';
// const coordinates = JSON.parse(json);
// console.log(coordinates);
// //2.When we declare a variable on one line and intialize it later
// let words = ['red', 'green', 'blue'];
// let foundWord: boolean;

// for (let i = 0; i < words.length; i++) {
//   if (words[i] === 'green') {
//     foundWord = true;
//   }
// }
// //3.Variable whose type cannot be inferred correctly
// let numbers = [-10, -1, 12];
// let numberAboveZero: boolean | number = false;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 0) {
//     numberAboveZero = numbers[i];
//   }
// }

// //LESSON 4 - ANNOTATIONS WITH FUNCTIONS AND OBJECTS
// const add = (a: number, b: number): number => {
//   return a + b;
//   // return 12;
//   // return 'Erhan';
// };

// // const subtract = (a: number, b: number) => {
// //   a - b;
// // };
// const subtract = (a: number, b: number): number => {
//   return a - b;
// };
// function divide(a: number, b: number): number {
//   return a / b;
// }
// const multiply = function (a: number, b: number): number {
//   return a * b;
// };

// const logger = (message: string): void => {
//   console.log(message);
//   // return 'Erhan';
// };

// const throwErro = (msg: string): never => {
//   throw new Error(msg);
// };

// const todaysWeather = {
//   date: new Date(),
//   weather: 'sunny',
// };
// // const logWeather = (forecast: { date: Date; weather: string }): void => {
// //   console.log(forecast.date);
// //   console.log(forecast.weather);
// // };
// //ES2015 - destructured object type annotations
// const logWeather = ({ date, weather }: { date: Date; weather: string }) => {
//   console.log(date);
//   console.log(weather);
// };

// logWeather(todaysWeather);

// const profile = {
//   name_: 'alex',
//   age: 20,
//   coords: {
//     lat: 0,
//     lng: 15,
//   },
//   setAge(age: number): void {
//     this.age = age;
//   },
// };
// const { age, name_ }: { age: number; name_: string } = profile;
// const {
//   coords: { lat, lng },
// }: { coords: { lat: number; lng: number } } = profile;

// //LESSON 5 - MASTERING TYPED ARRAYS
// const carMakers_: string[] = []; // typed arr
// const carMakers = ['ford', 'toyota', 'chevy']; //inferred arr
// const dates = [new Date(), new Date()]; //inferred arr

// const carsByMake_: string[][] = []; //typed cascaded arr
// const carsByMake = [['f150'], ['corolla'], ['camero']]; //inferred cascaded arr

// //Help with inference when extracting values
// const car = carMakers[0]; //inferred
// console.log('🚀 | file: exercises.ts:180 | car:', car);
// const myCar = carMakers.pop(); //inferred
// console.log('🚀 | file: exercises.ts:182 | myCar:', myCar);

// //Prevent incompatible values
// // carMakers.push(100);

// //Help with 'map'
// carMakers.map((car: string): string => {
//   return car.toUpperCase();
// });

// //Flexible types
// const importantDates: (Date | string)[] = [new Date()];
// importantDates.push('2030-10-10');
// importantDates.push(new Date());

// //LESSON 6 - TUPLES IN TYPESCRIPT
// const drink = {
//   color: 'brown',
//   carbonated: true,
//   sugar: 40,
// };
// const pepsi: [string, boolean, number] = ['brown', true, 40];
// // pepsi[0] = 40;
// const sprite: Drink = ['clear', false, 0];

// type Drink = [string, boolean, number];
// const pepsi_: Drink = ['brown', true, 40];

// const carSpecs: [number, number] = [400, 3354];

// const carStats = {
//   horsePower: 400,
//   weight: 3354,
// };

// //LESSON 7 - INTERFACES

// interface CarProps {
//   // name: string;
//   // year: Date;
//   // broken: boolean;
//   summary(): string;
// }

// const oldCivic = {
//   name: 'civic',
//   year: new Date(),
//   broken: true,
//   summary() {
//     return `Name of the car is ${this.name}, and the weather is not good for a test-drive`;
//   },
// };

// const drink = {
//   color: 'brown',
//   carbonated: true,
//   sugar: 40,
//   summary() {
//     return `My drink has ${this.sugar} grams of sugar`;
//   },
// };

// // const printVehicle = (vehicle: {
// //   name: string;
// //   year: number;
// //   broken: boolean;
// // }): void => {
// //   console.log(`Name: ${vehicle.name}`);
// //   console.log(`Year: ${vehicle.year}`);
// //   console.log(`Broken? ${vehicle.broken}`);
// // };

// const printVehicle = (vehicle: CarProps): void => {
//   // console.log(`Name: ${vehicle.name}`);
//   // console.log(`Year: ${vehicle.year}`);
//   // console.log(`Broken? ${vehicle.broken}`);
//   console.log(`Summary: ${vehicle.summary()}`);
// };

// printVehicle(oldCivic);
// printVehicle(drink);

//LESSON 8 - BUILDING FUNCTIONALITY WITH CLASSES
class Vehicle {
  // private drive(): void {
  //   console.log('ChuggaChugga Hugo Guwie');
  // }
  // color;
  constructor(public color: string) {
    // this.color = color;
  }

  protected honk(): void {
    console.log('beep!!');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('Vroomm!');
  }
  public startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);
const car = new Car(8, 'red');
// vehicle.drive();
// vehicle.honk();
// car.drive();
// car.honk();
car.startDrivingProcess();

//LESSON 9 - DESIGN PATTERNS WITH TYPESCRIPT
