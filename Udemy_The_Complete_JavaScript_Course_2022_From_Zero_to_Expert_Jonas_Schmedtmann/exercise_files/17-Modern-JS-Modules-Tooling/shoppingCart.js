//LESSON 272 Exporting and Importing in ES6 Modules

//EXPORTING MODULE
console.log('Exporting Module');

//BLOCKING CODE
console.log('Start fetching users');
await fetch('https://jsonplaceholder.typicode.com/posts'); //NOTE: blocks the execution of the immporting module - top level await use case scenario
console.log('Finish fetching users');

//the variables below are private
const shippingCost = 10;
export const cart = [];

//::Named exports - Single
// //-->Named exports should be top level code
// if (true) {
//   export const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart`);
//   };
// } //wont work - export is not a top level code in this case
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

//::Named exports - Multiple
const totalPrice = 237;
const totalQuantity = 23;
export { totalPrice, shippingCost, totalQuantity as tq }; //NOTE: we can rename variable before it gets exported!!!

//::Default exports - ONLY ONE DEFAULT PER MODULE!!
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
