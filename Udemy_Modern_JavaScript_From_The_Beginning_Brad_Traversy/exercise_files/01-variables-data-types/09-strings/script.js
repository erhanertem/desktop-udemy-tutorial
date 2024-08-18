let x;
const name = 'John';
const age = 30;
x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';

// Template Literals
x = `Hello, my name is ${name} and I am ${age} years old`;

// String properties and methods
// const s = new String('Hello World');
const s = 'Hello World';
x = typeof s;
x = s.length;

// Access value by key
x = s[1];
x = s.__proto__;
x = s.toUpperCase();
x = s.toLowerCase();
x = s.charAt(0);
x = s.indexOf('d');
x = s.substring(0, 4);
x = s.substring(7);
// Slice can receive negative values
x = s.slice(0, 5);
x = s.slice(-5);

z = '        Hellloo     World   ';
x = z;
x = z.trim();

x = s.replace('World', 'John');
x = s.includes('Helli');
x = s.valueOf();
x = s.split(' ');
x = s.split('');

console.log(x);
