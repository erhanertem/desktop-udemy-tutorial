for (let i = 0; i <= 20; i++) {
	if (i === 15) {
		console.log('Breaking...');
		break;
	}
	console.log(i);
}

for (let i = 0; i <= 20; i++) {
	if (i === 15) {
		console.log('Skipping...');
		continue;
	}
	console.log(i);
}
