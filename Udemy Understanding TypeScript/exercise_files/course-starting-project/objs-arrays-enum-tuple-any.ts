const person1: object = {
  name: 'Erhan',
  age: 44,
}; //explicit
const person2: {
  name: string;
  age: number;
} = {
  name: 'Erhan',
  age: 44,
}; //explicitly specify the types of the object keys
const person3 = {
  name: 'Erhan',
  age: 44,
}; //Typescript infers the object and key types based on your entries
const person4 = {
  name: 'Erhan',
  age: 44,
  hobbies: ['Sports', 'Cooking'],
}; //Typescript infers the object and key types based on your entries
const person5 = {
  name: 'Erhan',
  age: 44,
  hobbies: ['Sports', 2],
}; //Typescript infers the object and key types based on your entries

// console.log(person4.nickname);
console.log(person4.hobbies);

let favoriteActivities1: string[];
let favoriteActivities2: (string | number)[];
let favoriteActivities3: any[];
favoriteActivities1 = ['Sports', 'Cooking'];
// favoriteActivities1 = ['Sports'];
favoriteActivities2 = ['Sports', 2];
// favoriteActivities2 = [2];

for (const hobby of person4.hobbies) {
  console.log(hobby.toUpperCase());
}
for (const item of favoriteActivities2) {
  console.log(item);
}

const person6: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; //tuple construct
} = {
  name: 'Erhan',
  age: 44,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'],
};

person6.role.push('admin');
// person6.role[1] = 10;
// person6.role = [0, 'admin', 'user'];
console.log(person6);

const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;
const person7 = {
  name: 'Erhan',
  age: 44,
  hobbies: ['Sports', 'Cooking'],
  role: ADMIN,
};
if (person7.role === ADMIN) {
  console.log('is admin');
}

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}
const person8 = {
  name: 'Erhan',
  age: 44,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
};
if (person8.role === Role.ADMIN) {
  console.log('is admin');
}
