// > Type Inference | Explicit Type Annotation
let userName = 'Erhan';
// userName = 32;

let hostName: string;
// hostName = 23;

const API_KEY = '1111111';

// > Basic Primitive Types
let userAge = 34;
let isValid = true;
let userFirstName = 'Erhan';

// > Type Unions
let userID: string | number = 'abc1';
userID = 1234;
// userID = false;

// > Type @ Objects
// let user: object;
// user = 'Max';

// via type alias
// type User = {
// 	name: string;
// 	age: number;
// 	isAdmin: boolean;
// 	id: string | number;
// };
// let user: User;

// Via inline typing
// let user: { name: string; age: number; isAdmin: boolean; id: string | number };

// Via interface type
interface User {
	name: string;
	age: number;
	isAdmin: boolean;
	id: string | number;
}
let user: User;

user = {
	name: 'Max',
	age: 23,
	isAdmin: true,
	id: 'abc',
};

// > Type @ Arrays
// Via Generics
// let hobbies: Array<string>;

let hobbies: string[];
hobbies = ['Sports', 'Cooking', 'Reading'];
// hobbies = [1, 2, 3, 4, 5];

let certs: { name: string; age: number; certNumber: string }[];
certs = [
	{ name: 'Ernie', age: 34, certNumber: '1Asd-12310/111' },
	{ name: 'Bernie', age: 43, certNumber: '121d-19910/121' },
];

// > Type @ Functions
function add(a: number, b: number): number {
	return a + b;
}
function add_(a: number, b: number): void {
	console.log(a + b);
}

function calculate(
	a: number,
	b: number,
	calcFn: (a: number, b: number) => number,
) {
	calcFn(a, b);
}

// > Type Aliases | Custom Types @ Functions, variables, objects
type AddFn = (a: number, b: number) => number;
function calculate_(a: number, b: number, calcFn: AddFn) {
	calcFn(a, b);
}

// > Interfaces @ Objects and Classes
interface Credentials {
	password: string;
	email: string;
}

// // -> By DECLARATION MERGING, we actually sum them up - a matter of extending THE INITIAL DECLARATION.
// interface Credentials {
// 	mode: string;
// }

let creds: Credentials;
creds = { password: 'abc', email: 'e@e.com' };
class AuthCredentials implements Credentials {
	email: string;
	password: string;
	userName: string;
}
function login(credentials: Credentials) {}
login(new AuthCredentials());

// > Merging Custom Types - & Operator
type Admin = { permissions: string[] };
type AppUser = { userName: string };
type AppAdmin = Admin & AppUser;

// > Merging Interfaces - extends keyword
interface Admin_ {
	permissions: string[];
}
interface AppUser_ {
	userName: string;
}
interface AppAdmin_ extends Admin_, AppUser_ {}

// > Literal Types
let role: 'admin' | 'user' | 'editor';
role = 'admin';
role = 'user';
// role = 'colombo';

// > Type Guards
type Role = 'admin' | 'user' | 'editor';
function performAction(action: string | number, role: Role) {
	if (role === 'admin' && typeof action === 'string') {
		console.log('ADMIN');
	}
}

type _User = {
	name: string;
	age: number;
};
type _Admin = {
	name: string;
	age: number;
	permissions: string[];
};
function _login(u: _User | _Admin) {
	if ('permissions' in u) {
		console.log('✅');
	}
}

// > Generic Types
// Built-in Generic Type
let roles: Array<Role>;
roles = ['admin', 'editor'];

// Custom Generic Type
type DataStorage<T> = {
	storage: T[];
	add: (data: T) => T[];
};
const textStorage: DataStorage<string> = {
	storage: ['Ali'],
	add(data) {
		return [...this.storage, data];
	},
};
