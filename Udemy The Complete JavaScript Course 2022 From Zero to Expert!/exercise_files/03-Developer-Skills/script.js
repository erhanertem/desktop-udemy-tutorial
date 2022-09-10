// Remember, we're gonna use strict mode in all scripts now!
"use strict";

//LESSON 59 USING GOOGLE, STACKOVERFLOW AND MDN

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (temps) {
//   let minValue = temps[0];
//   let maxValue = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     console.log(i, temps[i], minValue, maxValue);
//     if (typeof temps[i] == 'number') {
//       if (temps[i] >= maxValue) {
//         maxValue = temps[i]; //maxvalue assignment
//       }
//       if (temps[i] <= minValue) {
//         minValue = temps[i]; //minvalue assigment
//       }
//     }
//   }
//   return [maxValue - minValue]; //amplititude - delta min-max
// };

// console.log(calcTempAmplitude(temperatures));

//LESSON 61 DEBUGGING WITH CONSOLE AND BREAKPOINTS

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celcius',
//     value: prompt('Degrees celcius'),
//   };
//   // console.table(measurement);

//   // console.log(measurement.value);
//   // console.log(typeof measurement.value);

//   // debugger;
//   const kelvin = Number(measurement.value) + 273;
//   return kelvin;
// };

// console.log(measureKelvin());

//CODING CHALLENGE #1
// /*
// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."
// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!
// Test data:
// § Data 1: [17, 21, 23]
// § Data 2: [12, 5, -5, 0, 4]
// GOOD LUCK 😀
// */
// const data1 = [17, 21, 23],
//   data2 = [12, 5, -5, 0, 4];

// const printForecast = function (arr) {
//   let str = '';
//   for (let i = 0; i < arr.length; i++) {
//     str += `... ${arr[i]}ºC in ${i} days   `;
//   }
//   return str;
// };

// console.log(printForecast(data1));
// console.log(printForecast(data2));
