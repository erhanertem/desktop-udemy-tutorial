function getCelcius(fah) {
	celc = (((fah - 32) * 5) / 9).toFixed(1);
	console.log(`The temp is ${celc} \xB0C`);
}
getCelcius(321);

function minMax(arr) {
	arr.sort((a, b) => a - b);
	let minValue = arr[0];
	let maxValue = arr[arr.length - 1];
	return { min: minValue, max: maxValue };
}
console.log('minMax([1, 5, 3, 2, 12]) :', minMax([1, 5, 3, 2, 12]));

(function (a = 5, b = 10) {
	return console.log(`A rectangle with a length of ${a} and width of ${b} has an area of ${a * b}.`);
})(1, 2);
