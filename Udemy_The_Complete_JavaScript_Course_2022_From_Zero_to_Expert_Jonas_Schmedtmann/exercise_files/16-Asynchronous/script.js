'use strict';

//CODING CHALLENGE #1
// /*
// In this challenge you will build a function 'whereAmI' which renders a country
// only based on GPS coordinates. For that, you will use a second API to geocode
// coordinates. So in this challenge, you’ll use an API on your own for the first time 😁
// Your tasks:
// PART 1
// 1. Create a function 'whereAmI' which takes as inputs a latitude value ('lat')
// and a longitude value ('lng') (these are GPS coordinates, examples are in test
//   data below).
//   2. Do “reverse geocoding” of the provided coordinates. Reverse geocoding means
//   to convert coordinates to a meaningful location, like a city and country name.
//   Use this API to do reverse geocoding: https://geocode.xyz/api. The AJAX call
//   will be done to a URL with this format:
//   https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and
//   promises to get the data. Do not use the 'getJSON' function we created, that
//   is cheating 😉
//   3. Once you have the data, take a look at it in the console to see all the attributes
//   that you received about the provided location. Then, using this data, log a
//   message like this to the console: “You are in Berlin, Germany”
//   4. Chain a .catch method to the end of the promise chain and log errors to the
//   console
//   5. This API allows you to make only 3 requests per second. If you reload fast, you
//   will get this error with code 403. This is an error with the request. Remember,
// fetch() does not reject the promise in this case. So create an error to reject
// the promise yourself, with a meaningful error message
// PART 2
// 6. Now it's time to use the received data to render a country. So take the relevant
// attribute from the geocoding API result, and plug it into the countries API that
// we have been using.
// 7. Render the country and catch any errors, just like we have done in the last
// lecture (you can even copy this code, no need to type the same code)
// Test data:
// § Coordinates 1: 52.508, 13.381 (Latitude, Longitude)
// § Coordinates 2: 19.037, 72.873
// § Coordinates 3: -33.933, 18.474
// */
// const errCodes = new Map([
//   ['404', 'URL Not Found'],
//   ['403', 'Exceeded request limit from the server'],
//   ['006', 'Request trottled'],
//   ['007', 'Supply a valid query'],
//   [
//     '008',
//     'Your request did not produce any results. Check your spelling and try again',
//   ],
// ]);

// function getErrCode(error) {
//   //check browser internal errors
//   return error.includes('404')
//     ? console.log(errCodes.get('404'))
//     : error.includes('403')
//     ? console.log(errCodes.get('403'))
//     : error;
// }

// //404 simulate - fetch a wrong url put 6 infront of the https://
// navigator.geolocation.getCurrentPosition(
//   function (pos) {
//     const lat = pos.coords.latitude;
//     const lng = pos.coords.longitude;
//     // console.log(lat, lng);
//     // whereAmI(lat, lng);
//   },
//   function (err) {
//     console.warn(`ERROR(${err.code}): ${err.message}`);
//   },
//   {
//     enableHighAccuracy: true,
//     timeout: 5000,
//     maximumAge: 0,
//   }
// );

// function whereAmI(lat, lng) {
//   fetch(
//     `https://geocode.xyz/${lat},${lng}?json=1&auth=106367834911231e15935239x8722`
//   )
//     .then(response => {
//       console.log(response);
//       if (!response.ok) throw new Error(`(${response.status})`);
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       data.error?.code === '007'
//         ? console.log(errCodes.get('007'))
//         : data.error?.code === '006'
//         ? console.log(errCodes.get('006'))
//         : data.error?.code === '008'
//         ? console.log(errCodes.get('008'))
//         : console.log(
//             `You are located in ${data.staddress}, ${data.city}, ${data.country}.`
//           );
//     })
//     .catch(err => {
//       console.log(err.message);
//       getErrCode(err.message);
//     });
// }

// whereAmI(19.037, 72.873);

//LESSON 258 THE EVENT LOOP IN PRACTICE
// console.log('Test Start'); //call stack away #1
// setTimeout(() => {
//   console.log('0 sec timer');
// }, 0); //async callback stack #4
// Promise.resolve('Resolved promise 1').then(res => console.log(res)); //micrtotask que #3 - has priority over calllback stack
// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 1000000000; i++) {}
//   console.log(res);
// }); //VERY IMPORTANT! microtask taking longer time than callback stack task but still comes before callback stack task
// console.log('Test End'); //call stack right away #2

//LESSON 259 BUILDING A SIMPLE PROMISE

// //-->Promise constructor (includes an executor function(which takes resolve state , reject state (Error) arguments){})
// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery draw is happening 🔮');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You win 💲');
//     } else {
//       reject(new Error('You lost your money 💩'));
//     }
//   }, 3000);
// });
// lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

// //-->Promisifying setTimeout()
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };
// wait(1)
//   .then(() => {
//     console.log('1 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('2 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('3 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('4 second passed');
//     return wait(1);
//   });
//NOTE: SAME AS BELOW CODE WITH CALL-BACK HELL
// //-->CALL-BACK HELL
// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('1 second passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// //-->STATIC PROMISE METHODS
// Promise.resolve('abc').then(res => console.log(res)); //immediately resolves so we would need a then to retrieve the resolved value
// Promise.reject(new Error('Problem!')).catch(res => console.log(res)); //immediately rejects - got to be accompanied by catch as we threw error

//LESSON 260 PROMISIFYING THE GEOLOCATION API

// //-->PROMISIFY THE GEOLOCATION RETRIEVEAL
// //-->#1. PROMISE BLOCK
// const getPosition = function () {
//   return new Promise(function (resolve, reject) {});
// };
// //-->#2. GEOLOCATION RETRIEVAL ASYNC API BLOCK
// navigator.geolocation.getCurrentPosition(
//   position => {
//     console.log(position);
//     // const lat = pos.coords.latitude;
//     // const lng = pos.coords.longitude;
//     // console.log(lat, lng);
//     // whereAmI(lat, lng);
//   },
//   err => console.warn(`ERROR(${err.code}): ${err.message}`),
//   {
//     enableHighAccuracy: true,
//     timeout: 5000,
//     maximumAge: 0,
//   }
// );
// //-->#3. WE COMBINE THEM TOGETHER TO FROM A PROMISIFIED GEOLOCATION FUNCTION
// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject); //same as above code
//   });
// };
// getPosition().then(pos => console.log(pos)); //resolved position is returned as put in then method as pos argument from which we consolelogged.

// //-->REMAKE OF THE CODE CHALLANGE#4 WITH PROMISIFY

// const errCodes = new Map([
//   ['404', 'URL Not Found'],
//   ['403', 'Exceeded request limit from the server'],
//   ['006', 'Request trottled'],
//   ['007', 'Supply a valid query'],
//   [
//     '008',
//     'Your request did not produce any results. Check your spelling and try again',
//   ],
// ]);

// function getErrCode(error) {
//   //check browser internal errors
//   return error.includes('404')
//     ? console.log(errCodes.get('404'))
//     : error.includes('403')
//     ? console.log(errCodes.get('403'))
//     : error;
// }

// //404 simulate - fetch a wrong url put 6 infront of the https://
// // navigator.geolocation.getCurrentPosition(
// //   function (pos) {
// //     const lat = pos.coords.latitude;
// //     const lng = pos.coords.longitude;
// //     console.log(lat, lng);
// //     // whereAmI(lat, lng);
// //   },
// //   function (err) {
// //     console.warn(`ERROR(${err.code}): ${err.message}`);
// //   },
// //   options
// //   {
// //     enableHighAccuracy: true,
// //     timeout: 5000,
// //     maximumAge: 0,
// //   }
// // );
// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject, {
//       enableHighAccuracy: true,
//       timeout: 5000,
//       maximumAge: 0,
//     });
//   });
// }; //promisify the coordinate outputs till its resolved or rejected

// function whereAmI() {
//   getPosition().then(pos => {
//     console.log(pos.coords);
//     const { latitude: lat, longitude: lng } = pos.coords;
//     console.log(lat, lng);

//     return fetch(
//       `https://geocode.xyz/${lat},${lng}?json=1&auth=106367834911231e15935239x8722`
//     )
//       .then(response => {
//         console.log(response);
//         if (!response.ok) throw new Error(`(${response.status})`);
//         return response.json();
//       })
//       .then(data => {
//         console.log(data);
//         data.error?.code === '007'
//           ? console.log(errCodes.get('007'))
//           : data.error?.code === '006'
//           ? console.log(errCodes.get('006'))
//           : data.error?.code === '008'
//           ? console.log(errCodes.get('008'))
//           : console.log(
//               `You are located in ${data.staddress}, ${data.city}, ${data.country}.`
//             );
//       })
//       .catch(err => {
//         console.log(err.message);
//         getErrCode(err.message);
//       });
//   });
// }
// // function whereAmI(lat, lng) {
// //   fetch(
// //     `https://geocode.xyz/${lat},${lng}?json=1&auth=106367834911231e15935239x8722`
// //   )
// //     .then(response => {
// //       console.log(response);
// //       if (!response.ok) throw new Error(`(${response.status})`);
// //       return response.json();
// //     })
// //     .then(data => {
// //       console.log(data);
// //       data.error?.code === '007'
// //         ? console.log(errCodes.get('007'))
// //         : data.error?.code === '006'
// //         ? console.log(errCodes.get('006'))
// //         : data.error?.code === '008'
// //         ? console.log(errCodes.get('008'))
// //         : console.log(
// //             `You are located in ${data.staddress}, ${data.city}, ${data.country}.`
// //           );
// //     })
// //     .catch(err => {
// //       console.log(err.message);
// //       getErrCode(err.message);
// //     });
// // }
// whereAmI();
//CODING CHALLENGE #2
// /*
// For this challenge you will actually have to watch the video! Then, build the image
// loading functionality that I just showed you on the screen.
// Your tasks:
// Tasks are not super-descriptive this time, so that you can figure out some stuff by
// yourself. Pretend you're working on your own 😉
// PART 1
// 1. Create a function 'createImage' which receives 'imgPath' as an input.
// This function returns a promise which creates a new image (use
// document.createElement('img')) and sets the .src attribute to the
// provided image path
// 2. When the image is done loading, append it to the DOM element with the
// 'images' class, and resolve the promise. The fulfilled value should be the
// image element itself. In case there is an error loading the image (listen for
// the'error' event), reject the promise
// 3. If this part is too tricky for you, just watch the first part of the solution
// PART 2
// 4. Consume the promise using .then and also add an error handler
// 5. After the image has loaded, pause execution for 2 seconds using the 'wait'
// function we created earlier
// 6. After the 2 seconds have passed, hide the current image (set display CSS
// property to 'none'), and load a second image (Hint: Use the image element
// returned by the 'createImage' promise to hide the current image. You will
// need a global variable for that 😉)
// 7. After the second image has loaded, pause execution for 2 seconds again
// 8. After the 2 seconds have passed, hide the current image
// Test data: Images in the img folder. Test the error handler by passing a wrong
// image path. Set the network speed to “Fast 3G” in the dev tools Network tab,
// otherwise images load too fast
// GOOD LUCK 😀
// */
// //-->#1
// const wait = function (seconds) {
//   return new Promise(function (resolve, reject) {
//     // setTimeout(() => resolve(), seconds * 1000);
//     setTimeout(resolve, seconds * 1000);
//   });
// };
// const imgContainer = document.querySelector('.images');
// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;
//     img.addEventListener('load', function () {
//       imgContainer.append(img);
//       resolve(img);
//     });
//     img.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });
//   });
// };
// //-->#2
// let currentImg;
// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-3.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 3 loaded');
//   })
//   .catch(err => console.log(err));

//LESSON 262 CONSUMING PROMISES WITH Async/Await

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = async function () {
//   const position = await getPosition();
//   const { latitude: lat, longitude: lng } = position.coords;
//   const resGeo = await fetch(
//     `https://geocode.xyz/${lat},${lng}?json=1&auth=106367834911231e15935239x8722`
//   );
//   const dataGeo = await resGeo.json();

//   //-->#1 older way
//   // fetch(`https://restcountries.com/v3.1/name/${country}`).then(result=>console.log( result );)
//   //-->#2 newer way
//   const result = await fetch(
//     `https://restcountries.com/v3.1/name/${dataGeo.country}`
//   );
//   const data = await result.json();
//   console.log(result);
//   console.log(data);
//   console.log('INNERTXT');
//   // renderCountry(data[0])
// };
// whereAmI();
// console.log('FIRST');

//LESSON 263 ERROR HANDLING WITH TRY....CATCH

// try {
//   let y = 1;
//   const x = 2;
//   x = 3;
// } catch (err) {
//   console.log('💩ERR: ' + err.message);
// }

// //-->A BETTER WAY OF CONSUMING PROMISES WITH TRY...CATCH FOR HANDLING ERRORS

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = async function () {
//   try {
//     const position = await getPosition();
//     const { latitude: lat, longitude: lng } = position.coords;
//     const resGeo = await fetch(
//       `https://geocode.xyz/${lat},${lng}?json=1&auth=106367834911231e15935239x8722`
//     );
//     if (!resGeo.ok) throw new Error('Problem getting location data'); //NOTE: for fetches we throw manual error as we cant catch to error if problem occurs on server side

//     const dataGeo = await resGeo.json();
//     console.log('DataGeo:', dataGeo);

//     //-->#1 older way
//     // fetch(`https://restcountries.com/v3.1/name/${country}`).then(result=>console.log( result );)
//     //-->#2 newer way
//     const result = await fetch(
//       `https://restcountries.com/v3.1/name/${dataGeo.country}`
//     );
//     if (!resGeo.ok) throw new Error('Problem getting country'); //NOTE: for fetches we throw manual error as we cant catch to error if problem occurs on server side

//     const data = await result.json();
//     console.log(result);
//     console.log(data);
//     console.log('INNERTXT');
//     // renderCountry(data[0])
//   } catch (err) {
//     console.log(`${err} 💩`);
//     renderError(`Something went wrong 💩 ${err.message}`);
//   }
// };
// whereAmI();

// console.log('FIRST');

//LESSON 264 RETURNING VALUES FROM ASYNC FUNCTIONS

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');
// function getPosition() {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// }
// //FUNCTION RENDER ERROR
// function renderError(msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   countriesContainer.style.opacity = 1;
// }
// //FUNCTION RENDER COUNTRY CARD
// function renderCountry(data, className = '') {
//   //second argument by definition @ the function provides an extra class name to diffrentiate the country from its neightbours. By default its nothing for the original country
//   //-->#2.Prep HTML fragment based on the information received
//   const html = `
//     <article class="country ${className}">
//       <img class="country__img" src="${data.flags.svg}" />
//       <div class="country__data">
//         <h3 class="country__name">${data.name.common}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           +data.population / 1_000_000
//         ).toFixed(1)} M people</p>
//         <p class="country__row"><span>🗣️</span>${
//           Object.values(data.languages)[0]
//         }</p>
//         <p class="country__row"><span>💰</span>${
//           Object.values(data.currencies)[0].name
//         }</p>
//       </div>
//     </article>
//     `;
//   //-->#3.Insert the HTML fragment into HTML body
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// }

// const whereAmI = async function () {
//   try {
//     const position = await getPosition();
//     const { latitude: lat, longitude: lng } = position.coords;
//     // console.log(lat, lng);
//     //::GET REVERSE GEOCODING
//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?json=1`);
//     if (!resGeo.ok) throw new Error('Problem getting location data'); //NOTE: for fetches we throw manual error as we cant catch to error if problem occurs on server side
//     const dataGeo = await resGeo.json();
//     // console.log('DataGeo:', dataGeo);
//     //::DISPLAY COUNTRY DATA
//     //-->#1 older way
//     // fetch(`https://restcountries.com/v3.1/name/${country}`).then(result=>console.log( result );)
//     //-->#2 newer way
//     const result = await fetch(
//       `https://restcountries.com/v3.1/name/${dataGeo.country}`
//     );
//     if (!resGeo.ok) throw new Error('Problem getting country'); //NOTE: for fetches we throw manual error as we cant catch to error if problem occurs on server side
//     const data = await result.json();
//     console.log(data);
//     renderCountry(data[0]);
//     return `You are in ${dataGeo.city}, ${dataGeo.country}`;
//   } catch (err) {
//     console.log(`1: Inside async ${err} 💩`);
//     renderError(`1: Inside async Something went wrong 💩 ${err.message}`);
//     //NOTE: NOMATTER IF ERR THROWN, ASYNC RETURNS THE PROMISE. IN ORDER TO REJECT PROMISE RETURNED FROM ASYNC FUNCTION WE HAVE TO THROW ERR TO OUTSIDE WHERE ITS RETURNED AS CATCH IT THERE.
//     throw err; //VERY IMPORTANT: BY CATCHING THE ERROR BORNE OF LOCATION 1, WE REJECT THE RETURN OF PROMISE WITH UNBDEFINED VALUE
//   }
// };
// btn.addEventListener('click', trybatch2);

// //--> ITS NOT SO GOOD TO MIX ASYNC AWAIT FUNCTION ABOVE WITH PROMISE CODE BELOW.
// function trybatch() {
//   console.log('1: Will get location');
//   // const city = whereAmI();
//   // console.log(city);
//   whereAmI()
//     .then(city => console.log(`2: ${city}`))
//     .catch(err => console.error(`2: ${err.message}`))
//     .finally(() => console.log('3: Finished getting location'));
//   //VERY IMPORTANT: BY CATCHING THE ERROR BORNE OF LOCATION 1, WE REJECT THE RETURN OF PROMISE WITH UNBDEFINED VALUE
//   // console.log('3: Finished getting location'); //VERY IMPORTANT in order to make sure action 3 occurs after async function, we can encapsulate it by finally
// }
// //-->IN ORDER TO CONTINUE ASYNC AWAIT CODE PATTERN WE MAY MAKE USE OF IFFY ASYNC(if not using addeventlistener bound to btn) OR ASYNC FUNCTION (if using addeventlistener bound to btn)
// async function trybatch2() {
//   try {
//     const city = await whereAmI();
//     console.log(`2: ${city}`);
//   } catch (err) {
//     console.log(`2: ${err.message}`);
//   }
//   console.log('3: Finished getting location');
// }

//LESSON 265 RUNNING PROMISES IN PARALLEL

// //FUNCTION
// function getJSON(url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
//     return response.json();
//   });
// }
// const get3Countries = async function (c1, c2, c3) {
//   try {
//     //::ONE AFTER ANOTHER LOADING IN SEQUENCE
//     // const [data1] = await getJSON(
//     //   `https://restcountries.com/v3.1/name/${c1}`,
//     //   'Country not found'
//     // );
//     // const [data2] = await getJSON(
//     //   `https://restcountries.com/v3.1/name/${c2}`,
//     //   'Country not found'
//     // );
//     // const [data3] = await getJSON(
//     //   `https://restcountries.com/v3.1/name/${c3}`,
//     //   'Country not found'
//     // );
//     // console.log([data1.capital, data2.capital, data3.capital]);

//     //::LOADING ALL TOGETHER - THEY ARE INDEPENDANT ASYNC OUTPUTS
//     //VERY IMPORTANT! UNLIKE PROMISE.ALLSETTLED() ANY ONE OF THE ITEMS FAILED RESOLVING, SHORT CIRCUITS THE ENTIRE PROMISE ARRAY
//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v3.1/name/${c1}`, 'Country not found'),
//       getJSON(`https://restcountries.com/v3.1/name/${c2}`, 'Country not found'),
//       getJSON(`https://restcountries.com/v3.1/name/${c3}`, 'Country not found'),
//     ]);
//     // console.log(data);
//     console.log(data.map(d => d[0].capital));
//   } catch (err) {
//     console.error(err);
//   }
// };

// get3Countries('portugal', 'canada', 'tanEEzania');

//LESSON 266 OTHER PROMISES COMBINATORS: RACE , ALLSETTLED, AND ANY

// //FUNCTION
// function getJSON(url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
//     return response.json();
//   });
// }

// // //::Promise.race
// // //Example#1
// // (async function () {
// //   const res = await Promise.race([
// //     getJSON(
// //       `https://restcountries.com/v3.1/name/portugal`,
// //       'Country not found'
// //     ),
// //     getJSON(`https://restcountries.com/v3.1/name/egypt`, 'Country not found'),
// //     getJSON(`https://restcountries.com/v3.1/name/turkiye`, 'Country not found'),
// //   ]);
// //   console.log(res[0]);
// // })(); //IEFF FUNCTION EXECUTES AUTOMATICALLY

// // //Example#2
// // const timeout = function (sec) {
// //   return new Promise(function (resolve, reject) {
// //     setTimeout(function () {
// //       reject(new Error('Request took too long'));
// //     }, sec);
// //   });
// // };
// // Promise.race([
// //   getJSON(`https://restcountries.com/v3.1/name/portugal`, 'Country not found'),
// //   timeout(200),
// // ])
// //   .then(res => console.log(res[0]))
// //   .catch(err => console.error(err));

// //::Promise.allSettled
// //VERY IMPORTANT! PROMISE.ALL() KEEPS CONTINUE PROCESSING THE PROMISES EVENTHOUGH ONE FAILS - NO SHORTCIRCUITING
// Promise.allSettled([
//   getJSON(`https://restcountries.com/v3.1/name/EGYPT`, 'Country not found'),
//   getJSON(`https://restcountries.com/v3.1/name/turkey`, 'Country not found'),
//   getJSON(
//     `https://restcountries.com/v3.1/name/portugalxxxx`,
//     'Country not found'
//   ), //shortcuiting item
// ]).then(res => console.log(res)); //we still get returned promise from the code
// //vs...
// Promise.all([
//   getJSON(`https://restcountries.com/v3.1/name/EGYPT`, 'Country not found'),
//   getJSON(`https://restcountries.com/v3.1/name/turkey`, 'Country not found'),
//   getJSON(
//     `https://restcountries.com/v3.1/name/portugalxxxx`,
//     'Country not found'
//   ), //shortcuiting item
// ]).then(res => console.log(res)); //NO PROMISE RETURNED FROM promise.all()

// //::Promise.any
// //VERY IMPORTANT! PROMISE.ANY RETURNS THE FIRST FULLFILLED PROMISE THAT GOT RESOLVED
// Promise.any([
//   getJSON(`https://restcountries.com/v3.1/name/turkey`, 'Country not found'),
//   getJSON(`https://restcountries.com/v3.1/name/EGYPT`, 'Country not found'),
//   getJSON(
//     `https://restcountries.com/v3.1/name/portugalxxxx`,
//     'Country not found'
//   ), //shortcuiting item
// ]).then(res => console.log(res));

//CODING CHALLENGE #3
/*
Your tasks:
PART 1
1. Write an async function 'loadNPause' that recreates Challenge #2, this time
using async/await (only the part where the promise is consumed, reuse the
'createImage' function from before)
2. Compare the two versions, think about the big differences, and see which one
you like more
3. Don't forget to test the error handler, and to set the network speed to “Fast 3G”
in the dev tools Network tab
PART 2
1. Create an async function 'loadAll' that receives an array of image paths
'imgArr'
2. Use .map to loop over the array, to load all the images with the
'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'parallel' class to all the images (it has some CSS styles)
Test data Part 2: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-
3.jpg']. To test, turn off the 'loadNPause' function
GOOD LUCK 😀
*/

// const imgPaths = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'];
// const imgContainer = document.querySelector('.images');

// const wait = function (seconds) {
//   return new Promise(function (resolve, reject) {
//     // setTimeout(() => resolve(), seconds * 1000);
//     setTimeout(resolve, seconds * 1000);
//   });
// };
// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;
//     img.addEventListener('load', function () {
//       imgContainer.append(img);
//       resolve(img);
//     });
//     img.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });
//   });
// };

// //#1
// let img;
// async function loadNPause() {
//   try {
//     img = await createImage('img/img-1.jpg');
//     console.log('Image 1 loaded');
//     await wait(2);
//     img.style.display = 'none';
//     img = await createImage('img/img-2.jpg');
//     console.log('Image 2 loaded');
//     await wait(2);
//     img.style.display = 'none';
//     img = await createImage('img/img-3.jpg');
//     console.log('Image 3 loaded');
//     await wait(2);
//     img.style.display = 'none';
//   } catch {
//     console.error(err);
//   }
// }
// loadNPause();

// //#2
// async function loadAll(imgPaths) {
//   try {
//     const imgs = imgPaths.map(async imgPath => await createImage(imgPath)); //NOTE: SAME AS CODE BELOW....
//     // const img = imgPaths.map(async function (imgPath) { return await createImage(imgPath) });
//     //NOTE: createImage returns a PROMISE. we should await this promise otherwise nothing would happen!!
//     console.log(imgs); //3 times promises returned in an array
//     const imgsEl = await Promise.all(imgs);
//     //NOTE: all promises then is returned to have a meaningfull array of returned elements we are looking for
//     console.log(imgsEl);
//     imgsEl.forEach(img => img.classList.add('parallel'));
//   } catch {
//     console.error(err);
//   }
// }
// loadAll(imgPaths);
