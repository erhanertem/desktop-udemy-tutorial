import { User } from './models/User';

// const user = new User({ id: 1 });
// user.fetch();
// user.set({ name: 'New Name' });
// user.set({ age: 1 });
// user.save();

// const user1 = new User({ name: 'new record', age: 9999 });
// user1.save();

// setTimeout(() => {
// 	console.log(user);
// }, 2000);

// const user = new User({ name: 'new record', age: 0 });
// user.events.on('change', () => {
// 	console.log('change!!');
// });
// user.events.trigger('change');

// const user = new User({ name: 'new record', age: 0 });
// user.get('name');
// console.log("user.get('name') :", user.get('name'));
// user.on('change', () => {
// 	console.log('User was changed');
// });
// user.set({ name: 'New name' });

const user = new User({ id: 1, name: 'newer name', age: 1234567890 });
user.on('save', () => {
	console.log(user);
});
user.save();
