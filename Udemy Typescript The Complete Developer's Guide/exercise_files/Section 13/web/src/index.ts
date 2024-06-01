// import { User } from './models/User';
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

// const user = new User({ id: 1, name: 'newer name', age: 1234567890 });
// user.on('save', () => {
// 	console.log(user);
// });
// user.save();

// const user = User.buildUser({ id: 2 });
// user.on('change', () => {
// 	console.log(user);
// });
// user.fetch();

// const collection = User.buildUserCollection();
// collection.on('change', () => {
// 	console.log(collection);
// });
// collection.fetch();

// import { User } from './models/User';
// import { UserForm } from './views/UserForm';

// const user = User.buildUser({ name: 'NAME', age: 20 });
// const root = document.getElementById('root');
// if (root) {
// 	const useForm = new UserForm(root, user);
// 	useForm.render();
// } else {
// 	throw new Error('Root element not found');
// }

// import { UserEdit } from './views/UserEdit';
// import { User } from './models/User';

// const user = User.buildUser({ name: 'NAME', age: 20 });
// const root = document.getElementById('root');
// if (root) {
// 	const userEdit = new UserEdit(root, user);
// 	userEdit.render();
// 	console.log(userEdit);
// } else {
// 	throw new Error('Root element not found');
// }

import { UserList } from './views/UserList';
import { Collection } from './models/Collection';
import { User, UserProps } from './models/User';

// Fetch GET the collection
const users = new Collection(
	'http://localhost:3000/users',
	(json: UserProps) => {
		return User.buildUser(json);
	},
);
console.log(users);
// Upon change triggered,
users.on('change', () => {
	// get hold of root
	const root = document.getElementById('root');
	// and there create Userlist with what we have received from fetch GET
	if (root) {
		new UserList(root, users).render();
	}
});

users.fetch();
