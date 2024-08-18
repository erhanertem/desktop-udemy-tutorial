let a = false;
a = a || 10;
a ||= 10;
console.log(a);

let b = 20;
b &&= 30;
console.log(b);

let c = undefined;
c ??= 10;
console.log(c);
