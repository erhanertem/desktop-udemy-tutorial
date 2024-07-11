let x;

const arr = [35, 55, 95, 20, 15];

arr.push(100);
arr.unshift(99);
arr.pop();
arr.shift();

arr.reverse();
console.log(arr.__proto__);

x = arr.with(1, 'Ernie');
x = arr.includes(20);
x = arr.includes(200);
x = arr.indexOf(15);
x = arr.indexOf(1500);

x = arr.slice(1);
x = arr.slice(1, 4).reverse().toString().charAt(0);
// x = arr.splice(1, 4);

console.log(x);
console.log(arr);
