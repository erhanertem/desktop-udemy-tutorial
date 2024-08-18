const d = new Date(10, 30, 2022, 20, 0, 0);
const hour = d.getHours();
console.log(hour);

if (hour < 12) {
	console.log('Good Morning');
} else if (hour < 18) {
	console.log('Good afternoon');
} else console.log('Good night');

if (hour >= 20) {
	console.log('zzzzz...');
}

if (hour >= 7 && hour < 15) {
	console.log('At work...');
}

if (hour === 6 || hour === 20) {
	console.log('Brush your teeth');
}
