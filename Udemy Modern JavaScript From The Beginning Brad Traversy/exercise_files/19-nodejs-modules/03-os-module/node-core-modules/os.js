const os = require('os');

// -> arch()
console.log(os.arch());

// -> platform()
console.log(os.platform());
if (os.platform() === 'darwin') {
	console.log('You are on mac');
} else if (os.platform() === 'win32') {
	console.log('You are windows');
} else {
	console.log('You are on linux');
}

// -> cpus()
// console.log(os.cpus());
console.log(
	`You are on a ${os.cpus().length} core CPU with ${os.cpus()[0].model} @ base speed of ${os.cpus()[0].speed}Mhz`
);

// -> freemem()
console.log(os.freemem());
console.log(`Free memory : ${(os.freemem() / 1024 / 1024 / 1024).toFixed(2)} GB`);

// -> totolmem()
console.log(`Total memory : ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB`);

// -> homedir
console.log(os.homedir());

// -> uptime()
console.log(os.uptime());
const days = `${Math.floor(os.uptime() / 60 / 60 / 24)} days`;
const hours = `${Math.floor((os.uptime() / 60 / 60) % 24)} hours`;
const mins = `${Math.floor((os.uptime() / 60) % 60)} mins`;
const secs = `${Math.floor(os.uptime() % 60)} secs`;

console.log(`Uptime : ${days} - ${hours} - ${mins} - ${secs}`);

// -> hostname()
console.log(os.hostname());
