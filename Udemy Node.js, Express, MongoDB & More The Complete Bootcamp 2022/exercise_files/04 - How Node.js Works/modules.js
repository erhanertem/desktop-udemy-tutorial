//LESSON 39 Requiring Modules in Practice

// console.log(arguments);
// console.log(require("module").wrapper); //A template for module wrapping

//--->IMPORT FOR MODULE.EXPORTS(similar to ES6 default exports)
const C = require("./test-module-1"); //we have imported our class @ test-module-1.js
const calc1 = new C(); //from this class we create a new instance.
console.log(calc1.add(2, 5));

//--->IMPORT FOR EXPORTS(similar to ES6 named exports)
const calc2 = require("./test-module-2"); //we have imported multiple functions @ test-module-2.js
console.log(calc2.multiply(2, 5));

//NOTE: calc2 is an object that includes all the functions impiorted. So we can use destructiring to name each function individually here.
const { add, multiply, divide } = require("./test-module-2"); //we have imported multiple functions @ test-module-2.js
console.log(multiply(2, 5));

//--->CACHING - DIRECT CALLING THE MODULE
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();
