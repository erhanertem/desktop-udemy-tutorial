const numbers = [1, 2, 3, 4, 5, 6];
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers);

const squaredAndDoubled = numbers.map((num) => Math.sqrt(num)).map((sqrt) => sqrt * 2);
const squaredAndDoubled2 = numbers.map((num) => Math.sqrt(num) * 2);
console.log(squaredAndDoubled);
console.log(squaredAndDoubled2);
