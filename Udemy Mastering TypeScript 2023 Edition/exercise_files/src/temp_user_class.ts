//#1 - compiles to JS and inteferes with Babel transpiler
// import { Person } from './types.js';
//#2 - guaranteed not to compile any JS
// import type { Person } from './types.js';
// import { type Person } from './types.js';
//#3 - with other exports - advanced #2
import { type Person, type Color } from './types';

export default class User implements Person {
  constructor(public username: string, public email: string) {}
  logout() {
    console.log(`${this.username} LOGGED OUT!!`);
  }
}

export function userHelper(jacketColor: Color) {
  console.log(`${jacketColor} USER HELPER`);
}
