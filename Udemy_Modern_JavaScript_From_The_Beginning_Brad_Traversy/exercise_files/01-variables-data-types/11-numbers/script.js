let x;

const num = 500.456789;
// const num = new Number(5);
// console.log(num, typeof num);

x = num.toString();
x = num.toFixed(2);
x = num.toFixed(0).toString().length;
x = num.toPrecision(5);
x = num.toExponential(2);

x = num.toLocaleString('ar-EG');
x = num.toLocaleString('tr-TR');
x = num.toLocaleString('en-US');

x = num.__proto__;
x = num.valueOf();

x = Number.MAX_VALUE;
x = Number.MIN_VALUE;
console.log(x, typeof x);
