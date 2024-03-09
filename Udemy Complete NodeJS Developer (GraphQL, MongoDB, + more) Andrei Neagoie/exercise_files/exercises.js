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

// SECTION 22 - ASYNC JS
setTimeout(() => {
  console.log('1', 'is the loneliest number');
}, 0);
setTimeout(() => {
  console.log('2', 'can be as bad as one');
}, 10);

//2
Promise.resolve('hi').then((data) => console.log('2', data));

//3
console.log('3', 'is a crowd');
