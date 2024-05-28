import { User } from './models/User';

const user = new User({ name: 'myname', age: 20 });

// user.set({ name: 'Aeron' });

// user.get('name');
// console.log("user.get('name') :", user.get('name'));
// user.get('age');
// console.log("user.get('age') :", user.get('age'));

user.on('change', () => {
	console.log('Change #1');
});
user.on('change', () => {
	console.log('Change #2');
});
user.on('save', () => {
	console.log('Save #1');
});

user.trigger('change');
user.trigger('save');
user.trigger('save1221121');
console.log(user);
