import { capitalizeWords as cW, mM } from './modules/utils.js';
import Person from './modules/Person.js';

console.log(cW('hello world'));
console.log(mM(100));

const person = new Person('Mark', 29);
person.greet();
