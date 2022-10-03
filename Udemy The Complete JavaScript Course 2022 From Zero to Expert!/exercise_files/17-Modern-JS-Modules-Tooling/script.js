//LESSON 272 Exporting and Importing in ES6 Modules

//IMPORTING MODULE
//NOTE: WE DID NOT USE THE STRICT MODE HERE AS ALL MODULES ARE I STRICT MODE BY DEFAULT!
// import './shoppingCart.js'; //first this is parsed then the rest of the local code!! ImportExport statememnts are hoisted.
// //::Named imports - Multiple
// //-->#1 - IMPORT PARTIALLY
// import {
//   addToCart,
//   shippingCost,
//   totalPrice as price, //NOTE: we can rename the variable exported it got exported
//   tq,
// } from './shoppingCart.js';
// console.log('Importing Module');
// // #1
// // console.log(shippingCost); //-->its private to the shoppingCart.js module

// addToCart('bread', 5);
// console.log(price, tq, shippingCost);

// //-->#2 - IMPORT ALL AT ONCE
// import * as GemAll from './shoppingCart.js'; //NOTE: IMPORT ALL from the mentioned file as an ONBJECT called ShoppingCart
// console.log('Importing Module');
// //#2
// GemAll.addToCart('bread', 5);
// console.log(GemAll.totalPrice);

// //::Default exports
// import add, { cart } from './shoppingCart.js'; //add might any name we want for the default export item
// console.log('Importing Module');
// add('pizza', 2);
// add('bread', 5);
// add('apple', 1);
// console.log(cart); //VERY IMPORTANT! cart array is a LIVE CONNECTION, as the above function has mutated this array reference on the export module.

//LESSON 273 Top-Level await (ES2022)

// // // NOTE: TOP LEVEL AWAIT ONLY WORKS IN MODULES!!!

// // // async function(xxxx) {
// // //   ...
// // // } // NOTE: normally we had to wrap the await code inside a async fucntion in a non-module js file. TOP LEVEL AWAIT IS ONLY POSSIBLE IN MODULE JS FILES. HOWEVER TOP LEVEL AWAIT NOW BLOCKS THE EXECUTION OF THE FOLLOWING CODE AS IT BEAACAME A SYNCRONOUS CODE.
// // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
// // const data = await response.json();
// // console.log(data);
// // console.log('Something'); //THIS IS LOGGED AFTER THE FACT OF AWAIT ABOVE EVEN AT SLOW 3G...WHICH PROVES THAT TOP LEVEL AWAIT EXECUTES IN SEQUENTIAL ORDER WHICH POSE A PROBLEM IF FETCHING TAKES TOO LONG TIME.

// const getLastPost = async function () {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await response.json();
//   // console.log(data);
//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = getLastPost();
// console.log(lastPost); //returning promise would be logged immediately before item of the promise is returned
// //THEREFORE:
// const lastPost2 = await getLastPost(); //TOP LEVEL AWAIT SOLUTION FOR RETURNING THE PROMISE
// // lastPost.then(last => console.log(last)); //NOT A CLEAN SOLUTIUON
// console.log(lastPost2);

//LESSON 274 The Module Pattern

// //IFFY STATEMENT
// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart`);
//   };
//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} ordered to supplier`);
//   };
//   //ALL ELEMENTS ARE PRIVATE TO IFFY FUNCTION BLOCK
//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   }; //WE DEFINE AN OBJECT TO IMPORT ALL THE SELECTED ELEMENTS OUT OF THE SCOPE THE IFFY FUNCTION
// })();

// ShoppingCart2.addToCart('apple', 4);
// ShoppingCart2.addToCart('pizza', 2);

// console.log(ShoppingCart2);
// console.log(ShoppingCart2.shippingCost); //we cant access it, it isstill private

//LESSON 275 COMMONJS MODULES (NODEJS)

// //Export in Node.js
// export.addToCart = function (product, quantity) {
//   cart.push({ product, quantity });
// }
// //Import in Node.js
// const {addToCart } = require("./shoppingCart.js")

//LESSON 277 INTRODUCTION TO NPM
// // npm i lodash-es --> install lodash-es module
// // dial into the node package folder and look into a specific clonedeep function and import
// import CloneDeep from '../../node_modules/lodash-es/cloneDeep.js';

// const state = {
//   cart: [
//     { product: 'bread', quantity: 5 },
//     { product: 'pizza', quantity: 15 },
//   ],
//   user: { loggedIn: true },
// };

// const stateClone = Object.assign({}, state);
// const stateDeepClone = CloneDeep(state);

// state.user.loggedIn = false;
// console.log(stateClone);
// console.log(stateDeepClone);

//LESSON 278 Bundling With Parcel and NPM Scripts

/*
npm i parcel --save-dev //--> installs parcel for bundling
we include as a scripot in the package.json file
then we run npm run start in bash console to run the script
the parcel built is foun under the dist folder
*/

//LESSON 279 Configuring Babel and Polyfilling
// //npm i core-js //--> to polyfill backward compatible version of our newer code
// import 'core-js/stable'; //should be included in our code
// //npm i regenerator-runtime //-->polifiling async functions for backward compatibility
// import 'regenerator-runtime/runtime';
