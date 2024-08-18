//LESSON 33 The Event Loop in Practice

const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();

//VERY IMPORTANT: WE CAN MANIPULATE THREDPOOLSIZE FROM 4 TO 1 IN WINDOWS ENVIRONMENT BY SETTING IT FIRST THEN RUNN THIS APP IN NODE. A LOAD SCRIPT COULD BE FOUND IN THE PACKAGE.JSON FILE

//NOTE: The code below do not run  yet in the event loop so expected order of processing in an node.js event loop should not be expected...

setTimeout(() => console.log("Timer 1 finished"), 0);
setImmediate(() => console.log("Immediate 1 finished"));

//NOTE: The code inside this async function is executed in the event loop
fs.readFile("test-file.txt", () => {
	console.log("I/O finished");
	console.log("------------");

	setTimeout(() => console.log("Timer 2 finished"), 0);
	setTimeout(() => console.log("Timer 3 finished"), 3000);
	setImmediate(() => console.log("Immediate 2 finished"));

	process.nextTick(() => console.log("Process.nextTick")); //Executed once in each loop only

	//sync version crypto - eventhough they are inside the async function, event loop do not include them and they come right after the console.logs then which the rest async functions getrs executed.
	crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
	console.log("Took", Date.now() - start, "ms Password encrypted");
	crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
	console.log("Took", Date.now() - start, "ms Password encrypted");
	crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
	console.log("Took", Date.now() - start, "ms Password encrypted");
	crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
	console.log("Took", Date.now() - start, "ms Password encrypted");
	crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
	console.log("Took", Date.now() - start, "ms Password encrypted");

	// //async version crypto
	// crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
	// 	console.log("Took ", Date.now() - start, "ms Password encrypted");
	// });
	// crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
	// 	console.log("Took ", Date.now() - start, "ms Password encrypted");
	// });
	// crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
	// 	console.log("Took ", Date.now() - start, "ms Password encrypted");
	// });
	// crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
	// 	console.log("Took ", Date.now() - start, "ms Password encrypted");
	// });
});

console.log("Hello from the top-level code");
