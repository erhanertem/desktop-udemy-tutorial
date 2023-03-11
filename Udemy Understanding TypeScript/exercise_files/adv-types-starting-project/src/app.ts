// Code goes here!
//--->INTERSECTION TYPES
// //->Types are okay for objects
// type Admin = {
//   name: string;
//   privileges: string[];
// };
// type Employee = {
//   name: string;
//   startDate: Date;
// };
// type ElevatedEmployee = Admin & Employee;

// //-> Interface is better fitted for classes, but objects are doable as follows:
// interface Admin {
//   name: string;
//   privileges: string[];
// }
// interface Employee {
//   name: string;
//   startDate: Date;
// }
// interface ElevatedEmployee extends Employee, Admin {}

// const e1: ElevatedEmployee = {
//   name: 'Max',
//   privileges: ['create-server'],
//   startDate: new Date(),
// };

// type Combinable = string | number;
// type Numeric = number | boolean;

// type Universal = Combinable & Numeric;

// function add(a: Combinable, b: Combinable) {
//   if (typeof a === 'string' || typeof b === 'string') {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }

//--->MORE ON TYPE GUARDS

type Admin = {
  name: string;
  privileges: string[];
};
type Employee = {
  name: string;
  startDate: Date;
};
type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name);
  // console.log('Privilages: ' + emp.privileges);
  // console.log('Start date: ' + emp.startDate);

  if ('privileges' in emp) {
    console.log('Privilages: ' + emp.privileges);
  }
  if ('startDate' in emp) {
    console.log('Start date: ' + emp.startDate);
  }
}
printEmployeeInformation({ name: 'Manu', startDate: new Date() });

class Car {
  drive() {
    console.log('Driving...');
  }
}
class Truck {
  drive() {
    console.log('Driving a truck...');
  }
  loadCargo(amount: number) {
    console.log('Loading cargo...' + amount);
  }
}
type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   // vehicle.loadCargo(1000);
//   if ('loadCargo' in vehicle) {
//     vehicle.loadCargo(1000);
//   }
// }
function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // vehicle.loadCargo(1000);
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}
useVehicle(v1);
useVehicle(v2);

//--->DISCRIMINATED UNIONS

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}
interface Horse {
  type: 'horse';
  runningSpeed: number;
}
type Animal = Bird | Horse;
function moveAnimal(animal: Animal) {
  //#1
  // console.log('Moving with speed ' + animal.flyingSpeed); // We cant check it directly as they do not share the same structure
  //#2
  // if ('flyingSpeed' in animal) {
  //   console.log('Moving with speed ' + animal.flyingSpeed);
  // } // too cumbersome to check each animal type
  //#3
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
  }
  console.log('Moving at speed ' + speed);
}

moveAnimal({ type: 'bird', flyingSpeed: 10 });

// const paragraph = document.querySelector('p');
const paragraph = document.getElementById('message-output');

//--->TYPE CASTING
// #1 - clashes with jsx syntax for react projects where <> have very different use case.
const userInputEl_1 = <HTMLInputElement>document.getElementById('user-input');
// #2 - In order to overcome jsx syntax clash, TS provides a second alternate syntax for type casting
const userInputEl_2 = document.getElementById(
  'user-input'
)! as HTMLInputElement;
userInputEl_2.value = 'Hi there!';
//#3 - type guard
const userInputEl_3 = document.getElementById('user-input');
if (userInputEl_3) {
  (userInputEl_3 as HTMLInputElement).value = 'Hi there!';
}

//--->INDEXING @ INTERFACE AND TYPES
interface ErrorContainer1 {
  // {email: 'Not a valid email', username:'Must start with a character!'}
  [prop: string | number]: string; //Prop defines the type for the key entry field, and the outher type defines what input it could take - its like cuztomizing the way fields named and the inputs it could take
  // [prop: number]: string;
  // id: string; //Indexing allows this as it fits its configuration
  // name: number; //Indexing doesnt allow number
}
const errorBag1: ErrorContainer1 = {
  1: 'Not a valid email!', //if prop set to string, its a legal key name as it could be coverted
  fame: 'You are buzzed!', //if prop set to number , illegal key name
};
type ErrorContainer2 = {
  // {email: 'Not a valid email', username:'Must start with a character!'}
  [prop: number]: string; //Prop defines the type for the key entry field, and the outher type defines what input it could take - its like cuztomizing the way fields named and the inputs it could take
  // [prop: number]: string;
  // id: string; //Indexing allows this as it fits its configuration
  // name: number; //Indexing doesnt allow number
};
const errorBag2: ErrorContainer2 = {
  1: 'Not a valid email!', //if prop set to string, its a legal key name as it could be coverted
  // fame: 'You are buzzed!', //if prop set to number , illegal key name
};

//---> FUNCTION OVERLOADS
type Combinable = string | number;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}
const result1 = add(1, 5);
// const result2 = add('Max', 'Sch warz') as string; //we can use type casting to make split method work
const result2 = add('Max', 'Sch warz'); //we can use type casting to make split method work
const result3 = result2.split(' ');
const result4 = add('Max', 1); //we can use type casting to make split method work
console.log(result1, result2, result3);

//---> OPTIONAL CHAINING
interface JobData {
  title: string;
  description: string;
}
interface FetchUserData {
  id: string;
  name: string;
  job?: JobData;
}

const fetchUserData: FetchUserData = {
  id: 'ul',
  name: 'Max',
  // job: { title: 'CEO', description: 'My own company' }
};
// console.log(fetchUserData.job && fetchUserData.job.title); //Pure JS way
console.log(fetchUserData?.job?.title);

//---> NULLISH COALESCING
// const userInput = null;
const userInput = '';
// const userInput = undefined;
// const userInput = 0;
// const storedData = userInput || 'DEFAULT';
const storedData = userInput ?? 'DEFAULT';
console.log('🦺', storedData);
