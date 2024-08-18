const socials = ['Twitter', 'LinkedLn', 'Instagram', 'Facebook'];

socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));

function logSocials(item) {
	console.log(item);
}
socials.forEach(logSocials);

let result = '';
socials.forEach((item, index, arr) => (result += item + ' '));
console.log(result);
