// Create a new string called "myNewString" that holds the value of "Developer", using the value from "myString"
const myString = 'developer';

const myNewString = myString.charAt(0).toUpperCase().concat(myString.slice(1));
console.log(myNewString);
