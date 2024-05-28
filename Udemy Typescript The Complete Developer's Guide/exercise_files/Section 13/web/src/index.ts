import { User } from './models/User';

const user = new User({ name: 'myname', age: 20 });

user.set({ name: 'Aeron' });

user.get('name');
console.log("user.get('name') :", user.get('name'));
user.get('age');
console.log("user.get('age') :", user.get('age'));
