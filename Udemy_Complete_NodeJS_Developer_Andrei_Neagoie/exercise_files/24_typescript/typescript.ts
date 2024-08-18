// deno-lint-ignore-file

function sum(a: number, b: number) {
  return a + b;
}

sum(4, 5);

// boolean
let isCool: boolean = true;

// number
let age: number = 56;

// string
let eyeColor: string = "brown";
let favQuote: string = `I'm old, I'm only ${age}`;

// Array
let pets: string[] = ["cat", "dog", "dino"];
let pets2: Array<string> = ["lion", "lizzard", "leopard"];

// Object
let wizard: object = {
  a: "John",
};

// null and undefined
let meh: undefined = undefined;
let noo: null = null;

// Tuple
let basket: [string, number];
basket = ["basketball", 5];
// basket = [5, "basketball"];

// Enum
enum Size {
  Small = 1,
  Medium = 2,
  Large = 3,
}
let sizeName: string = Size[2];
console.log(sizeName);
let sizeNumber: number = Size.Small;
console.log(sizeNumber);

// Any - !!!!!! BE CAREFUL
let whatever: any = "ahghfhhdhd noooo";
whatever = true;
whatever = basket;

// void
let sing = (): void => {
  console.log("LA LA LA LA");
};
let sing2 = (): string => {
  console.log("LA LA LA LA");
  return "LALA";
};

// never
let error = (): never => {
  throw Error("oopppss");
};

// Interface
// TYPE ALIAS VERSION OF THE INTERFACE
type _RobotArmy = {
  count: number;
  type: string;
  magic: string;
};
// INTERFACE ALIAS
interface RobotArmy {
  count: number;
  type: string;
  magic: string;
}
let fightRobotArmy1 = (robots: RobotArmy) => {
  console.log("FIGHT!");
};
// IN-PLACE NON-INTERFACE SYNTAX
let fightRobotArmy2 = (
  robots: { count: number; type: string; magic: string },
) => {
  console.log("FIGHT!");
};

// TYPE ASSERTION

interface CatArmy {
  count: number;
  type: string;
  magic?: string;
}

let dog = {} as CatArmy;
dog.count;

let cat: CatArmy = { count: 2, type: "Slender" };

// Function
let fightRobotArmy3 = (robots: RobotArmy): void => {
  console.log("FIGHT");
};
let fightRobotArmy4 = (
  robots: { count: number; type: string; magic: string },
): number => {
  console.log("FIGHT!");
  return 5;
};

// Class
class Animal {
  sing: string;
  // private sing: string;
  // public sing: string;
  constructor(sound: string) {
    this.sing = sound;
  }

  greet() {
    return `Hello ${this.sing}`;
  }
}

let lion = new Animal("Roooaaarrr!");
console.log(
  lion.greet(),
);
console.log(
  lion.sing,
);

// Union
let confused: string | number | boolean = "hello";
// let confused: string | number = 5;
// let confused: string | number = true;

// Inferred type
let x = 4;
// x = "hello";
