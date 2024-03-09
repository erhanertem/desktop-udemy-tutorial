// // SECTION 2
// const mission = process.argv[2];

// if (mission === 'learn') {
//   console.log('Time to write some Node code!');
// } else {
//   console.log(`Is ${mission} really more fun?`);
// }

// SECTION 3
// console.log('💀 finishes!');
// console.log('🐢 finishes!');

// setTimeout(() => console.log('💀 finishes!'), 1000);
// console.log('🐢 finishes!');

// const EventEmitter = require('events');
// // Assign celebrity as the event emitter object
// const celebrity = new EventEmitter();
// //Subscribe to celebrity for Observer 1 to 'race win' event
// // When celebrity event emitter emits an event called 'race win' , the callback function provided to onEven listener as the 2nd arg gets triggered.
// celebrity.on('race win', () => console.log("Congradulations! You'r the best"));
// //Subscribe to celebrity for Observer 2 to 'race win' event
// celebrity.on('race even', () => {
//   console.log('Boo, I could have done better than that!');
// });
// //Subscribe to celebrity for Observer 3 to 'race win' event
// celebrity.on('race', (result) => {
//   if (result === 'freaky') {
//     console.log(`Boo, its ${result}!`);
//   }
// });

// // Process is behind the scene executed as an instance of event emitter. Therefore, we only provide onEventListener
// process.on('exit', (code) =>
//   console.log('Process exit event with code:', code)
// );

// // Let celebrity emit 'race win' event
// celebrity.emit('race', 'freaky'); // Event with a result argument
// celebrity.emit('race win'); //Event only
// celebrity.emit('race lost');
// celebrity.emit('race even');

// // SECTION 22 - ASYNC JS
// setTimeout(() => {
//   console.log('1', 'is the loneliest number');
// }, 0);
// setTimeout(() => {
//   console.log('2', 'can be as bad as one');
// }, 10);

// //2
// Promise.resolve('hi').then((data) => console.log('2', data, '****'));

// //3
// console.log('3', 'is a crowd');

// const promise = new Promise((resolve, reject) => {
//   if (true) {
//     resolve('Stuff worked');
//   } else {
//     reject('Error, it broke');
//   }
// });

// promise
//   .then((result) => result + '!')
//   .then((result) => {
//     console.log('⚠️', result);
//     // throw Error;
//   })
//   .catch(() => console.log('error!!'))
//   .then((result) => {
//     console.log('⚠️', result);
//     throw Error;
//   });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'HIII');
// });
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000, 'POOKIE');
// });
// const promise4 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, 'Is it me you looking for?');
// });

// Promise.all([promise, promise2, promise3, promise4]).then((values) =>
//   console.log(values)
// );

// const urls = [
//   'https://jsonplaceholder.typicode.com/todos',
//   'https://jsonplaceholder.typicode.com/posts',
//   'https://jsonplaceholder.typicode.com/albums',
// ];

// Promise.all(
//   urls.map((url) => {
//     return fetch(url).then((res) => res.json());
//   })
// )
//   .then((results) => {
//     console.log(results[0], results[1], results[2]);
//   })
//   .catch(() => console.log('error'));

// //> ASYNC/AWAIT
// movePlayer(100, 'Left')
//   .then(() => movePlayer(400, 'Left'))
//   .then(() => movePlayer(10, 'Right'))
//   .then(() => movePlayer(330, 'Left'));
// async function playerStart() {
//   await movePlayer(100, 'Left');
//   await movePlayer(400, 'Left');
//   await movePlayer(10, 'Right');
//   await movePlayer(330, 'Left');
// }

// fetch('https://jsonplaceholder.typicode.com/albums')
//   .then((res) => res.json())
//   .then((results) => {
//     console.log(results);
//   })
//   .catch(() => console.log('error fetching'));

// (async function fetchUsers() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/albums');
//   const data = await res.json();
//   console.log(data);
// })();

// const urls = [
//   'https://jsonplaceholder.typicode.com/todos',
//   'https://jsonplaceholder.typicode.com/posts',
//   'https://jsonplaceholder.typicode.com/albums',
// ];

// (async function () {
//   try {
//     const [users, posts, albums] = await Promise.all(
//       urls.map(async (url) => {
//         const res = await fetch(url);
//         return await res.json();
//       })
//     );
//     console.log(users, posts, albums);
//   } catch (err) {
//     console.log('⚠️⚠️⚠️⚠️⚠️oppsy errorrr!', err);
//   }
// })();

// const userLeft = true;
// const userWatchingCatMeme = true;
// CALLBACK VERSION
// function watchTutorialCallBack(callback, errorCallback) {
//   if (userLeft) {
//     errorCallback({
//       name: 'User Left',
//       message: ':(',
//     });
//   } else if (userWatchingCatMeme) {
//     errorCallback({
//       name: 'User Watching Cat Meme',
//       message: 'WebDevSimplified < Cat',
//     });
//   } else {
//     callback('Thumbs up and Subscribe');
//   }
// }
// watchTutorialCallBack(
//   (message) => console.log('Success' + message),
//   (error) => console.log(error.name + ' ' + error.message)
// );
// // PROMISE VERSION
// function watchTutorialPromise() {
//   return new Promise((resolve, reject) => {
//     if (userLeft) {
//       reject({
//         name: 'User Left',
//         message: ':(',
//       });
//     } else if (userWatchingCatMeme) {
//       reject({
//         name: 'User Watching Cat Meme',
//         message: 'WebDevSimplified < Cat',
//       });
//     } else {
//       resolve('Thumbs up and Subscribe');
//     }
//   });
// }
// watchTutorialPromise()
//   .then((message) => console.log('Success' + message))
//   .catch((error) => console.log(error.name + ' ' + error.message));

// //SPREAD OPERATOR
// const animals = { tiger: 23, lion: 5, monkey: 2 };
// const { tiger, ...rest } = animals;
// console.log(tiger, rest);

// const array = [1, 2, 3, 4, 5];
// function sum(a, b, c, d, e) {
//   return a + b + c + d + e;
// }
// sum(...array);

// //> ASYNC-FINALLY
// const urls = [
//   'https://swapi.co/api/people/1',
//   'https://swapi.co/api/people/2',
//   'https://swapi.co/api/people/3',
//   'https://swapi.co/api/people/4',
// ];

// Promise.all(
//   urls.map((url) => {
//     return fetch(url).then((res) => res.json());
//   })
// )
//   .then((array) => {
//     console.log('1', array[0]);
//     console.log('2', array[1]);
//     console.log('3', array[2]);
//     console.log('4', array[3]);
//   })
//   .catch((err) => console.log('ughh fix it', err))
//   .finally(() => console.log('extra'));

// //> FOR AWAIT OF ASYNC LOOP ITERATOR
// const urls = [
//   'https://jsonplaceholder.typicode.com/todos',
//   'https://jsonplaceholder.typicode.com/posts',
//   'https://jsonplaceholder.typicode.com/albums',
// ];

// const getData = async function () {
//   try {
//     const [users, posts, albums] = await Promise.all(
//       urls.map(async (url) => {
//         const res = await fetch(url);
//         return await res.json();
//       })
//     );
//     console.log('users', users);
//     console.log('posts', posts);
//     console.log('albums', albums);
//   } catch (err) {
//     console.log('⚠️⚠️⚠️⚠️⚠️oppsy errorrr!', err);
//   } finally {
//     console.log('No matter what!!');
//   }
// };

// const getData2 = async function () {
//   try {
//     const arrayOfPromises = urls.map((url) => fetch(url));
//     for await (let res of arrayOfPromises) {
//       const data = await res.json();
//       console.log(data);
//     }
//   } catch (err) {
//     console.log('⚠️⚠️⚠️⚠️⚠️oppsy errorrr!', err);
//   } finally {
//     console.log('No matter what!!');
//   }
// };

// //> JOB QUE
// //1 Callback Que - Task Que
// setTimeout(() => {
//   console.log('1', 'is the loneliest number');
// }, 0);
// setTimeout(() => {
//   console.log('2', 'can be as bad as one');
// }, 10);

// //2 Job Que - Microtask Que
// Promise.resolve('hi').then((data) => console.log('2', data, '****'));

// //3
// console.log('3', 'is a crowd');

// //> PARALLLEL, SEQUENCIAL, RACE PROMISES
// const promisify = (item, delay) =>
//   new Promise((resolve) => setTimeout(() => resolve(item), delay));

// const a = () => promisify('a', 100);
// const b = () => promisify('b', 5000);
// const c = () => promisify('c', 3000);

// async function parallel() {
//   const promises = [a(), b(), c()];
//   const [output1, output2, output3] = await Promise.all(promises);
//   return `parallel is done: ${output1} ${output2} ${output3}`;
// }

// async function race() {
//   const promises = [a(), b(), c()];
//   const output1 = await Promise.race(promises);
//   return `race is done: ${output1}`;
// }

// async function sequence() {
//   const output1 = await a();
//   const output2 = await b();
//   const output3 = await c();
//   return `sequence is done ${output1} ${output2} ${output3}`;
// }

// sequence().then(console.log);
// parallel().then(console.log);
// race().then(console.log);

// //> ALLSETTLED PROMISE
// const promise1 = new Promise((resolve, reject) => setTimeout(resolve, 3000));
// const promise2 = new Promise((resolve, reject) => setTimeout(reject, 3000));
// Promise.allSettled([promise1, promise2])
//   .then((data) => console.log(data))
//   .catch((err) => console.log('smt failed', err));
