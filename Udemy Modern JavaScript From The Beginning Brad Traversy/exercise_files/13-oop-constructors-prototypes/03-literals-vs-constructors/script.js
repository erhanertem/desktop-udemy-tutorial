const strLit = 'Hello';
const strObj = new String('Hello');

console.log(strLit, typeof strLit);
console.log(strLit instanceof String);
console.log(strObj, typeof strObj);
console.log(strObj instanceof String);

// BOXING
console.log(strLit.toUpperCase());
console.log(strLit[0]);

//UNBOXING
strObj.valueOf();
console.log('strObj.valueOf() :', strObj.valueOf());

const num = 20;
const numObj = new Number(20);

const bool = true;
const boolObj = new Boolean(true);

const arr = [1, 2, 3, 4, 5];
const arrObj = new Array(1, 2, 3, 4, 5);
console.log(arrObj);

const obj = {};
const objObj = new Object();
