//->Interface for object templating

type Person_alt = {
  name: string;
  // name: string = 'Max'; //Interfaces cant have intializers
  age: number;

  greet(phrase: string): void;
}; //Create a blueprint/template for an Object - TS - TYPE ALIAS - MORE DATA TYPES COVERED

interface Person {
  name: string;
  // name: string = 'Max'; //Interfaces cant have intializers
  age: number;

  greet(phrase: string): void;
} //Create a blueprint/template for an Object - TS - INTERFACE - STRICTLY OBJECT RELATED

let user1: Person;

user1 = {
  name: 'Max',
  age: 30,
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  },
};
user1.greet(`Hi there - I'am `);

//->Interface for class templating
interface Named {
  readonly name: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

// interface Greetable {
//   readonly name: string;
//   greet(phrase: string): void;
// }

class Person2 implements Greetable {
  //Single templating
  readonly name: string; //readonly needs to be provided here to match greetable.
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}
// class Person2 implements Greetable, AnotherInterface {} //Multiple templating
class Person3 {
  name: string; //readonly needs to be provided here to match greetable.
  age = 30;
  constructor(n: string) {
    this.name = n;
  }
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}

//Direct use of interface initialization
let user2: Greetable;
user2 = new Person3('Max');
console.log('🎗', user2);
// user2.name = 'Max';

//Implements version initialization
const user3 = new Person2('Max');
console.log('🎊', user3);
user3.greet('My fellow: ');
// user3.name = 'Denyo';
console.log('🎊', user3);

const user4 = new Person2('Dennis');
console.log('👓', user4, user3);

type AddFn1 = (a: number, b: number) => number;
let add1: AddFn1;
add1 = (n1: number, n2: number) => {
  return n1 + n2;
};

interface AddFn2 {
  (a: number, b: number): number;
}
let add2: AddFn2;
add2 = (n1: number, n2: number) => {
  return n1 + n2;
};
